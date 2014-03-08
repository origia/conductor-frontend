var apiDomain = 'http://localhost:9393';
var request   = require('request');
var async     = require('async');
var ConductorServer = function () {};

ConductorServer.prototype.save = function (word, object, img) {
    async.series([
        function (callback) {
            var targetURL = apiDomain + '/save';
            var options = {
                uri: targetURL,
                form: { word: word, object: object, img: img },
                json: true
            };
            request.post(options, function(error, response, body){
                if (!error && response.statusCode == 200) {
                    console.log(body);
                } else {
                    console.log('error: '+ response.statusCode);
                }
            });
        }
    ], function (err, results) {
        if (err) {
            throw err;
        }
        console.log('series all done. ' + results);
    });
};
