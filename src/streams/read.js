import { createReadStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, "./files/fileToRead.txt");
  console.log(filePath);

  const readableStream = createReadStream(filePath, "utf-8");

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk + "\n");
  });

  readableStream.on("error", (err) => {
    console.error("FS operation failed:", err.message);
  });
};

await read();
