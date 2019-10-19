//功能一  大鱼文件 大鱼身体图片切换

//功能二大鱼旋转面向鼠标
// 1创建大鱼构造函数momObj
var momObj=function(){
 //大鱼位置 x y
 this.x;
 this.y;
 // 大鱼游动的角度]
 this.angle;
//  创建数组保存大鱼眼镜
this.bigEye=[]
//  创建数组保存大鱼身体
this.bigBody=[]
//  创建数组保存大鱼尾巴
this.bigTail=[]
//创建变量保存当前大鱼眼镜下标
//在创建二个变量控制下标切换频率
this.bigEyeIndex=0; //眼镜下标
this.bigEyeStart=0; //眼镜计时开始
this.bigEyeEnd=3000; //眼镜计时开始
//完成大鱼尾巴切换
this.bigTailIndex=0; //尾巴下标
this.bigTailStart=0; //尾巴计时开始
this.bigTaiEnd=200; //尾巴计时结束

//完成大鱼身体切换
this.bigBodyIndex=0;
this.bigBodyStart=0;
this.bigBodyEnd=400;
}
// 2为大鱼构造函数添加方法inint 初始化
momObj.prototype.init=function(){
  //初始化x y 画布中心
  this.x=canWidth*0.5;
  this.y=canHeight*0.5;
  // 初始化游动的角度 0
  this.angle=0;
  // 创建二个图片对象保存大鱼眼镜数组里面并且下载图片
  for(var i=0;i<2;i++){
    this.bigEye[i]=new Image();
    this.bigEye[i].src="src/bigEye"+i+".png";
  }
  // 创建八个图片对象保存大鱼身体数组里面并且下载图片
  for(var i=0;i<8;i++){
    this.bigBody[i]=new Image();
    this.bigBody[i].src="src/bigSwim"+i+".png";
  }
  // 创建八个图片对象保存大鱼尾巴数组里面并且下载图片
  for(var i=0;i<8;i++){
    this.bigTail[i]=new Image();
    this.bigTail[i].src="src/bigTail"+i+".png";
  }
  console.log(this);
}
// 3为大鱼构造函数添加方法draw 绘制
momObj.prototype.draw=function(){
  //累加大鱼眼镜计时到 3000切换下标
  this.bigEyeStart+=deltaTime;
  //计时结束
  if(this.bigEyeStart>this.bigEyeEnd){
    this.bigEyeIndex=(this.bigEyeIndex+1)%2;
    this.bigEyeStart=0;
    //如果当前下标为0 睁眼睛结束时间3000
    if(this.bigEyeIndex==0){
      this.bigEyeEnd=3000;
    }
    //如果当前下标为1 睁眼睛结束时间300
    if(this.bigEyeIndex==1){
      this.bigEyeEnd=200;
    }
  }



    //累加大鱼尾巴计时到 200切换下标
    this.bigTailStart+=deltaTime;
    //计时结束
    if(this.bigTailStart>this.bigTaiEnd){
      this.bigTailIndex=(this.bigTailIndex+1)%8;
      this.bigTailStart=0;
  }
  //累加大鱼身体计时到 4000切换下标
  this.bigBodyStart+=deltaTime;
  //计时开始
  if(this.bigBodyStart>this.bigBodyEnd){
    this.bigBodyIndex=(this.bigBodyIndex+1)%8;
    this.bigBodyStart=0;
  }


 //将鼠标的位置赋值给大鱼的坐标
  this.x=lerpDistance(mx,this.x,0.98);
  this.y=lerpDistance(my,this.y,0.99);

  //修改大鱼游动角度
  // 计算大鱼与鼠标坐标
  var deltaY = my- this.y;
  var deltaX = mx -this.x;
  // 计算大鱼与鼠标角度
  var beta=Math.atan2(deltaY,deltaX)+Math.PI;
  // 计算大鱼与鼠标角度慢慢调整
  this.angle=lerpAngle(beta,this.angle,0.9);

  //保存画笔1状态
  ctx1.save();
  // 将画布原点移动大鱼身上中心
  ctx1.translate(this.x,this.y);
  // 设置大鱼旋转角度
  ctx1.rotate(this.angle);
  // 绘制 身体 
  ctx1.drawImage(this.bigBody[this.bigBodyIndex],-this.bigBody[this.bigBodyIndex].width*0.5,-this.bigBody[this.bigBodyIndex].height*0.5);
 // 绘制尾巴
  ctx1.drawImage(this.bigTail[this.bigTailIndex],-this.bigTail[this.bigTailIndex].width*0.5+30,-this.bigTail[this.bigTailIndex].height*0.5);
 // 绘制  眼镜
  ctx1.drawImage(this.bigEye[this.bigEyeIndex],-this.bigEye[this.bigEyeIndex].width*0.5,-this.bigEye[this.bigEyeIndex].height*0.5);
  //恢复画笔1状态
  ctx1.restore();
}
// 4将mom.js添加index文件中
// 5并且在main，js创建大鱼对象并且调用方法