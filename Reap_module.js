var Reap_module = function(kind_move,x,y) {
  this.x =10;
  this.y = 20;
  //this.move_kind="zoom";
  var json = require('./data.json');
//console.log(json);
  this.kind_move=kind_move;
  this.move = function() {
      console.log(this.x);
      //console.log(json[0].api_name);
      return 100
  };
  this.stop_move = function() {
    console.log("stop_move");
  };
};
module.exports = Reap_module;



