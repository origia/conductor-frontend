/*node_moduke*/
/*zoom*/
/*var Reap = require("./Zoom.js");
var p = new Reap("model",0,0);
p.move();  // "hello!"
p.stop_move();  // "koexuka
console.log(p.x);
console.log(p.move_kind);*/



//
var video = document.getElementById("Video1");


App.leapManager.on('pause', function () {
  console.log('pause');
  videoplay();
})


App.leapManager.on('zoomIn', function () {
  console.log('zoomIn');
  zoomin();
})

App.leapManager.on('zoomOut', function () {
  console.log('zoomOut');
   zoomout();
})


/* predefine zoom and rotate */
  var zoom = 1,
  rotate = 0;

/* Grab the necessary DOM elements */
  var stage = document.getElementById('stage'),
  v = document.getElementsByTagName('video')[0],
  controls = document.getElementById('controls');
           
/* Array of possible browser specific settings for transformation */
  var properties = ['transform', 'WebkitTransform', 'MozTransform',
                    'msTransform', 'OTransform'],
      prop = properties[0];

/* Iterators and stuff */    
  var i,j,t;
  
/* Find out which CSS transform the browser supports */
  for(i=0,j=properties.length;i<j;i++){
    if(typeof stage.style[properties[i]] !== 'undefined'){
      prop = properties[i];
      break;
    }
  }
  
  /* Position video */
  v.style.left = 0;
  v.style.top = 0;

 function  zoomin(){
          zoom = zoom + 1.0;
          
          v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
          console.log( v.style[prop]);

 }
 
 function  zoomout(){
          
          if(zoom>1.0){
            zoom = zoom - 1.0;
            v.style[prop]='scale('+zoom+') rotate('+rotate+'deg)';
          }
         
          console.log( v.style[prop]);
 }
 
 function  moveleft(){
          console.log( v.style.left);
         //10進数でpxを取るて-5
          v.style.left = (parseInt(v.style.left,10) - 5) + 'px';
          console.log( v.style.left);
 }
 
 function  moveright(){
          v.style.left = (parseInt(v.style.left,10) + 5) + 'px';
 }
 
  function  moveup(){
          v.style.top = (parseInt(v.style.top,10) - 5) + 'px';
 }
 
  function  movedown(){
         v.style.top = (parseInt(v.style.top,10) + 5) + 'px';
 }




 
  function videoplay() {
      
       if (video.paused) {
          video.play();
       } else {
          video.pause();
       }
    }

    function restart() {
        
        video.currentTime = 0;
    }

    function skip(value) {
       
        video.currentTime += value;
    }      
