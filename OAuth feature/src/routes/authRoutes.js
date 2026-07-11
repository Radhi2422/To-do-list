const express = require("express");
const router = express.Router();
// GET  /auth/login
// GET  /auth/callback
// POST /auth/logout
// GET  /auth/status

const authController =require("../controller/authController");

router.get("/auth/login", authController.login);
router.get("/auth/callback", authController.callback);
router.get("/auth/logout", authController.logout);
router.get("/auth/status", authController.status);
//router.post("/register", validateRegister,authController.register);

module.exports = router;