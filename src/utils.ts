import fs from "fs";

// lol this is unecessary but I figure it'll be nice to have
export function getFileData(fileName: "input" | "example", dirName: string) {
  return fs.readFileSync(`${dirName}/${fileName}.txt`, "utf-8");
}
