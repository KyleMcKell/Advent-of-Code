import { getFileData } from "../../utils.ts";

const fileData = await getFileData("input");

const splitFileData = fileData.split("\n");

let score = 0;

for (let i = 0; i < splitFileData.length; i++) {
  const data = splitFileData[i].split(" ");
  const me = data[1];
  const you = data[0];
  if (me === "X") {
    score += 1;
    if (you === "C") {
      score += 6;
    }
    if (you === "A") {
      score += 3;
    }
  }
  if (me === "Y") {
    score += 2;
    if (you === "A") {
      score += 6;
    }
    if (you === "B") {
      score += 3;
    }
  }
  if (me === "Z") {
    score += 3;
    if (you === "B") {
      score += 6;
    }
    if (you === "C") {
      score += 3;
    }
  }
}

console.log(score);
