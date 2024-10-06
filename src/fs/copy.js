import { promises as fs, mkdir } from "fs";
import { join } from "path";

const copy = async () => {
  const originalDirPath = join(import.meta.dirname, "files");
  const newDirPath = join(import.meta.dirname, "files_copy");
  try {
    await fs.access(originalDirPath);
    await fs.access(newDirPath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(newDirPath);
      await fs.cp(originalDirPath, newDirPath, { recursive: true });
    } else {
      throw error;
    }
  }
};

await copy();
