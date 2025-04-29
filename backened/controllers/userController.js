import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/userModel.js";

// INFO: Function to create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// INFO: Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (isPasswordCorrect) {
      const token = createToken(user._id);
      res.status(200).json({ success: true, token });
    } else {
      res
        .status(400)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.log("Error while logging in user: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// INFO: Route for user registration
const signupUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if the user already exists in the database
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // Validate password length (min 8 characters)
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object
    const newUser = new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    // Save the user to the database
    const user = await newUser.save();

    // Create a JWT token
    const token = createToken(user._id);

    // Send a response with the token
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log("Error while registering user: ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};


export { loginUser, signupuser };
