//  2分法による根の計算
class nibun {
    constructor(a, EPS, kansu3, kansu2, kansu1, kansu0) {
        this.a = a;
        this.EPS = Number(EPS);
        this.kansu3 = kansu3;
        this.kansu2 = kansu2;
        this.kansu1 = kansu1;
        this.kansu0 = kansu0;
    }
    nibunhou() {
        let b = Number(0.0);
        let c;
        let s = 0;
        let el = [this.a];
        do {
            s = s + 1;
            c = (this.a + b) / 2.0; // 2分計算
            el.push(c);
            if (this.func_y(c) * this.func_y(this.a) < 0) b = c;
            else this.a = c;
        } while (Math.abs(this.a - b) > this.EPS); // 収束判別

        let result = [s, c];
        for (let i = 0; i < el.length; i++) { //最終的な根との差
            if (c > el[i]) {
                result.push(c - el[i]);
            } else {
                result.push(el[i] - c);
            }
        }
        return result;
    }
    func_y(x) {
        return (this.kansu3) * Math.pow(x, 3.0) + (this.kansu2) * Math.pow(x, 2.0)
            + (this.kansu1) * x + (this.kansu0);
    }
}
