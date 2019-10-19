//创建食物功能
//创建一个食物的函数 fruitObj
var fruitObj=function(){
  //添加食物状态属性alivetrue显示 false隐藏
  this.alive=[];
  //创建二个图片对象
  this.blue=new Image();
  this.orange=new Image();
  //创建位置数组 x,y保存食物位置
  this.x=[];
  this.y=[];
  //创建数组保存 l 图片宽度和高度
  this.l=[];
  //创建数组保存spd 生长的向上漂浮
  this.spd=[];
  //创建数组保存食物类型 "biue"  "orange"
  this.fruitType=[];
  //创建数组保存第几个海葵
  this.aneNo=[];
}
//为食物构造耗时添加属性num=30
fruitObj.prototype.num=30;
//为食物构造函数添加方法 init
fruitObj.prototype.init=function(){
  //创建循环遍历数组所有的食物
  for(var i=0;i<this.num;i++){
  //给食物状态位置海葵编号速度类型
  this.alive[i]=false;
  this.x[i]=0;
  this.y[i]=0;
  this.l[i]=0;
  this.fruitType[i]="";
  this.spd[i]=0;
}
  //循环外部下载二张图片
  this.blue.src="src/blue.png";
  this.orange.src="src/fruit.png";
  // console.log(this);
}
//为食物构造函数添加方法 draw
fruitObj.prototype.draw=function(){
  //创建循环遍历每个食物
  for(var i=0;i<this.num;i++){
  //判断当前食物是否活动
    if(this.alive[i]){
  //判断当前食物类型
      if(this.fruitType[i]=="blue"){
        var pic =this.blue
      }else{
        var pic=this.orange;
      }
  //判断当前食物宽度<=14
        if(this.l[i]<=14){
          this.l[i]+=(this.spd[i]*deltaTime+0.08);
        }else{
          this.y[i]-=this.spd[i]*deltaTime*10;
        }
  //修改l
  //修改y
  //绘制食物
      ctx2.drawImage(pic,this.x[i],this.y[i],this.l[i],this.l[i]);
      
    }
    //如果当前食物漂浮屏幕
  //将当前食物状态隐隐藏
    if(this.y[i]<10){
      this.alive[i]=false;
    }
  }
}
//将frui.js添加到index。HTML中
//在main.js 创建食物对象并且调用相关方法
//监听画布上活动食物是否有15个  不足15个挑一个食物出生
//挑一个食物 安装下标第一个
//出生；true: 类型 海葵x y ;spd
//创建全局函数监听画布上食物数量
//不足15个 ：挑 j计算数组alive有多少为true
function fruitMonitor(){
  //累加状态为true几个意思
  var num=0;
  //如果当前食物状态显示 ++
  for(var i=0;i<fruit.num;i++){
    if(fruit.alive[i])num++;
  }
  if(num<15){
    sendFruit();//挑一个食物
    return;  //一次挑一个
  }
}

//创建全局函数 挑 按下标取第一个
function sendFruit(){
  //找到第一个食物出生
  for(var i=0;i<fruit.num;i++){
    if(fruit.alive[i]==false){
      fruit.born(i); //出生下标[i]
      return; //一个生一个
    }
  }
}
//为构造函数添加初生食物方法
fruitObj.prototype.born=function(i){
  // 获取第几个海葵下标
  var idx=Math.floor(ane.num*Math.random());
  // 获取当前海葵终点坐标 x y
  var x=ane.headx[idx];
  var y=ane.heady[idx];
  // 依据终点坐标赋值给当前食物
  this.x[i]=x;
  this.y[i]=y;
  // 修改当前食物状态true
  this.alive[i]=true;
  // 修改当前食物宽度 高度0
  this.l[i]=0;
  // 修改当前食物类型
  this.fruitType[i]=Math.random()<0.9?"blue":"orange";
  // 修改当前食物速度
  this.spd[i]=Math.random()*0.017;
}
//main,js  gameloop调用监听画布全局函数
//为构造函数添加方法：食物隐藏


//程序原则：自己的数据自己修改
//为构造函数添加食物消失方法
fruitObj.prototype.dead=function(i){
  this.alive[i]=false;
}