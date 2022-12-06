export function findMarker(buffer: string, markerLength: number) {
  const bufferArr = buffer.split("")
  for (let i = markerLength - 1; i < bufferArr.length; i++) {
    const bufferSet = new Set(bufferArr.slice(i - markerLength, i))
    if (bufferSet.size === markerLength) {
      return i
    }
  }
}
