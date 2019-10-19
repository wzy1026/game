//吃食物后奖励光环 光环慢慢变大
// 创建光环构造函数
var waveObj=function(){
  // 添加属性圆心
  this.x=[];
  this.y=[];
  // 添加属性半径
  this.r=[];
  // 添加状态 显示隐藏
  this.alive=[];
}
// 为构造函数添加属性 num=10
waveObj.prototype.num=10;
// 为构造函数添加方法 init
waveObj.prototype.init=function(){
  // 创建循环遍历 每一个光环
  for(var i=0;i<this.num;i++){
  // 状态false
  this.alive[i]=false;
  // 圆心加0
  this.r[i]=10;
  // 半径0 
  this.x[i]=0;
  this.y[i]=0;
  }
}
// 为构造函数添加绘制 draw
waveObj.prototype.draw=function(){
//  保存画笔1状态
ctx1.save();
ctx1.strokeStyle="#fff";
//  创建一个循环遍历所有的光环
  for(var i=0; i<this.num;i++){
//  判断当前光环是否显示
    if(this.alive[i]){
//  当前光环半径增加
      this.r[i]+=deltaTime*0.02;
//  如果光环半径大量100
      if(this.r[i]>50){
//  将当前光环状态false
       this.alive[i]=false;
       return;
       }
//  开始一条新路径
        ctx1.beginPath();
//  画一个光环
        ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
//  描边
      ctx1.stroke();
      
    }
  }
//  恢复画笔1状态
ctx1.restore();
}
// 将wave.js添加index.html
// 在main.js创建光环对象并且调用方法
//为光环构造函数 添加出生方法
waveObj.prototype.born=function(x,y){
  for(var i=0;i<this.num;i++){
    if(this.alive[i]==false){
      this.alive[i]=true;
      this.x[i]=x;
      this.y[i]=y;
      this.r[i]=20;
      console.log(this.x[i],this.y[i]);
      return;
    }
  }
}