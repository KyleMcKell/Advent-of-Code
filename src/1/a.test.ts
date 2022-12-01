import { chunk } from "./a";

describe("chunk", () => {
  test("should separate array that splits evenly with size ", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  test("should separate array that splits unevenly with size", () => {
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
  });

  test("should separate larger array that splits unevenly with size", () => {
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7],
    ]);
  });

  test("should not modify types of items in array", () => {
    expect(chunk([1, "1", 2, "2"], 1)).toEqual([[1], ["1"], [2], ["2"]]);
  });

  test("should return empty array if array is empty", () => {
    expect(chunk([], 5)).toEqual([]);
  });
});
