var getRectangle = function (states) {
  var minX = 10000,
      minY = 10000,
      maxX = 0,
      maxY = 0;
  for (var i = 0; i < states.length; i++) {
    var position = states[i].screenPosition();
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

App.leapManager.on('surround', function (states) {
  var rectangle = getRectangle(states),
      context   = imgCanvasObj.getContext("2d");

  context.drawImage(videoObj, rectangle.x, rectangle.y,
    rectangle.width, rectangle.height, 0, 0, destWidth, destHeight);
  imgObj.src = imgCanvasObj.toDataURL();
});
