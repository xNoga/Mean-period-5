let fetch = require('node-fetch')
var urls = ['https://jsonplaceholder.typicode.com/photos?albumId=1',
            'https://jsonplaceholder.typicode.com/photos?albumId=3',
            'https://jsonplaceholder.typicode.com/photos?albumId=5',
            'https://jsonplaceholder.typicode.com/photos?albumId=7',
            'https://jsonplaceholder.typicode.com/photos?albumId=9'
            ]

function getAlbums(callback) {
    let result = []
    let promises = []
    urls.forEach(function (d) {
        promises.push(fetch(d).then( res => res.json() ))
    })
    Promise.all(promises).then(all => {
        all.forEach(function (d) {
           d.forEach(function (de) {
               var titleNum = de.title.split(" ");
               if(titleNum.length == 3) result.push(de)
           })
        })
        callback(result)
    }).catch(err => console.log(err))
}

function getAlbumsWithNWords(num, callback) {
    let result = []
    let promises = []
    urls.forEach(function (d) {
        promises.push(fetch(d).then( res => res.json() ))
    })
    Promise.all(promises).then(all => {
        all.forEach(function (d) {
            d.forEach(function (de) {
                var titleNum = de.title.split(" ");
                if(titleNum.length == num) result.push(de)
            })
        })
        callback(result)
    }).catch(err => console.log(err))
}

module.exports.getAlbums = getAlbums;
module.exports.getAlbumsWithNWords = getAlbumsWithNWords;
