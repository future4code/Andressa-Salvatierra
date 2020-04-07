const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "../textos");
const readFilesPromise = new Promise((resolve, reject) => {
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            reject(console.log("Error reading files."));
        }
        else {
            let filesContent = "";
            files.forEach((file) => {
                fs.readFile(`${directoryPath}/${file}`, (err, data) => {
                    if (err)
                        throw err;
                    filesContent.concat(data.toString());
                    resolve(console.log(filesContent));
                });
            });
        }
    });
});
//# sourceMappingURL=index.js.map