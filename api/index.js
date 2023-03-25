import express from "express";
import cors from "cors";
import bodyparser from "body-parser";

import dotenv from "dotenv";
import ChatRoute from "./routes/chatgpt.js";
const app = express();
dotenv.config();

app.use(bodyparser.json());
app.use(cors());

app.use("/api/chat", ChatRoute);

const port = 2300;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
