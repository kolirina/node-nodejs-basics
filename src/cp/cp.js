import { spawn } from "child_process";
import { pipeline } from "stream";
import { join } from "path";

const spawnChildProcess = async (args) => {
  const scriptPath = join(import.meta.dirname, "./files/script.js");
  const child = spawn("node", [scriptPath, ...args]);

  process.stdin.pipe(child.stdin);

  pipeline(child.stdout, process.stdout, (err) => {
    if (err) {
      console.error("Pipeline failed:", err);
    }
  });

  child.on("error", (err) => {
    console.error("Failed to start child process:", err);
  });

  child.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["joy", "freedom"]);
