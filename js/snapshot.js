
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
      //$('#snap-area').append(img);
      //$('#dialog').append(img);
      $("#dialogimg").attr("src",img.src);
    }
    return img;
    
  }



App.leapManager.on('surround', function (states) {
    pic_flag=1;
   
    console.log("screnn_shot");
    var video = $('#Video1').get(0),
    canvas = $('#tmp-canvas').get(0),
    ctx = canvas.getContext("2d");
    //canvasに画像の幅、高さを代入
    //canvas.width = 100;
    //canvas.height = 100;
 

    //var states = _.reject(rawStates, function(state) { state.fingersCount() === 0 });
      //ctx.beginPath();
      //ctx.moveTo(states[0].screenPosition().x, states[0].screenPosition().y);
      //ctx.moveTo(0, 0);
    //for(var i=0;i<states.length-6;i=i+6){
        //ctx.bezierCurveTo(states[i].screenPosition().x, states[i].screenPosition().y, states[i+3].screenPosition().x, states[i+3].screenPosition().y, states[i+6].screenPosition().x, states[i+6].screenPosition().y);    
    //}
    //ctx.moveTo(states[0].screenPosition().x, states[0].screenPosition().y);
    //ctx.closePath();
    //ctx.clip();
    //ctx.drawImage(video,500,300,300,300,0,0,100,100);
    ctx.drawImage(video,0,0);
 
    var img = new Image();
    img.src = canvas.toDataURL('image/png');
    console.log(img);
   
   
   
   
    //push_data.save(img.src,"コーラ","dorama");
    img.onload = function(){
  
      $("#dialogimg").attr("src",img.src);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pic_flag=0;

    }
 
})
