
App.leapManager.on('music', function () {
  console.log('music')
  $('#music_dialog').dialog({
    modal: false,
    position: [0,0],
    resizable: true,
    maxHeight: 200,
    maxWidth : 200,
    minHeight: 50,
    minWidth : 50,
    height: 'auto',
    width : 'auto'
  });
  
 setTimeout("close_dialog2()", 3000);
})


 

function close_dialog2() {
	$('#music_dialog').dialog('close');
	//clearInterval(timer);
}


