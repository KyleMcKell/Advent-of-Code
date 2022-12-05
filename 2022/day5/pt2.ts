import { getFileData } from "../../utils.ts";

type direction = {
  numCratesToMove: number;
  transferringStackIndex: number;
  receivingStackIndex: number;
};

const fileData = await getFileData("input");

const [crane, movesStr] = fileData.split("\n\n");

const moves = movesStr.split("\n");

const directions: direction[] = moves.map((move) => {
  const splitMoves = move.split(" ");
  return {
    numCratesToMove: Number(splitMoves[1]),
    transferringStackIndex: Number(splitMoves[3]) - 1,
    receivingStackIndex: Number(splitMoves[5]) - 1,
  };
});

const craneAsData = crane.split("\n");
const numColumns = craneAsData.at(-1)!.split("   ").length;
const stacks: string[][] = Array(numColumns)
  .fill([])
  .map((x) => x.slice(0));

const craneRows = craneAsData.slice(0, craneAsData.length - 1);

for (let i = craneRows.length - 1; i >= 0; i--) {
  const craneRow = craneRows[i];

  const splitCraneRow = craneRow.split(" ");

  let currColumn = 0;
  let spaceCount = 0;
  for (let i = 0; i < splitCraneRow.length; i++) {
    if (splitCraneRow[i] === "") {
      spaceCount++;
      if (spaceCount === 4) {
        currColumn++;
        spaceCount = 0;
      }
    }
    if (splitCraneRow[i] !== "") {
      stacks[currColumn].push(splitCraneRow[i].split("")[1]);
      spaceCount = 0;
      currColumn++;
    }
  }
}

for (let i = 0; i < directions.length; i++) {
  const { numCratesToMove, transferringStackIndex, receivingStackIndex } = directions[i];

  const transferStack = stacks[transferringStackIndex];
  const receiveStack = stacks[receivingStackIndex];

  const popArr: string[] = [];

  for (let j = 0; j < numCratesToMove; j++) {
    const popped = transferStack.pop();
    if (popped) popArr.unshift(popped);
  }

  receiveStack.push(...popArr);
}

const topOfStacks = stacks.reduce((x, y) => x + y.at(-1), "");

console.log(topOfStacks);
