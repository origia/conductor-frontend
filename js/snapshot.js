
// スクショ

var push_data=new ConductorServer();


  function getSnap(fx,fy,width,height){
    var video = $('#Video1').get(0),
  	canvas = $('#tmp-canvas').get(0),
  	ctx = canvas.getContext("2d");
    ctx.drawImage(video, fx,fy,width,height, 100, 100, 100, 100);
    var img = new Image();
    console.log(img);
    img.src = canvas.toDataURL('image/png');
    //push_data.save(img.src,"コーラ","dorama");
    img.onload = function(){
      img.width = img.width / 2;
      img.height = img.height / 2;
      $('#snap-area').append(img);
      $('#dialog').append(img);
      
    }
    return img;
    
  }
