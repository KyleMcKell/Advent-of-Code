import { getFileData } from "../../utils.ts"

const fileData = await getFileData("example")

const splitFileData = fileData.split("\n")

export function highestCalories(data: string[]) {
  const arr = []

  for (let i = 0; i < data.length; i++) {
    if (!data[i]) {
      arr.push(0)
    } else {
      arr[arr.length - 1] += parseInt(data[i])
    }
  }

  arr.sort((a, b) => b - a)

  return arr[0]
}

const result = highestCalories(splitFileData)

console.log(result)
