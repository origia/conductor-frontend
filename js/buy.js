App.leapManager.on('buy', function () {
  $('#buy_dialog').dialog({
    modal: false,
    position: [canvas.width-50,0],
    resizable: true,
    maxHeight: 200,
    maxWidth : 200,
    minHeight: 50,
    minWidth : 50,
    height: 'auto',
    width : 'auto'
  });
 	setTimeout("close_dialog()", 3000);

  if (App.currentItem !== null) {
    App.conductorServer.wishSave(App.currentItem);
  }
})


function close_dialog() {
	$('#buy_dialog').dialog('close');
	//clearInterval(timer_buy);
}


