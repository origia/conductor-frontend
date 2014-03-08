var Zoom = function() {
  this.x =100;
  this.y = 100;
  
    this.move = function() {
       console.log("move");
   
  };
  this.stop_move = function() {
    console.log("stop_move");
  };
};
module.exports = Zoom;