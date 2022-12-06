export function findMarker(buffer: string, markerLength: number) {
  const bufferArr = buffer.split("")
  for (let i = markerLength; i < bufferArr.length + 1; i++) {
    const bufferSet = new Set(bufferArr.slice(i - markerLength, i))
    if (bufferSet.size === markerLength) {
      return i
    }
  }
}
