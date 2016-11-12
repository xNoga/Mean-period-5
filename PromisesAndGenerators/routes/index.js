var express = require('express');
var router = express.Router();
var ex1Data = require('/Users/kristoffernoga/WebstormProjects/PromisesAndGenerators/classDemo.js')
var ex2Data = require('../exercises/Ex2')
var ex3Data = require('../exercises/Ex3')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/randomWords', function (req, res, next) {
  // ex1Data.myFunc(function (data) {
  //     res.end(JSON.stringify(data))
  // })
  ex1Data.myFunc2(function (data) {
    console.log(data)
      res.end(JSON.stringify(data))
  })
})

router.get('/albumthreewords', function (req, res, next) {
    ex2Data.getAlbums(function (data) {
        res.end(JSON.stringify(data, null, "\t"))
    })
})

router.get('/albumthreewords/:words', function (req, res, next) {
    let words = req.params.words;
    ex2Data.getAlbumsWithNWords(words, function (data) {
      res.end(JSON.stringify(data, null, "\t"));
    })
})

router.get('/collectionJoke', function (req, res, next) {
    var connection = require("../db/db");
    var db = connection.get();
    ex3Data.randomJoke(db, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data, null, "\t"))
    })
})

router.get('/allJokes', function (req, res, next) {
    let result
    var connection = require("../db/db");
    var db = connection.get();
    ex3Data.getAllJokes(function (data) {
        result = data
        ex3Data.randomJoke(db, function (err, joke) {
            let j = {
                localJoke : joke.joke,
                reference : 'Local MongoDB',
            }
            result.push(j)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(result, null, "\t"))
        })

    })
})

module.exports = router;
