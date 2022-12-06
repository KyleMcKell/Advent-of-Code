import { assertStrictEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts"
import { getFileData } from "../../utils.ts"
import { findMarker } from "./index.ts"

const fileData = await getFileData("example")

Deno.test("Finds marker in group of 4 with 4", () => {
  const mock = "asdf"
  const marker = findMarker(mock, 4)
  assertStrictEquals(4, marker)
})

Deno.test("Finds marker with no obstruction", () => {
  const mock = "asdfjkl"
  const marker = findMarker(mock, 4)
  assertStrictEquals(4, marker)
})

Deno.test("Finds marker with 4", () => {
  const marker = findMarker(fileData, 4)
  const expected = 7
  assertStrictEquals(marker, expected)
})

Deno.test("Finds marker with 14", () => {
  const marker = findMarker(fileData, 14)
  const expected = 19
  assertStrictEquals(marker, expected)
})
