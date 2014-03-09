var _ = require('underscore');

var getRectangle = function (states) {
  var minX = 10000,
      minY = 10000,
      maxX = 0,
      maxY = 0;
  for (var i = 0; i < states.length; i++) {
    var position = states[i].screenPosition();
    if (position === null) continue;
    if (position.x < minX) minX = position.x;
    if (position.y < minY) minY = position.y;
    if (position.x > maxX) maxX = position.x;
    if (position.y > maxY) maxY = position.y;
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
};

var videoObj     = document.getElementById("Video1"),
    imgCanvasObj = document.getElementById("img-canvas"),
    imgObj       = document.getElementById("dialogimg"),
    destWidth    = imgCanvasObj.width,
    destHeight   = imgCanvasObj.height;

var container;
var cmTemplate;
var dramaTemplate;

$(function() {
  container     = $('.md-content');
  cmTemplate    = _.template($('#cm-template').html());
  dramaTemplate = _.template($('#drama-template').html());
});


App.leapManager.on('surround', function (states) {
  var rectangle = getRectangle(states),
      context   = imgCanvasObj.getContext("2d");

  var x      = Math.max(0, rectangle.x),
      y      = Math.max(0, rectangle.y),
      width  = Math.min(videoObj.width - x, rectangle.width),
      height = Math.min(videoObj.height - y, rectangle.height);

  if (width === 0 || height === 0) return;

  context.clearRect(0, 0, imgCanvasObj.width, imgCanvasObj.height);
  context.drawImage(videoObj, x, y, width, height, 0, 0,
    destWidth, destHeight);
  var img = imgCanvasObj.toDataURL("image/jpeg");
  imgObj.src = img;

  App.detectPerson(img, videoObj.currentTime, rectangle, {
    onSuccess: function (data) {
      var metaData = data.metaData,
          person   = data.person;

      if (metaData.type === "cm") {
        var item = metaData.item[0];
        container.html(cmTemplate(_.extend({}, person, item, { title: metaData.name })));
      } else {
        if (person) {
          container.html(dramaTemplate(person));
        }
      }
    }
  });

  App.clearLines();
});
