const fs = require('fs')

const file = fs.readFileSync('./data/first.txt', 'utf8')

module.exports = file