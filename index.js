const promiseFunction = require('./async/promise')
const asyncFunction = require('./async/async-await')
const syncfunction = require('./sync/sync')


console.log('starting first task');
promiseFunction()
console.log('first task in process');
console.log('starting the second task');
asyncFunction()
console.log('second task in process');
console.log("starting the third task");
console.log(syncfunction);
console.log('the third task finished');
