var Reap_module = function(kind_move,x,y) {
  this.x =10;
  this.y = 20;
 
  //this.move_kind="zoom";
  this.kind_move=kind_move;
  this.move = function() {
       console.log(this.x);
           return 100
  };
  this.stop_move = function() {
    console.log("stop_move");
  };
};
module.exports = Reap_module;



