const fs = require('fs')


const getFile = (path) => {
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err){
                    reject(err)
                }
                else{
                    resolve(data)
                }
            })
        })
    }

//This method below

// getFile('../data/second.txt')
// .then((result)=> console.log(result))
// .catch((err)=>console.log(err))

//Or this method below

const start = async() =>{
    try {
        const first = await getFile('./data/second.txt')
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}


module.exports = start




    
