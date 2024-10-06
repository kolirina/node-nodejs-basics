import { join } from "path";
import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";

const compress = async () => {
  const fileToCompress = join(
    import.meta.dirname,
    "./files/fileToCompress.txt"
  );
  const archiveFile = join(import.meta.dirname, "./files/archive.gz");

  const readStream = createReadStream(fileToCompress);
  const writeStream = createWriteStream(archiveFile);
  const gzipStream = createGzip();

  pipeline(readStream, gzipStream, writeStream, (err) => {
    if (err) {
      console.error("Compression failed:", err.message);
    } else {
      console.log("File successfully compressed to archive.gz");
    }
  });
};

await compress();
