import { getFileData } from "../../utils.ts";

const fileData = await getFileData("input");

const splitFileData = fileData.split("\n");

// split each line into compartments for each rucksack
const rucksackCompartments = splitFileData.map((line) => {
  const halfLength = line.length / 2;
  const lineSplit = line.split("");
  const result = [lineSplit.slice(0, halfLength), lineSplit.slice(halfLength)];
  return result;
});

const result = [];

// loop through each rucksack to see if there is a shared item between compartments
for (let i = 0; i < rucksackCompartments.length; i++) {
  for (let j = 0; j < rucksackCompartments[i][0].length; j++) {
    if (
      rucksackCompartments[i][0].indexOf(rucksackCompartments[i][1][j]) !== -1
    ) {
      result.push(rucksackCompartments[i][1][j]);
      break;
    }
  }
}

const resultPrioritized = [];

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

const resultSum = resultPrioritized.reduce((x, y) => x + y);
console.log(resultSum);
