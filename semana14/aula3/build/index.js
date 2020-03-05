const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "../textos");
new Promise((resolve, reject) => {
    let files = fs.readdir(directoryPath, (err, files) => {
        if (err) {
            reject("Error getting directory information.");
        }
        else {
            resolve(files);
        }
    });
}).then((files) => {
    getFileContent(files);
}).catch((erro) => {
    console.error(erro);
});
let promises;
const getFileContent = (files) => {
    promises = files.map((file) => {
        return new Promise((resolve, reject) => {
            fs.readFile(`${directoryPath}/${file}`, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(String(data));
                }
            });
        });
    });
};
Promise.all(promises).then((data) => {
    console.log(data);
}).catch(error => {
    console.error(error);
});
//# sourceMappingURL=index.js.map