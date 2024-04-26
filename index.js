require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { healthRouter, notesRouter } = require("./src/router");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/health", healthRouter);
app.use("/notes", notesRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}...`);
});
