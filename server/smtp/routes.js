import express from "express";
import { sendOtp } from "./controller.js";

const router = express.Router();

router.post("/forgot-password", sendOtp);

export default router;
