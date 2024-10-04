import { createReadStream } from "fs";
import { join } from "path";

const read = async () => {
  const filePath = join(import.meta.dirname, "./files/fileToRead.txt");

  const readableStream = createReadStream(filePath, "utf-8");

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on("error", (err) => {
    console.error("FS operation failed:", err.message);
  });
};

await read();
