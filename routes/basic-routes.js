const express = require("express");
const {
  createUser,
  getAllUsers
} = require("../apis-function/user-functions");
const { 
  createAdmin, 
  loginAdmin, 
  getAllAdmins 
} = require("../apis-function/admin-function");
const router = express.Router();

// User routes
router.post("/userSignup", createUser);
router.get("/getUsers", getAllUsers);

// Admin routes
router.post("/adminSignup", createAdmin);
router.post("/adminLogin", loginAdmin);
router.get("/getAdmins", getAllAdmins);

module.exports = router;