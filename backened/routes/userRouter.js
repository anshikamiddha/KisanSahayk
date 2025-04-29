import express from "express";
import { loginUser, signupUser } from "../controllers/userController.js";

const userRouter = express.Router();

// Sign-up route (for new users to register)
userRouter.post("/signup", signupUser);

// Login route (for existing users to log in)
userRouter.post("/login", loginUser);

export default userRouter;
