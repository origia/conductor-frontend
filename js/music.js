
App.leapManager.on('music', function () {
  console.log('music')
  $('#music_dialog').dialog({
    modal: true,
    position: [0,0],
    resizable: true,
    maxHeight: 200,
    maxWidth : 200,
    minHeight: 50,
    minWidth : 50,
    height: 'auto',
    width : 'auto'
  });
  
 	var timer=setInterval("close_dialog2()",5000);
})


 

function close_dialog2() {
	$('#buy_dialog').dialog('close');
	clearInterval(timer);
}
