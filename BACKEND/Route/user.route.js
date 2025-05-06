import express from "express";
import { order } from "../Controller/user.controller.js";
const router=express.Router();

 router.post("/order",order)
export default router;