export async function getFileData(fileName: "input" | "example") {
  const file = `./${fileName}.txt`;
  const fileData = await Deno.readTextFile(file);
  return fileData;
}
