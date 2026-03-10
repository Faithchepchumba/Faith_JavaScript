// custom module in js
import { addNumbers, myFunction } from "./mymodule.js";
import os from "os"
import fs from "fs"
myFunction()
addNumbers(12,46)

console.log(os.platform())
console.log(os.totalmem())

fs.writeFileSync("test.txt","this file was created by JS")