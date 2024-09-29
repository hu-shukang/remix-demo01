import process from "node:process";
import { remixFastify } from "@mcansh/remix-fastify";
import { fastify } from "fastify";
import sourceMapSupport from "source-map-support";
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
sourceMapSupport.install();

const env = fs.readFileSync(path.resolve(process.cwd(), `env/current`), 'utf8');
console.log('env', env);
console.log('process.env.ENV', process.env.ENV);
dotenv.config({path: path.resolve(process.cwd(), `env/.env.${env}`)});
const app = fastify();

const mode = env === "local" ? "development" : "production";
await app.register(remixFastify, { mode: mode });

const host = "0.0.0.0";
const desiredPort = Number(process.env.PORT) || 3000;

const address = await app.listen({ port: desiredPort, host });

console.log(`✅ app ready: ${address}`);
