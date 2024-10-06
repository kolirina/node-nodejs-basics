import { join } from "path";
import { promises as fs } from "fs";

const read = async () => {
  const path = join(import.meta.dirname, "./files/fileToRead.txt");
  try {
    await fs.access(path);
    const text = await fs.readFile(path, { encoding: "utf8" });
    console.log(text);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
