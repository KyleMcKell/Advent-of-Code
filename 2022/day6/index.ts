export function findMarker(buffer: string, markerLength: number) {
  const bufferArr = buffer.split("")
  for (let i = markerLength - 1; i < bufferArr.length; i++) {
    const sliceStart = i - markerLength >= 0 ? i - markerLength : 0
    const bufferSet = new Set(bufferArr.slice(sliceStart, i))
    if (bufferSet.size === markerLength) {
      return i
    }
  }
}
