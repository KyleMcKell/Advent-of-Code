import { assertEquals, assertStrictEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"
import { getFileData } from "../../utils.ts"
import { Direction, executeDirection, formatCrane, formatDirections, getTopOfStacks } from "./pt1.ts"

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

Deno.test("Direction Executes Correctly", () => {
  const exampleStacks = [["A"], ["B", "C"], []]
  const exampleDirection: Direction = {
    numCratesToMove: 1,
    transferringStackIndex: 1,
    receivingStackIndex: 2,
  }
  const move = executeDirection(exampleDirection, exampleStacks)
  const expected = [["A"], ["B"], ["C"]]
  assertEquals(move, expected)
})

Deno.test("Gets top of stacks correctly", () => {
  const exampleStacks = [["A"], ["B", "C"], []]
  const result = getTopOfStacks(exampleStacks)
  assertStrictEquals(result, "AC")
})
