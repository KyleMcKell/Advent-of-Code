import { getFileData } from "../../utils.ts";

const fileData = await getFileData("input");

const splitFileData = fileData.split("\n");

let score = 0;

for (let i = 0; i < splitFileData.length; i++) {
  const data = splitFileData[i].split(" ");
  const result = data[1];
  const you = data[0];
  if (result === "X") {
    score += 0;
  }
  if (result === "Y") {
    score += 3;
  }
  if (result === "Z") {
    score += 6;
  }

  if (you === "A") {
    switch (result) {
      case "X":
        score += 3;
        break;
      case "Y":
        score += 1;
        break;
      case "Z":
        score += 2;
        break;
    }
  }

  if (you === "B") {
    switch (result) {
      case "X":
        score += 1;
        break;
      case "Y":
        score += 2;
        break;
      case "Z":
        score += 3;
        break;
    }
  }

  if (you === "C") {
    switch (result) {
      case "X":
        score += 2;
        break;
      case "Y":
        score += 3;
        break;
      case "Z":
        score += 1;
        break;
    }
  }
}

console.log(score);
