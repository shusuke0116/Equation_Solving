// ニュートン法による根の計算
class newton{
  constructor(a,EPS){   //初期値と許容誤差
    this.a = Number(a);
    this.EPS = Number(EPS);
  }
  newtonhou(){
    var result = newtonhou(this.a,this.EPS);
    return result;
  }
}
function newtonhou(a,EPS) {
  let b;
  let s = 0;
  let el = [a];
  while (1) {
    s = s + 1;
    b = a - func_y(a) / func_z(a); 
    el.push(b);
    if (Math.abs(a - b) < EPS) break;  // 収束判定
    else a = b;
  }
  let result = [s,b];
  for(let i=0;i < el.length;i++){ //最終的な根との差
    if(b > el[i]){
      result.push(b - el[i]);
    }else{
      result.push(el[i] - b);
    } 
  }

  return result;
}
//関数定義
function func_y(x) {
  return Math.pow(x, 3.0) + x - 1.0;
}
function func_z(x) {
  return 3.0 * Math.pow(x, 2.0) + 1.0;
}
