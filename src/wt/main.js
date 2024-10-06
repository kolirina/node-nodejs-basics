import { Worker, isMainThread } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  if (!isMainThread) return;

  const numCPUs = os.cpus().length;
  const workers = [];
  const results = [];

  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    workers.push(worker);

    worker.postMessage(10 + i);

    worker.on("message", (message) => {
      results[i] = message;
      if (results.length === numCPUs) {
        console.log(results);
        process.exit();
      }
    });

    worker.on("error", (error) => {
      console.error(`Error in Worker: ${error}`);
    });

    worker.on("exit", (code) => {
      if (code !== 0) {
        console.error(`Worker finished with code: ${code}`);
      }
    });
  }
};

await performCalculations();
