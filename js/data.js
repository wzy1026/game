//分数
// 创建分数构造函数dataObj
var dataObj=function(){
  //属性分数
  this.score=0;
}
// 为构造函数添加绘画方法draw
dataObj.prototype.draw=function(){
  //保存画笔1的状态
  ctx1.save();
  // 修改画笔1填充样式
  ctx1.fillStyle="#fff";
  // 修改画笔1文字大小
  ctx1.font="40px Verdana";
  // 修改画笔1文字居中
  ctx1.textAlign="center"
  // 绘制文件
  ctx1.fillText("SCORE:"+this.score,canWidth*0.5,canHeight*0.8);
  //恢复画笔1的状态
   ctx1.restore();
}
// 将data.js添加到index.html
// 在main.js 创建分数对象并且调用相关方法
//为构造函数添加一个方法add
//大鱼吃食物类型  2表示吃橙色食物  1表示吃蓝色食物
dataObj.prototype.add=function(type){
 this.score += 10000000000000000000 *type;
}