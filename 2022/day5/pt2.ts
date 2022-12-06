import { getFileData } from "../../utils.ts"
import { executeDirections, executeRetainOrder, formatCrane, formatDirections, getTopOfStacks } from "./index.ts"

const fileData = await getFileData("input")
const [craneStr, movesStr] = fileData.split("\n\n")
const directions = formatDirections(movesStr)
const stacks = formatCrane(craneStr)
const executedStacks = executeDirections(directions, stacks, executeRetainOrder)
const topOfStacks = getTopOfStacks(executedStacks)

console.log(topOfStacks) // CDTQZHBRS
