let fetch = require('node-fetch')

let promiseFactory = function (msg, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            let status = true;
            if(status) {
                resolve(msg.toUpperCase())
            } else {
                reject("Ups, Magnus er noob igen!")
            }
        },delay)
    })
}

let results = []
// let p1 = promiseFactory("Hello", 5000);
// p1.then(data => {
//     results.push(data)
//     return promiseFactory(`From p1 ${data}`, 3000); // returnerer en promise.
// }).then(d => {
//     results.push(d)
//     return promiseFactory(`From p2 ${d}`, 1000); // returnerer en promise.
// }).then(result => {
//     results.push(result)
//     return
// }).then( ()=> console.log(results))
//     .catch(err => console.log(err))

// let p1 = promiseFactory("Magnus", 5000);
// let p2 = promiseFactory("Er", 3000);
// let p3 = promiseFactory("En", 4000);
// let p4 = promiseFactory("Noob", 1000);
//
// Promise.all([p1, p2, p3, p4]).then(arr => {
//     results = arr
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })

fetch("http://api.icndb.com/jokes/random").then(res => res.json())
    .then(json => console.log(json.value.joke))

let promises = []
for(let i = 0; i < 50; i++){
    promises.push(
        fetch("http://api.icndb.com/jokes/random").then(res => res.json())
    )
}

Promise.all(promises).then(all => {
    let myListOfJokes = all.map(orgJoke => {
        return {joke: orgJoke.value.joke}
    })
    //console.log(myListOfJokes)
})

// exports function:
function toRestExport(callback) {
    let p1 = promiseFactory("Hello", 200);
    let results = [];
    p1.then(data => {
        results.push(data)
        return promiseFactory("World!", 700);
    }).then(data => {
        results.push(data)
        return promiseFactory("This", 200);
    }).then(data => {
        results.push(data)
        return promiseFactory("Day", 1000);
    }).then(data => {
        results.push(data)
        return promiseFactory("Sucks", 300);
    }).then(data => {
        results.push(data)
        callback(results)
    }).catch(err => console.log(err))
}

function toRestExportSmart(callback) {
    let p1 = promiseFactory("Hello", 200);
    let p2 = promiseFactory("World", 700);
    let p3 = promiseFactory("This", 200);
    let p4 = promiseFactory("Day", 100);
    let p5 = promiseFactory("Sucks", 300);

    Promise.all([p1, p2, p3, p4, p5]).then( all => {
        callback(all)
    }).catch(err => console.log(err))
}

module.exports.myFunc = toRestExport;
module.exports.myFunc2 = toRestExportSmart;

