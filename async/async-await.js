const fs = require('fs').promises
    
const getFileAwait = async () => {
    try {
        const first = await fs.readFile('./data/second.txt', 'utf8')
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}


module.exports = getFileAwait