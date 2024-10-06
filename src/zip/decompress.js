import { join } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const decompress = async () => {
  const fileToDecompress = join(
    import.meta.dirname,
    "./files/fileToCompress.txt"
  );
  const archiveFile = join(import.meta.dirname, "./files/archive.gz");

  const readStream = createReadStream(archiveFile);
  const writeStream = createWriteStream(fileToDecompress);
  const gunzipStream = createGunzip();

  pipeline(readStream, gunzipStream, writeStream, (err) => {
    if (err) {
      console.error("Decompression failed:", err.message);
    } else {
      console.log("File successfully decompressed to fileToCompress.txt");
    }
  });
};

await decompress();
