//定义Snake类
class Snake {
  //表示蛇头
  head: HTMLElement
  //表示蛇的身体
  bodies: HTMLCollection
  element: HTMLElement
  constructor() {
    this.element = document.getElementById('snake')!
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div');
  }
  //获取蛇头的坐标
  get X() {
    return this.head.offsetLeft
  }
  //获取Y轴的坐标
  get Y() {
    return this.head.offsetTop
  }
  //设置蛇头坐标
  set X(value: number) {
    //如果新值和旧值一样就不会在修改了
    if (this.X === value) return;
    //X值得合法范围
    if (value < 0 || value > 290) {
      //进入判断是否撞墙
      throw new Error('蛇撞墙了!');
    }
    //修改x时,是在修改水平坐标,蛇在左右移动,蛇在向左移动时,不能向右掉头
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        //如果新值value大于旧值X,应该让蛇继续往左走   按键向右
        value = this.X - 10
      } else {
        //按键向左
        value = this.X + 10
      }
    }

    //移动身体
    this.moveBody()
    this.head.style.left = value + 'px';
    this.checkHeadBody()
  }
  set Y(value: number) {
    //如果新值和旧值一样就不会在修改了
    if (this.Y === value) return;
    //Y值得合法范围
    if (value < 0 || value > 290) {
      //进入判断是否撞墙
      throw new Error('蛇撞墙了!');
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        //如果新值value大于旧值X,应该让蛇继续往左走   按键向右
        value = this.Y - 10
      } else {
        //按键向左
        value = this.Y + 10
      }
    }
    //移动身体
    this.moveBody()
    this.head.style.top = value + 'px';
    this.checkHeadBody()
  }
  //蛇增加身体的方法增加一个div
  addBody() {
    //向element 中添加一个div
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
  //身体移动
  moveBody() {
    /* 
将后边身体设置为前边身体的位置
第四节等于第三节的位置
第三节 = 第二节的位置
...
*/
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取挡墙的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      //设置到当前身体
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px'
    }
  }
  //判断头部和身体是否相撞
  checkHeadBody() {
    //获得所有的身体 ,检查是否和蛇头发生重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        throw new Error('撞到自己了!');
      }
    }
  }

}
export default Snake;