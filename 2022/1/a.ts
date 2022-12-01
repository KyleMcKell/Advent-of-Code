export const x = "";

const fileData = await Deno.readTextFile("./input.txt");

const splitFileData = fileData.split("\n");

const arr = [0];

for (let i = 0; i < splitFileData.length; i++) {
  if (!splitFileData[i]) {
    arr.push(0);
  } else {
    arr[arr.length - 1] += parseInt(splitFileData[i]);
  }
}

arr.sort((a, b) => b - a);

console.log(arr[0]);
