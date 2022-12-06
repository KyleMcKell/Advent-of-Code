export async function getFileData(fileName: "input" | "example") {
  const file = `./${fileName}.txt`
  const fileData = await Deno.readTextFile(file)
  return fileData
}

export async function getSplitFileData(file: "input" | "example") {
  const fileData = await getFileData(file)
  const splitFileData = fileData.split("\n")
  return splitFileData
}
