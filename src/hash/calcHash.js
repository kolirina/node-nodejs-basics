import { createReadStream } from "fs";
import { createHash } from "crypto";
import { join } from "path";

const calculateHash = async () => {
  const filePath = join(
    import.meta.dirname,
    "./files/fileToCalculateHashFor.txt"
  );

  const fileStream = createReadStream(filePath);

  const hash = createHash("sha256");

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const res = hash.digest("hex");
    console.log(res);
  });

  fileStream.on("error", (error) => {
    console.error("Error occurred:", error.message);
  });
};

await calculateHash();
