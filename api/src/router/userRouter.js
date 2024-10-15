import express from "express";
import { createUser, getUserById } from "../models/userSchema";
const router = express.Router();

// Get uer data
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await getUserById(id);

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
