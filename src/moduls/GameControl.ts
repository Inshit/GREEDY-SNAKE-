//引入食物类
import Food from './Food';
//引入ScorePanel类
import ScorePanel from './ScorePanel';
//引入蛇类
import Snake from './Snake';
//控制器控制其他所有类
class GameControl {
  //定义三个属性
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  //存储按键信息
  direction: string = 'Right'
  //创建一个属性了记录游戏是否结束
  isLive = true
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    //初始化
    this.init()
  }
  //游戏的初始化
  init() {
    //绑定案件事件 
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    //调用润方法
    this.run()
  }
  //创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    //修改direction的属性
    this.direction = event.key
  }
  //创建一个蛇移动的方法
  run() {
    //根据dirction的值来改变
    //或取蛇的坐标
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }
    // 检查蛇是否吃到了食物
    this.checkEat(X, Y)


    //修改XY的值
    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      alert(e.message)
      // if (e instanceof Error) alert(e.message)
      this.isLive = false
    }
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
  //创建一个吃食物的方法
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      //食物得位置进行重置
      this.food.change()
      //分数加1
      this.scorePanel.addScore()
      //蛇得身体增长一个
      this.snake.addBody()
    }

  }
}
export default GameControl;