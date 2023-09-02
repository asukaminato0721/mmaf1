const fs = require("fs/promises");
const path = require("path");

/**
 * 
 * @param {string} folder 
 * @param {string} fnName
 * @returns {AsyncGenerator<string>}
 */
async function* query(folder, fnName) {
    if (!(fs.access(folder, fs.constants.F_OK | fs.constants.R_OK).then(() => true).catch(() => false))) {
        return;
    }
    for await (const entry of await fs.opendir(folder)) {
        const fullPath = path.join(folder, entry.name);
        if (entry.isDirectory()) {
            yield* query(fullPath, fnName);
        }
        if (entry.isFile() && path.basename(entry.name, ".nb") === fnName) {
            yield fullPath;
        }
    }
}

module.exports = {
    query
}
