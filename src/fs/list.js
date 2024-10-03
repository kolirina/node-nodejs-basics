import { join } from "path";
import { promises as fs } from "fs";

const list = async () => {
  const path = join(import.meta.dirname, "./files");
  try {
    await fs.access(path);
    const files = await fs.readdir(path);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
