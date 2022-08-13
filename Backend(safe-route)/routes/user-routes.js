import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller.js";

const userrouter = express.Router();

userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.get("/", getAllUser);
export default userrouter;
