import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.send("ok");
});

export default healthRouter;
