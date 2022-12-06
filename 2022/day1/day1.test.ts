import { assertStrictEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"
import { getSplitFileData } from "../../utils.ts"
import { highestCalories } from "./pt1.ts"
import { highestThreeCalories } from "./pt2.ts"

const fileData = await getSplitFileData("example")

Deno.test("Part 1", () => {
  const result = highestCalories(fileData)
  assertStrictEquals(result, 24000)
})

Deno.test("Part 2", () => {
  const result = highestThreeCalories(fileData)
  assertStrictEquals(result, 45000)
})
