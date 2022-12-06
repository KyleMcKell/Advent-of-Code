import { getFileData } from "../../utils.ts"
import { findMarker } from "./index.ts"

const fileData = await getFileData("input")

const marker = findMarker(fileData, 14)
console.log(marker)
