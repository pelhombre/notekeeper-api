import cors from "cors";
import express, { json } from "express";

import { healthRouter, notesRouter } from "./src/router/index.js";

const app = express();

app.use(json());
app.use(cors());

app.use("/health", healthRouter);
app.use("/notes", notesRouter);

const PORT = process.env.PORT ?? 3002;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}...`);
});
