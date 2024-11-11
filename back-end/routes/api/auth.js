import express from "express";

const router = express.Router();

import { auth } from "../../middlewares.js";

import { addUser, loginUser, logout } from "../../controller/authController.js";


router.post("/register", addUser);
router.post("/login", loginUser);
router.post("/logout", auth, logout); 


export default router;