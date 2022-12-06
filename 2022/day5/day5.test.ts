import { assertEquals, assertStrictEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"
import { getFileData } from "../../utils.ts"
import { Direction, executeDirections, executeOneByOneDirection, executeRetainOrder, formatCrane, formatDirections, getTopOfStacks } from "./index.ts"

const fileData = await getFileData("example")

const [craneStr, movesStr] = fileData.split("\n\n")

Deno.test("Directions Formatted Correctly", () => {
  const directions = formatDirections(movesStr)
  const expectedResults: Direction[] = [
    {
      numCratesToMove: 1,
      transferringStackIndex: 1,
      receivingStackIndex: 0,
    },
    {
      numCratesToMove: 3,
      transferringStackIndex: 0,
      receivingStackIndex: 2,
    },
  ]
  assertEquals(directions.slice(0, 2), expectedResults)
})

Deno.test("Crane Formatted Correctly", () => {
  const crane = formatCrane(craneStr)
  const expected = [["Z", "N"], ["M", "C", "D"], ["P"]]
  assertEquals(crane, expected)
})

Deno.test("Direction Executes Correctly One Item At A Time", () => {
  const exampleStacks = [["A"], ["B", "C"], []]
  const exampleDirection: Direction = {
    numCratesToMove: 1,
    transferringStackIndex: 1,
    receivingStackIndex: 2,
  }
  const move = executeOneByOneDirection(exampleDirection, exampleStacks)
  const expected = [["A"], ["B"], ["C"]]
  assertEquals(move, expected)
})

Deno.test("Direction Executes Correctly Keeping Order", () => {
  const exampleStacks = [["A", "B", "C"], ["D"], ["E", "F"]]
  const exampleDirection: Direction = {
    numCratesToMove: 2,
    transferringStackIndex: 0,
    receivingStackIndex: 1,
  }
  const move = executeRetainOrder(exampleDirection, exampleStacks)
  const expected = [["A"], ["D", "B", "C"], ["E", "F"]]
  assertEquals(move, expected)
})

Deno.test("Gets top of stacks correctly", () => {
  const exampleStacks = [["A"], ["B", "C"], []]
  const result = getTopOfStacks(exampleStacks)
  assertStrictEquals(result, "AC")
})
