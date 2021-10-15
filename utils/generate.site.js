const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) return reject(err);

            resolve({
                ok: true,
                message: 'File Created!'
            })
        })
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) return reject(err);

            resolve({
                ok: true,
                message: 'File Copied!'
            })

        })
    });
};

module.exports = {writeFile, copyFile};