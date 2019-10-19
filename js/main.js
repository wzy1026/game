//#main.js
//功能创建 全局变量保证游戏中不同角度可以相互调用
//创建二个全局变量保存二个画布
var can1;
var can2;
//创建二个全局变量保存二个画笔
var ctx1;
var ctx2;
//创建二个全局变量保存画布宽度和高度
var canWidth;
var canHeight;
//创建二个全局变量保存二帧画面之间时间差
var lastTime;
var deltaTime; //时间差
//创建全局变量保存背景图片对象
var bgPic;
//创建全局变量保存海葵对象
var ane;
//创建全局对象保存食物对象
var fruit;
//创建全局变量保存大鱼对象
var mom;
//创建全局变量保存鼠标的位置
var mx=0;
var my=0;
//创建全局变量保存分数
var data;
//创建全局变量保存光环
var wave;
//创建
var body;

//创建游戏所有的角色对象
//调用所有角色绘制方法
//1
//创建函数game
function game(){
  init();
  gameloop();
}
//创建函数init
function init(){
  //初始化两个画布对象
  can1=document.getElementById("canvas1");
  can2=document.getElementById("canvas2");
  //初始化两个画笔对象
  ctx1=can1.getContext("2d");
  ctx2=can2.getContext("2d");
  //初始化画布宽度和高度
  canWidth=can1.width;
  canHeight=can1.height;
  // console.log(ctx1);
  // console.log(ctx2);
  // console.log(canWidth,canHeight);
  //初始化时间差
  //记录没有绘图开始的时间
  lastTime=Date.now();
  //时间差初始为0
  deltaTime=0;
  //创建背景图片对象并且下载指定图片
  bgPic=new Image();
  bgPic.src="src/background.jpg";
  //创建海葵的对象并且调用初始化方法
  ane=new aneObj();
  ane.init();
  //创建 食物对象并且调用初始化方法
  fruit=new fruitObj();
  fruit.init();
  //创建大鱼对象并且调用初始化方法
  mom=new momObj();
  mom.init();
  //为画布绑定鼠标移动事件
  can1.addEventListener("mousemove",handleMove);
  //创建分数对象
  data=new dataObj();
  //创建光环对象并且调用绘制的方法
  wave=new waveObj();
  wave.init();
  //创建小鱼对象 并且调用初始化方法
  baby=new babyObj();
  baby.init();
}
//创建gameloop
function gameloop(){
  //创建定时器执行gameloop 多次调用结果
  requestAnimationFrame(gameloop);
  //获取刚才绘制完成的时间
  var now =Date.now();
  //将完成的时间点减去没绘画制图形时间开始点
  deltaTime=now-lastTime;
  //将上一个时间清零
  lastTime=now;
  //直接绘制背景图片
  ctx2.drawImage(bgPic,0,0);
  //调用大鱼碰撞的方法
  momFruitsCollison();

  //绘制海葵
  ane.draw();
  //调用监听画布函数
  fruitMonitor();
  //绘制食物
  fruit.draw();
  //清除画布1 所有的信息
  ctx1.clearRect(0,0,canWidth,canHeight);
  //绘制大鱼
  mom.draw();
  //绘制分数
  data.draw();
  //绘制光环
  wave.draw();
  //绘制小鱼
  baby.draw();
}
//当网页加载成功后调用game
document.body.onload=game;
//创建一个函数处理鼠标移动事件
function handleMove(event){
  //获取鼠标坐标赋值全局变量
  //修改


  mx=event.offsetX;
  my=event.offsetY;
}