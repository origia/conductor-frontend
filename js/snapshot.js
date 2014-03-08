(function($){

	var video = $('#Video1').get(0),
  canvas = $('#tmp-canvas').get(0),

	ctx = canvas.getContext("2d");

	function getSnap(){


		ctx.drawImage(video,0,0);
		//ctx.drawImage(video,300,300);
		var img = new Image();
		console.log(img);

		img.src = canvas.toDataURL('image/png');
		img.onload = function(){
			img.width = img.width / 2;
			img.height = img.height / 2;
			console.log(img.width);
			$('#snap-area').append(img);
			$('#dialog').append(img);


		}


	}
	$('#snapshot-btn').click(getSnap);
})(jQuery);



// スクショtest
  function getSnap(fx,fy,width,height){
    var video = $('#Video1').get(0),
  	canvas = $('#tmp-canvas').get(0),
  	ctx = canvas.getContext("2d");


    ctx.drawImage(video, fx,fy,width,height, 100, 100, 100, 100);

    var img = new Image();
    console.log(img);

    img.src = canvas.toDataURL('image/png');
    img.onload = function(){
      img.width = img.width / 2;
      img.height = img.height / 2;
      console.log(img.width);
      $('#snap-area').append(img);
      $('#dialog').append(img);

    }

  }
