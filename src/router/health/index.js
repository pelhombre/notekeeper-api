import { Router } from "express";

const createRouter = () => {
  const healthRouter = Router();

  healthRouter.get("/", (_req, res) => {
    res.send("OK");
  });

  return healthRouter;
};

const healthRouterIoC = (app) => {
  const healthRouter = createRouter();

  app.use("/health", healthRouter);
};

export default healthRouterIoC;
