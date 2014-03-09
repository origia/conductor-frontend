App.leapManager.on('buy', function () {
  $('#buy_dialog').dialog({
    modal: true,
    position: [canvas.width-50,0],
    resizable: true,
    maxHeight: 200,
    maxWidth : 200,
    minHeight: 50,
    minWidth : 50,
    height: 'auto',
    width : 'auto'
  });
 	var timer_buy=setInterval("close_dialog()",5000);
})


function close_dialog () {
	$('#buy_dialog').dialog('close');
	clearInterval(timer_buy);
}


