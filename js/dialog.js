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


App.leapManager.on('fingerMove', function (state) {
  if (state.fingersCount() < 3) return;
  var position = state.screenPosition();
  console.log(position);
  App.dialog.offset({
    top: position.y,
    left: position.x
  });
});
