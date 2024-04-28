import chalk from "chalk";
import cors from "cors";
import express from "express";

import { healthRouterIoC, notesRouterIoC } from "./src/router/index.js";

const app = express();

app.use(express.json());
app.use(cors());

healthRouterIoC(app);
notesRouterIoC(app);

const PORT = process.env.PORT ?? 3001;
const appVersion = process.env.npm_package_version;

app.listen(PORT, () => {
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
  console.log("\n");
  console.log(
    chalk.yellow("👋", chalk.bold("Notekeeper API"), `v.${appVersion} is up!`)
  );
  console.log("\n");
  console.log(chalk.green(`🚀 Server running at port ${PORT}...`));
  console.log("\n");
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
});
