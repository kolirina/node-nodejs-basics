import { join } from "path";
import { createWriteStream } from "fs";
const write = async () => {
  const filePath = join(import.meta.dirname, "./files/fileToWrite.txt");

  const writeStream = createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  writeStream.on("error", (err) => {
    console.error("FS operation failed:", err.message);
  });
};

await write();
