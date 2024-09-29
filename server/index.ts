import process from "node:process";
import { remixFastify } from "@mcansh/remix-fastify";
import { fastify } from "fastify";
import sourceMapSupport from "source-map-support";
import dotenv from 'dotenv';

sourceMapSupport.install();

dotenv.config();
const app = fastify();
const env = process.env.ENV;
console.log(process.env);
const mode = env === "local" ? "development" : "production";
await app.register(remixFastify, { mode: mode, getLoadContext: () => ({ENV: process.env.ENV, TEST: process.env.TEST}) });

const host = "0.0.0.0";
const desiredPort = Number(process.env.PORT) || 3000;

const address = await app.listen({ port: desiredPort, host });

console.log(`✅ app ready: ${address}`);
