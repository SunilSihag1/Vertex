import express from "express";
import { getPlans, getPlan } from "./plan.controller.js";

const router = express.Router();

router.get("/", getPlans);

export default router;