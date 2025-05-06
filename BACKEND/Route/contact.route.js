import express from "express";
import { login } from "../Controller/contact.controller.js";
const router=express.Router();

 router.post("/login",login)
export default router;