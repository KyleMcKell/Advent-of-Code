import { getFileData } from "../../utils.ts";

const fileData = await getFileData("input");

const splitFileData = fileData.split("\n");

const groupedData: string[][] = [[]];
let groupNum = 0;

for (let i = 0; i < splitFileData.length; i++) {
  if (groupNum === 3) {
    groupNum = 0;
    groupedData.push([]);
  }
  groupedData[groupedData.length - 1].push(splitFileData[i]);
  groupNum++;
}

console.log(groupedData);

const result: string[] = [];

for (let i = 0; i < groupedData.length; i++) {
  const group = groupedData[i];
  const groupAsArr = group.map((sack) => sack.split(""));
  const firstSack = groupAsArr[0];
  const filteredSack = firstSack.filter((firstSackItem) => {
    return group.every((item) => item.indexOf(firstSackItem) !== -1);
  });
  result.push(filteredSack[0]);
}

const resultPrioritized: number[] = [];

// convert the result array to how much each item is worth in points
for (let i = 0; i < result.length; i++) {
  if (result[i] === result[i].toUpperCase()) {
    const priority = result[i].charCodeAt(0) - 38;
    resultPrioritized.push(priority);
  } else {
    const priority = result[i].charCodeAt(0) - 96;
    resultPrioritized.push(priority);
  }
}

const resultSum = resultPrioritized.reduce((x, y) => x + y, 0);
console.log(resultSum);
