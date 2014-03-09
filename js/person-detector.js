var _             = require('underscore'),
    videoMetaData = require('../json/data.json'),
    puxMetaData   = require('../json/pux_ids.json'),
    PuxClient     = require('pux-node');

var puxClient = new PuxClient();


var getData = function (time) {
  for (var i = 0; i < videoMetaData.length; i++) {
    var data = videoMetaData[i];
    if (time >= data.start_time && time <= data.end_time) {
      return data;
    }
  }
};

var getMetaDataId = function (id) {
  id = parseInt(id, 10);
  for(var i = 0; i < puxMetaData.length; i++) {
    if (_.contains(puxMetaData[i].numbers, id)) {
      return puxMetaData[i].id;
    }
  }
};

var getPerson = function (data, id) {
  if (id === null) {
    if (data.person.length === 1) return data.person[0];
    else return null;
  } else {
    var metaId = getMetaDataId(id);
    for (var i = 0; i < data.person.length; i++) {
      if (data.person[i].id == metaId) {
        return data.person[i];
      }
    }
    return null;
  }
};

var detectPerson = function (img, time, rectangle, options) {
  options = options || {};
  puxClient.authenticateFaceBase64(img, {
    extractCandidate: true,
    onSuccess: function (personId) {
      var data = getData(time),
          person = getPerson(data, personId);
      if (person !== null || data !== null) {
        var ret = {
          person: person,
          metaData: data
        };
        if (options.onSuccess) options.onSuccess(ret);
      } else {
        if (options.onFailure) options.onFailure();
      }
    },
    onError: options.onFailure
  });
};

module.exports = detectPerson;
