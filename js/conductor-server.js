var apiDomain = 'http://localhost:9393';
var request   = require('request');
var async     = require('async');
var ConductorServer = function () {};


ConductorServer.prototype._post = function (apiPath, param, func) {
    if (param === null || param === void 0) {
        console.log("error: param is nil.");
        return false;
    }
    async.series([
        function (callback) {
            var targetURL = apiDomain + apiPath;
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
    });
};
ConductorServer.prototype._get = function (apiPath, func) {
    async.series([
        function (callback) {
            var targetURL = apiDomain + apiPath;
            var options = {
                uri: targetURL,
                //form: param,
                json: true
            };
            request.get(options, function(error, response, body){
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
    });
};


/*
@param {word: word, img: img, object: object, currentTime: currentTime}
@func  callback function

ex.
var cs = new ConductorServer();
cs.searchSave({word: word, img: img, object: object, currentTime: currentTime}, function(results){
    console.log(results);
})
*/
ConductorServer.prototype.searchSave = function(param, func){
    var apiPath = '/search/save';
    this._post(apiPath, param, func);
};

/*
@func  callback function

ex.
var cs = new ConductorServer();
cs.searchHistory(function(results){
    console.log(results);
})
*/
ConductorServer.prototype.searchHistory = function(func){
    var apiPath = '/search/history';
    this._get(apiPath, func);
};

/*
@param {word: word, currentTime: currentTime}
@func  callback function

ex.
var cs = new ConductorServer();
cs.wishSave({word: word, currentTime: currentTime}, function(results){
    console.log(results);
})
*/
ConductorServer.prototype.wishSave = function(param, func){
    var apiPath = 'wish/save';
    this._post(apiPath, param, func);
};

/*
@func  callback function

ex.
var cs = new ConductorServer();
cs.wishList(function(results){
    console.log(results);
})
*/
ConductorServer.prototype.wishList = function(func){
    var apiPath = '/wish/list';
    this._get(apiPath, func);
};
