const { readFileSync } = require('fs');

// Helper function for code golf problems - gets length of code up to first comment from source file
// Typically to be called from tests section and passed __filename as argument
function getCodeLength(path) {
    const code = readFileSync(path, {encoding: 'utf-8'}).split(/(?=\/\/)|(?=\/\*)/)[0].trim();
    return code.length;
}

module.exports = getCodeLength;