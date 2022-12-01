const fileData = await Deno.readTextFile("./input.txt");

const splitFileData = fileData.split("\n");

const arr = [0];

for (const line in splitFileData) {
  if (!line) {
    arr.push(0);
  } else {
    arr[arr.length - 1] += parseInt(line);
  }
}

arr.sort((a, b) => b - a);

const threeHighestElves = arr.slice(0, 3);
const totalCalories = threeHighestElves.reduce((x, y) => x + y);

console.log(totalCalories);
