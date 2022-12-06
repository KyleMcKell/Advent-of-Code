import { getFileData } from "../../utils.ts"
import { findMarker } from "./index.ts"

const fileData = await getFileData("example")

const marker = findMarker(fileData, 4)
console.log(marker)
