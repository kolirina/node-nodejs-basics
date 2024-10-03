import { promises as fs } from "fs";
import { join } from "path";

const rename = async () => {
  const wrongFile = join(import.meta.dirname, "./files/wrongFilename.txt");
  const properFile = join(import.meta.dirname, "./files/properFilename.md");
  try {
    await fs.access(wrongFile);
    try {
      await fs.access(properFile);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
    await fs.rename(wrongFile, properFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
