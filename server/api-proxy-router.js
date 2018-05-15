
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const router = express.Router();
var mongoClient = mongodb.MongoClient;
router.use(bodyParser.json());
router.post('/insert', insertData);
router.get('/getData' ,getData);

var url = 'mongodb://localhost:27017/sampledbs';

function insertData(req, res) {
  console.log(req.body);
  mongoClient.connect(url, function (err, db) { 
       db.collection("sampledbs").insert([
        { firstname: req.body.name }
      ], function (err, result) {
        res.json(result);
        db.close();
      });
  });
}

function getData(req, res) {
  mongoClient.connect(url, function (err, db) { 
       db.collection("sampledbs").find(function (err, result) {
        res.json(result);
        db.close();
      });
  });
}

module.exports = router;



