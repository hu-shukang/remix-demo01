import process from "node:process";
import { remixFastify } from "@mcansh/remix-fastify";
import { fastify } from "fastify";
import sourceMapSupport from "source-map-support";
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

sourceMapSupport.install();

// 从 `import.meta.url` 获取当前文件的路径
const __filename = fileURLToPath(import.meta.url);

// 获取当前文件所在目录的路径
const __dirname = path.dirname(__filename);

try {
  // 同步读取文件夹下的所有文件
  const files = fs.readdirSync(__dirname);
  console.log('Files in current directory:', files);
} catch (err) {
  console.error('Error reading directory:', err);
}
const env = fs.readFileSync(path.resolve(__dirname, `env/current`), 'utf8');
console.log('env', env);
console.log('process.env.ENV', process.env.ENV);
dotenv.config({path: path.resolve(__dirname, `env/.env.${env}`)});
const app = fastify();

const mode = env === "local" ? "development" : "production";
await app.register(remixFastify, { mode: mode });

const host = "0.0.0.0";
const desiredPort = Number(process.env.PORT) || 3000;

const address = await app.listen({ port: desiredPort, host });

console.log(`✅ app ready: ${address}`);
