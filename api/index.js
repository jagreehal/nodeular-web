var express = require('express');
var async = require('async');
var request = require('request');
var router = express.Router();

router.get('/', function (req, res){
  var html = 'Web Api';
  var modA = buildHostPath(req) + '/a';
  var modB = buildHostPath(req) + '/b';

  res.locals.dateStamp = new Date();
  var timeStart = new Date();
  async.parallel([
      function (callback){
        request(modA, function (error, response, body){
          callback(error, body);
        });
      },
      function (callback){
        request(modB, function (error, response, body){
          callback(error, body);
        });
      }
    ],
    function (err, results){
      if(! err){
        results.forEach(function (result){
          html += '<p>' + result + '</p>';
        });
      }
      var timeEnd = new Date();
      html += '<p>Time taken:' + Math.floor(timeEnd.getTime() - timeStart.getTime()) + '</p>';
      res.send(html);
    });
});

function buildHostPath(req){
  return req.secure ? 'https' : 'http' + '://' + req.headers.host;
}

module.exports = router;