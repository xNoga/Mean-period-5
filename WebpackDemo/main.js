import todos from "./ts.js";
require('./main.css');

const name = 'Scotch.io';


setTimeout(() => document.getElementById("msg").innerHTML= `Name:${name}`, 300);
setTimeout( () => document.getElementById("msg2").innerHTML = todos.toString(), 5000)

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

let p1 = promiseFactory("Magnus", 2000);
let p2 = promiseFactory("Er", 1000);
let p3 = promiseFactory("En", 2000);
let p4 = promiseFactory("Noob", 1000);

Promise.all([p1, p2, p3, p4]).then(arr => {
    console.log(arr)
    let results = arr
    document.getElementById("msg").innerHTML = results;
}).catch(err => {
    console.log(err)
})



