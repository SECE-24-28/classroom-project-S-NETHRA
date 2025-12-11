const User = require("../models/user");
const { createUser, createManyUsers, getAllUsers, updateEmail, deleteUser } = require("../apis-function/user-functions");

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const createUser = await User.create({
      firstName,
      lastName,
      email,
    });

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: createUser,
    });

  } catch (e) {
    res.status(400).json({
      success: false,
      error: e.message,
    });
  }
};


exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUser = await User.insertMany(details);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const getDetails = await User.find();
    // console.log("The users details:", getDetails);
    return res.status(200).json({
      success: true,
      data: getDetails,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.updateEmail = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatethings = await User.updateOne(
      { firstName: name },
      { $set: { email: email } }
    );
    return res.status(200).json({
      success: true,
      message: "email is updated",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
// user-functions.js
exports.deleteUser = async (req, res) => {
  try {
    const { name } = req.body; // get firstName from request
    const result = await User.deleteOne({ firstName: name });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

