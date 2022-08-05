// ニュートン法による根の計算
class newton {
  constructor(a, EPS, kansu3, kansu2, kansu1, kansu0) {
    this.a = a;
    this.EPS = Number(EPS);
    this.kansu3 = kansu3;
    this.kansu2 = kansu2;
    this.kansu1 = kansu1;
    this.kansu0 = kansu0;
  }
  newtonhou() {
    let b;
    let s = 0;
    let el = [this.a];
    while (1) {
      s = s + 1;
      b = this.a - this.func_y(this.a) / this.func_z(this.a);
      el.push(b);
      if (Math.abs(this.a - b) < this.EPS) break;  // 収束判定
      else if (isNaN(b)) break;
      else this.a = b;
    }
    let result = [s, b];
    if (b > 0) {
      for (let i = 0; i < el.length; i++) { //最終的な根との差
        if (b > el[i]) {
          result.push(b - el[i]);
        } else {
          result.push(el[i] - b);
        }
      }
    }
    return result;
  }

  func_y(x) {
    return this.kansu3 * Math.pow(x, 3.0) + this.kansu2 * Math.pow(x, 2.0)
      + this.kansu1 * x + this.kansu0;
  }

  func_z(x) {
    return this.kansu3 * 3 * Math.pow(x, 2.0) + this.kansu2 * 2 * x
      + this.kansu1;
  }
}
