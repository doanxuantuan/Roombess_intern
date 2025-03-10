import express from "express";
import {
  getUsers,
  getUserById,
  addUser,
  upload,
} from "../controllers/usercontroller.js";

// import { getUsersController } from "../controllers/user.controller.js";
const router = express.Router();
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", upload.single("avatar"), addUser);
export default router;
