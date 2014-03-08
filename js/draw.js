

var move_flag=0;

function draw_move(){
move_flag=1;
 console.log("move");
}

function draw_stop(){
move_flag=0;
 console.log("stop");
}

var video_tmp = $('#Video1').get(0);
var canvas = document.getElementById("a_canvas");
var context = canvas.getContext("2d");

// 画像を表示


//開始位置
var stX=0;
var stY=0;

//マウスを動かしたときの処理
canvas.addEventListener("mousemove",function(event){
/* 半透明度を指定 */
 canvas.globalAlpha = 0.0;

//位置の取得
var rec = event.target.getBoundingClientRect();
var x = event.clientX - rec.left;
var y = event.clientY - rec.top;

// キャンバスをクリア
if(move_flag==0){
 context.beginPath();
 context.clearRect(0, 0, canvas.width, canvas.height);
}
//線を引く
context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "#FF0000";
//さぶぱす取得
context.moveTo(stX,stY);

context.lineTo(x,y);
//サブパスに線を引く
context.stroke();
// サブパス入れ直し
stX = x;
stY = y;



},true);

//マウスを押したときの処理
canvas.addEventListener("mousedown",function(event){

//var rec = event.target.getBoundingClientRect();
//stX = event.clientX - rec.left;
//stY = event.clientY - rec.top;
},true);

//マウスを押したときの処理
canvas.addEventListener("mouseout",function(event){
console.log("out");
//var rec = event.target.getBoundingClientRect();
//stX = event.clientX - rec.left;
//stY = event.clientY - rec.top;
},true);




//コールバック用の関数（x,y,move_flag)
function pointer(px,py,flag){

	/* 半透明度を指定 */
 canvas.globalAlpha = 0.0;

//位置の取得
//var rec = event.target.getBoundingClientRect();
var x = px;
var y = py;

// キャンバスをクリア
if(flag==0){
 context.beginPath();
 context.clearRect(0, 0, canvas.width, canvas.height);
}
//線を引く
context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "#FF0000";
//さぶぱす取得
context.moveTo(stX,stY);
context.lineTo(x,y);
//サブパスに線を引く
context.stroke();
// サブパス入れ直し
stX = x;
stY = y;


//さいしょの値（視点x,y、とwidth、height）
//getSnap(0,0,stX,stY);

}



