const fs = require("fs");
const path = require("path");

/**
 * 
 * @param {string} folder 
 * @param {string} fnName
 * @returns {Generator<string>}
 */
function* query(folder, fnName) {
    if (!fs.existsSync(folder)) {
        return;
    }
    const entries = fs.readdirSync(folder);
    for (const entry of entries) {
        const fullPath = path.join(folder, entry);

        if (fs.statSync(fullPath).isDirectory()) {
            yield* query(fullPath, fnName);
        } else if (path.basename(fullPath, ".nb") === fnName) {
            yield fullPath;
        }
    }
}

module.exports = {
    query
}
