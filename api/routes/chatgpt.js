import express from "express";
import PostPrompt from "../controllers/chatgpt.js";

const router = express.Router();

router.post("/chat", PostPrompt);

export default router;
