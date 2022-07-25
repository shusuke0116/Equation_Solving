//  2分法による根の計算
class nibun{
    constructor(a,EPS){     //初期値と許容誤差
        this.a = Number(a);
        this.EPS = Number(EPS);
    }
    nibunhou() {
        let b = Number(0.0);
        var result = nibunhou(this.a,b,this.EPS);
        return result;
    }
}

function nibunhou(a,b,EPS) {
  let c;
  let s = 0;
  let el = [a];
  do {
    s = s + 1;
    c = (a + b) / 2.0;   //２分計算
    el.push(c);
    if (func_y(c) * func_y(a) < 0) b = c; 
    else a = c;    
  } while (Math.abs(a - b) > EPS); // 収束判別

  let result = [s,c];
  for(let i=0;i < el.length;i++){ //最終的な根との差
    if(c > el[i]){
      result.push(c - el[i]);
    }else{
      result.push(el[i] - c);
    } 
  }
  return result;
}
//関数定義
function func_y(x) {
  return Math.pow(x, 3.0) + x - 1.0;
}
