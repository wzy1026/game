//功能 完成海草类
//1创建海草构造函数 aneObj
var aneObj=function(){
  //创建变量保存起点坐标x
  this.rootx=[];
  //创建变量保存终点坐标x
  this.headx=[];
  //创建变量保存终点坐标y
  this.heady=[];
  //创建变量保存摆动的浮动amp
  this.amp=[];
  //创建变量保存-1~1 之间的值
  this.alpha=0;
}
//2为海草构造函数添加属性num=50
aneObj.prototype.num=50;
//3为海草构造函数添加方法init
aneObj.prototype.init=function(){
  for(var i=0;i<this.num;i++){
    // 初始化海葵的起点x坐标 y固定值为600
    this.rootx[i]=i*16+Math.random()*20;
    //初始化海葵终点x坐标
    this.headx[i]=this.rootx[i];
    //初始化海葵终点y坐标
    this.heady[i]=canHeight-250+Math.random()*50;
    //初始化海葵摆动浮动
    this.amp[i]=Math.random()*30+20;

  }
  // console.log(this.rootx);
  // console.log(this.headx);
  // console.log(this.heady);
  // console.log(this.amp);
  // console.log(this.alpha);
}
//4为海草构造函数添加方法draw
aneObj.prototype.draw=function(){
  //计算非常小小数
  this.alpha +=deltaTime * 0.0008;
  //依据小数通过正旋函数获取-1~1
  var l=Math.sin(this.alpha);
  //保存画笔的状态
  ctx2.save();
  //
  ctx2.strokeStyle="#3b254e";
  ctx2.globalAlpha=0.6;
  ctx2.lineCap="round";
  ctx2.lineWidth=14;
  //创建循环遍历每个海葵
  for(var i=0;i<this.num;i++){
  //创建新路径
  ctx2.beginPath();
  //移动到起点的坐标
  ctx2.moveTo(this.rootx[i],canHeight);
  //重新计算终点坐标x
  this.headx[i]=this.rootx[i]+l*this.amp[i];
  //绘制贝塞尔曲线 控制点x y 终点 x y
  ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
  //描边
  ctx2.stroke();
}
  //恢复画笔2状态
  ctx2.restore();
}
//5 将ane.js添加index.html 文件中
//6 在main.js创建海葵对象
//


