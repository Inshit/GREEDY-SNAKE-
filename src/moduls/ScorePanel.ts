//定义记分牌的类
class ScorePanel {
  //定义属性两个积分牌
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelELe: HTMLElement;
  //设置一个变量限制等级
  maxLevel: number
  //设置一个变量表示多少分升级
  upScore: number
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelELe = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore
  }
  //设置一个加分的方法
  addScore() {
    this.score++
    this.scoreEle.innerHTML = this.score + ''
    //判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }
  //提升等级
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelELe.innerHTML = ++this.level + ''
    }
  }
}
export default ScorePanel;