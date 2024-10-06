import { join } from "path";
import { promises as fs } from "fs";

const remove = async () => {
  const file = join(import.meta.dirname, "./files/fileToRemove.txt");
  try {
    await fs.access(file);
    await fs.unlink(file);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
