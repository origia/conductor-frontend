var apiDomain = 'http://localhost:9393';
var request   = require('request');
var async     = require('async');
var ConductorServer = function () {};


/*
@param {word: word, img: img, object: object}
@func  callback function

ex.
var cs = new ConductorServer();
cs.save({word: word, img: img, object: object}, function(results){
    console.log(results);
})
*/
ConductorServer.prototype.save = function (param, func) {
    if (param === null || param === void 0) {
        console.log("error: param is nil.");
        return false;
    }
    async.series([
        function (callback) {
            var targetURL = apiDomain + '/save';
            var options = {
                uri: targetURL,
                form: param,
                json: true
            };
            request.post(options, function(error, response, body){
                if (!error && response.statusCode === 200) {
                    callback(null, body);
                } else {
                    console.log('error: '+ response.statusCode);
                    callback(response.statusCode);
                }
            });
        }
    ], function (err, results) {
        if (err) {
            throw err;
        }
        if (func) func(results);
        console.log('series all done. ', results);
    });
};
