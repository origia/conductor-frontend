function  openDialog(){
  $('#dialog').dialog({
    modal: true,
    position: [0,0],
    resizable: true,
    maxHeight: 500,
    maxWidth : 500,
    minHeight: 150,
    minWidth : 150,
    height: 'auto',
    width : 600
  });
}

App.dialog = App.dialog || $('#dialog');



App.leapManager.on('fourFingersMove', function (state) {
  var position = state.screenPosition();
  App.dialog.offset({
    top: position.y,
    left: position.x
  });
});
