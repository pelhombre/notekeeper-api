const express = require("express");

const healthRouter = express.Router();

healthRouter.get("/", (_req, res) => {
  res.send("ok");
});

module.exports = healthRouter;
