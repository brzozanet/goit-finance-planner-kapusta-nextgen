import express from "express";

const router = express.Router();

import { auth } from "../../middlewares.js";
import { updateUserBalance } from "../../controller/userController.js";


router.patch("/balance", auth, updateUserBalance); 


export default router;