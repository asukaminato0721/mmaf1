const fs = require("fs");
const path = require("path");

/**
 * 
 * @param {string} folder 
 * @param {string} fnName 
 * @returns {string[]}
 * @description This is written by bard, I fixed it.
 */
function findFiles(folder, fnName) {
    if (!fs.existsSync(folder)) {
        return [];
    }
    const files = [];
    const entries = fs.readdirSync(folder);
    for (const entry of entries) {
        const fullPath = path.join(folder, entry);

        if (fs.statSync(fullPath).isDirectory()) {
            files.push(...findFiles(fullPath, fnName));
        } else if (path.basename(fullPath, ".nb") === fnName) {
            files.push(fullPath);
        }
    }
    return files;
}

/**
 * 
 * @param {string} functionName 
 * @param {string} _path
 * @returns 
 */
function query(functionName, _path) {
    return findFiles(_path, functionName);
}

// console.log(query("Plot"))

module.exports = {
    query
}
