import process from "node:process";
import chalk from "chalk";
import { remixFastify } from "@mcansh/remix-fastify";
import { fastify } from "fastify";
import sourceMapSupport from "source-map-support";

sourceMapSupport.install();

const app = fastify();

const env = process.env.ENV;
const mode = env === "local" ? "development" : "production";
console.log("mode", mode);
await app.register(remixFastify, { mode: mode });

const host = "0.0.0.0";
const desiredPort = Number(process.env.PORT) || 3000;

const address = await app.listen({ port: desiredPort, host });


console.log(chalk.green(`✅ app ready: ${address}`));
