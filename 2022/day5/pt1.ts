import { getFileData } from "../../utils.ts"

export type Direction = {
  numCratesToMove: number
  transferringStackIndex: number
  receivingStackIndex: number
}

const fileData = await getFileData("example")

const [craneStr, movesStr] = fileData.split("\n\n")

export function formatDirections(movesStr: string) {
  const moves = movesStr.split("\n")
  const directions: Direction[] = moves.map((move) => {
    const splitMoves = move.split(" ")
    return {
      numCratesToMove: Number(splitMoves[1]),
      // adjusting these two to reflect indices
      transferringStackIndex: Number(splitMoves[3]) - 1,
      receivingStackIndex: Number(splitMoves[5]) - 1,
    }
  })

  return directions
}

const directions = formatDirections(movesStr)

export function formatCrane(craneStr: string) {
  const craneArr = craneStr.split("\n")
  const numColumns = craneArr.at(-1)!.split("   ").length
  const craneRows = craneArr.slice(0, craneArr.length - 1)

  const stacks: string[][] = Array(numColumns)
    .fill([])
    .map((x) => x.slice(0))

  for (let i = craneRows.length - 1; i >= 0; i--) {
    const craneRow = craneRows[i]

    const splitCraneRow = craneRow.split(" ")

    let currColumn = 0
    let spaceCount = 0
    for (let i = 0; i < splitCraneRow.length; i++) {
      if (splitCraneRow[i] === "") {
        spaceCount++
        if (spaceCount === 4) {
          currColumn++
          spaceCount = 0
        }
      }
      if (splitCraneRow[i] !== "") {
        stacks[currColumn].push(splitCraneRow[i].split("")[1])
        spaceCount = 0
        currColumn++
      }
    }
  }

  return stacks
}

const stacks = formatCrane(craneStr)

export function executeAllDirections(directions: Direction[], stacks: string[][]) {
  for (let i = 0; i < directions.length; i++) {
    executeDirection(directions[i], stacks)
  }
  return stacks
}

export function executeDirection(direction: Direction, stacks: string[][]) {
  const { numCratesToMove, transferringStackIndex, receivingStackIndex } = direction

  const transferStack = stacks[transferringStackIndex]
  const receiveStack = stacks[receivingStackIndex]

  for (let j = 0; j < numCratesToMove; j++) {
    const popped = transferStack.pop()
    if (popped) receiveStack.push(popped)
  }

  return stacks
}

const executedStacks = executeAllDirections(directions, stacks)

export function getTopOfStacks(stacks: string[][]) {
  let topOfStacks = ""
  stacks.forEach((stack) => {
    const finalIndexInStack = stack.at(-1)
    if (finalIndexInStack) topOfStacks += finalIndexInStack
  })
  return topOfStacks
}

const topOfStacks = getTopOfStacks(executedStacks)

console.log(topOfStacks)
