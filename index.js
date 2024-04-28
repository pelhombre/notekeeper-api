import cors from "cors";
import express from "express";

import { healthRouterIoC, notesRouterIoC } from "./src/router/index.js";

const app = express();

app.use(express.json());
app.use(cors());

healthRouterIoC(app);
notesRouterIoC(app);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}...`);
});
