const path = require("path")
const fs = require("fs")

const directoryPath = path.join(__dirname, "../textos")

fs.readdir(directoryPath, (err: Error, files: []) => {
    if (err) {
        console.log("Error reading files.")
    } else {
        return files
}

files.forEach((file) => {
    let filesContent = ""
    fs.readFile(`${directoryPath}/${file}`, (err: Error, data: Buffer) => {
        if (err) throw err;
        filesContent += data.toString()
    })})