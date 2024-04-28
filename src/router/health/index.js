import { Router } from "express";

const createHealthRouter = () => {
  const healthRouter = Router();

  healthRouter.get("/", (_req, res) => {
    res.send("OK");
  });

  return healthRouter;
};

const healthRouterIoC = (app) => {
  const healthRouter = createHealthRouter();

  app.use("/health", healthRouter);
};

export default healthRouterIoC;
