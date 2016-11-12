let fetch = require('node-fetch')

function randomJoke(db, callback) {
    db.collection('jokes').find({}).toArray(function (err, doc) {
        if (err) callback(err)
        else {
            callback(null, doc[Math.floor(Math.random() * doc.length)])
        }
    })
}

function getAllJokes(callback) {
    let result = []
    fetch('https://jokes-plaul.rhcloud.com/api/joke').then(res => res.json())
        .then(json => {
            let joke = {
                programmerJoke: json.joke,
                reference: json.reference,
            }
            result.push(joke)
            return fetch('http://api.icndb.com/jokes/random')
        })
        .then(res => res.json())
        .then(json => {
            let joke = {
                chuckNorrisJoke: json.value.joke,
                reference: 'http://api.icndb.com/jokes/random'
            }
            result.push(joke)
            callback(result)
        })
        .catch(err => callback(err))
}

module.exports = {
    randomJoke: randomJoke,
    getAllJokes : getAllJokes,
}