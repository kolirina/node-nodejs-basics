import { promises as fs } from "fs";
import { join } from "path";

const create = async () => {
  const filePath = join(import.meta.dirname, "./files/fresh.txt");
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(filePath, "I am fresh and young");
    } else {
      throw error;
    }
  }
};

await create();
