import { getSplitFileData } from "../../utils.ts";

const splitFileData = await getSplitFileData("input");

const groupedData = splitFileData.map((section) => {
  const splitSection = section.split(",");
  return splitSection;
});

const sortedNumberArr = [];

// split each assignment into an array of numbers to find the ranges
for (let i = 0; i < groupedData.length; i++) {
  const mappedData = groupedData[i].map((assignment) => {
    const splitAssignment = assignment.split("-").map((item) => Number(item));
    return splitAssignment;
  });
  const sortedData = mappedData.sort((a, b) => {
    const rangeSumA = a[1]! - a[0];
    const rangeSumB = b[1]! - b[0];
    const res = rangeSumB - rangeSumA;
    return res;
  });
  sortedNumberArr.push(sortedData);
}

let pairs = 0;
for (let i = 0; i < sortedNumberArr.length; i++) {
  const [largerRange, shorterRange] = sortedNumberArr[i];
  if (largerRange[0] <= shorterRange[0] && largerRange[1] >= shorterRange[0]) {
    pairs++;
  } else if (
    largerRange[1] >= shorterRange[1] &&
    largerRange[0] <= shorterRange[1]
  ) {
    pairs++;
  }
}

console.log(pairs);
