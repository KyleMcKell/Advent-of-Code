import { getFileData } from "../utils";

const fileData = getFileData("input", __dirname);

const splitFileData = fileData.split("\n");

const arr: number[] = [0];

for (let i = 0; i < splitFileData.length; i++) {
  if (!splitFileData[i]) {
    arr.push(0);
  } else {
    arr[arr.length - 1] += parseInt(splitFileData[i]);
  }
}

arr.sort((a, b) => b - a);

const threeHighestElves = arr.slice(0, 3);
const totalCalories = threeHighestElves.reduce((x, y) => x + y);

console.log(totalCalories);
