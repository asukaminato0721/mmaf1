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
    const entries = await fs.readdir(folder);
    for (const entry of entries) {
        const fullPath = path.join(folder, entry);

        if ((await fs.stat(fullPath)).isDirectory()) {
            yield* query(fullPath, fnName);
        } else if (path.basename(fullPath, ".nb") === fnName) {
            yield fullPath;
        }
    }
}

module.exports = {
    query
}
