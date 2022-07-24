//定义食物类
class Food {
  //定义一个属性来指向对应元素
  element: HTMLElement
  constructor() {
    //获取页面中的food元素
    this.element = document.getElementById('food')!;
  }
  //定义一个获取食物的x轴坐标
  get X() {
    return this.element.offsetLeft;
  }
  //定义一个获取食物的y轴坐标
  get Y() {
    return this.element.offsetTop;
  }
  //修改食物的位置
  change() {
    //需要计算并且针对在stage舞台中
    //食物的位置最小是0最大为290,并且食物的坐标必须是10整数
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}
export default Food;