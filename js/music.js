
App.leapManager.on('music', function () {
  console.log(document.getElementById("Video1").currentTime);
  
  var tmp=document.getElementById("Video1").currentTime;

  $.getJSON("./json/data.json" , function(data) {
      var len = data.length;
      
         console.log(data[3].music.title);
       if(tmp>=59.06150&&tmp<=86.98949){
        $("#music_dialog").empty();
        $("#music_dialog").append("<p>曲名:"+data[3].music.title+"</p>"+"<p>Artist:"+data[3].music.artist+"</p>"+"<p>発表年:"+data[3].music.time+"</p>"
              +"<p>Album:"+data[3].music.album+"</p><p>ジャンル:"+data[3].music.genre+"</p>"+"<img src="+"'"+data[3].music.img+"'"+"width=100px>");
         open_dialog2();
      }else if(tmp>=86.98950&&tmp<=110.77949){
        $("#music_dialog").empty();
        $("#music_dialog").append("<p>Artist:"+data[4].music.artist+"</p>"+"<p>発表年:"+data[4].music.time+"</p>"
              +"<p>Album:"+data[4].music.album+"</p><p>ジャンル:"+data[4].music.genre+"</p>");
         open_dialog2();

      }else if(tmp>=110.77950){
        $("#music_dialog").empty();
        $("#music_dialog").append("<p>Artist:"+data[5].music.artist+"</p>"+"<p>発表年:"+data[5].music.time+"</p>"
              +"<p>Album:"+data[5].music.album+"</p><p>ジャンル:"+data[5].music.genre+"</p>"+"<img src="+"'"+data[5].music.img+"'"+"width=100px>");
          open_dialog2();
      }else{
          
      }
    
      
  });


})




function open_dialog2() {
  $('#music_dialog').dialog({
    modal: false,
    position: [0,0],
    resizable: true,
    maxHeight: 200,
    maxWidth : 200,
    height: 'auto',
    width : 'auto'
    });
  setTimeout("close_dialog2()", 4000);
}

function close_dialog2() {
	$('#music_dialog').dialog('close');
	//clearInterval(timer);
}



