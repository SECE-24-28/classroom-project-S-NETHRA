const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

exports.createAdmin = async (req, res) => {
  try {
    const { firstName, secondName, email, mobileNumber, password } = req.body;
    
    // Validate required fields
    if (!firstName || !email || !mobileNumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: firstName, email, mobileNumber, password"
      });
    }
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin with this email already exists"
      });
    }
    
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create new admin
    const newAdmin = new Admin({
      firstName,
      secondName,
      email,
      mobileNumber,
      password: hashedPassword
    });
    
    const savedAdmin = await newAdmin.save();
    
    return res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: {
        id: savedAdmin._id,
        firstName: savedAdmin.firstName,
        secondName: savedAdmin.secondName,
        email: savedAdmin.email,
        mobileNumber: savedAdmin.mobileNumber,
        role: savedAdmin.role
      }
    });
  } catch (e) {
    console.error("Error creating admin:", e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: e.message
    });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password"
      });
    }
    
    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
    
    // Compare password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
    
    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      data: {
        id: admin._id,
        firstName: admin.firstName,
        secondName: admin.secondName,
        email: admin.email,
        mobileNumber: admin.mobileNumber,
        role: admin.role
      }
    });
  } catch (e) {
    console.error("Error during admin login:", e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: e.message
    });
  }
};

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({}, { password: 0 }); // Exclude password field
    
    return res.status(200).json({
      success: true,
      message: "Admins retrieved successfully",
      data: admins
    });
  } catch (e) {
    console.error("Error getting admins:", e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: e.message
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

exports.getDetails = async (req, res) => {
  try {
    const { id, mainDetails } = req.query;
    const { data } = req.params;
    console.log("the params:", data);

    // console.log("The id details:", id, mainDetails);
    // console.log("=>(The data:)<=", data);
    // console.log("The main details:", mainDetails);
    return res.status(200).json({
      success: true,
      message: "The data got filled",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.adminRegister = async (req, res) => {
  try {
    const { email, firstName, secondName, mobileNumber, password } = req.body;

    const findAdmin = await admin.findOne({
      email: email,
      mobileNumber: mobileNumber,
    });
    //console.log("The find user:", findUser);

    if (findAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin is already resigtered",
      });
    }
    await admin.create({
      email,
      firstName,
      secondName,
      mobileNumber,
      password,
    });
    return res.status(200).json({
      success: true,
      message: "Admin is registed successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.getAllAdminDetails = async (req, res) => {
  try {
    console.log("HEllo world");

    const { email, mobile } = req.params;
    console.log("The request query:", req.query);

    console.log("The email query:", email);
    console.log("Mobile:", mobile);

    const getDetails = await admin.find({ email, mobileNumber: mobile });
    if (!getDetails) {
      return res.status(404).json({
        success: false,
        message: "User not existing",
      });
    }
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
