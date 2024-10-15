import express from "express";
import { createUser, getUserById } from "../models/userSchema.js";
import { authenticateJWT } from "../middleware/authenticate.js";

const router = express.Router();

// Get uer data
router.get("/profile", authenticateJWT, async (req, res) => {
  try {
    const { user } = req;
    const userData = await getUserById(user._id);

    const respObj = {
      status: true,
      message: "User Data Fetched!",
      data: userData,
    };

    res.status(200).send(respObj);
  } catch (err) {
    let errObj = {
      status: false,
      message: err.message || "Error fetching User",
    };

    res.status(500).send(errObj);
  }
});

export default router;
