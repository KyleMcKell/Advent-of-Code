import { getSplitFileData } from "../../utils.ts"

const fileData = await getSplitFileData("example")

export function highestThreeCalories(data: string[]) {
  const arr = []

  for (let i = 0; i < data.length; i++) {
    if (!data[i]) {
      arr.push(0)
    } else {
      arr[arr.length - 1] += parseInt(data[i])
    }
  }
  console.log(arr)

  arr.sort((a, b) => b - a)

  const threeHighestElves = arr.slice(0, 3)
  const totalCalories = threeHighestElves.reduce((x, y) => x + y, 0)
  return totalCalories
}

const totalCalories = highestThreeCalories(fileData)

console.log(totalCalories)
