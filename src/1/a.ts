export const chunk = (array: any[], size: number) => {
  const chunkedArray = [];
  const timesToLoop = Math.ceil(array.length / size);

  for (let i = 0; i < timesToLoop; i++) {
    const startingIndex = i * size;
    const chunk = array.slice(startingIndex, startingIndex + size);
    chunkedArray.push(chunk);
  }

  return chunkedArray;
};
