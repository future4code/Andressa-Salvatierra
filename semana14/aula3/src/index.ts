const path = require("path")
const fs = require("fs")

const directoryPath = path.join(__dirname, "../textos")

new Promise((resolve, reject) => {
    let files = fs.readdir(directoryPath, (err: Error, files: Buffer) => {
        if (err) {
            reject("Error getting directory information.")
        } else {
            resolve(files)
        }
    })
}).then((files: Buffer) => {
    getFileContent(files)
    
}).catch((erro) => {
    console.error(erro)
})

let promises

const getFileContent = (files: Buffer) => {
    promises = files.map((file): any => {
        return new Promise((resolve, reject) => {
            fs.readFile(`${directoryPath}/${file}`, (err: Error, data: Buffer) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(String(data))
                }
            })
        })
    })

}

Promise.all(promises).then((data) => {
    console.log(data)
}).catch(error => {
    console.error(error)
})


