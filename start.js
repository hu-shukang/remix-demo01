import { spawn } from 'child_process';

// 运行 remix-serve 命令
const child = spawn('npx', ['remix-serve', './build/server/index.js'], {
  stdio: 'inherit'
});

child.on('error', (error) => {
  console.error(`Error starting remix-serve: ${error}`);
});

child.on('exit', (code) => {
  console.log(`remix-serve exited with code ${code}`);
});