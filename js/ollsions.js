//完成游戏中碰撞检测
//大鱼碰撞到食物
function momFruitsCollison(){
  // 创建循环遍历所有食物
  for(var i=0;i<fruit.num;i++){
  // 判断当前食物是否是显示
    if(fruit.alive[i]){
  // 计算当前食物与大鱼距离
    var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
  // 如果两者之间距离小于900
      if(l<900){
  // 大鱼消失
      fruit.dead(i);
      //累加方式
      // 判断当前食物类型
      var type=1;
      if(fruit.fruitType[i]!="blue"){
        type=2;
      }
      // 累加
      data.add(type);
      wave.born(fruit.x[i],fruit.y[i]);
      }
    }
  }
  // 将函数添加gameloop中
}