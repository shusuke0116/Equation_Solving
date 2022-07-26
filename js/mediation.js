class mediation {
    constructor(start, clear, num1, ans1, num2, ans2, e02, e03, e04, canvas, tate, yoko) {
        this.start = start;
        this.clear = clear;
        this.num1 = num1;
        this.ans1 = ans1;
        this.num2 = num2;
        this.ans2 = ans2;
        this.EPS = 0.0001;
        this.e02 = e02;
        this.e03 = e03;
        this.e04 = e04;
        this.canvas = canvas;
        this.nibun = new vcanvas(canvas);
        this.newton = new vcanvas(canvas);
        this.tate = tate;
        this.yoko = yoko;

        //許容誤差の設定ボタン
        e02.addEventListener("click", () => {
            this.EPS = 0.0001;
        });
        e03.addEventListener("click", () => {
            this.EPS = 0.0000001;
        });
        e04.addEventListener("click", () => {
            this.EPS = 0.000000001;
        });

        //clearボタン
        this.clear.addEventListener("click", () => {
            this.ctx = canvas.getContext('2d');
            this.ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.ctxyoko = yoko.getContext('2d');
            this.ctxyoko.clearRect(0, 0, yoko.width, yoko.height);
            this.ctxtate = tate.getContext('2d');
            this.ctxtate.clearRect(0, 0, tate.width, tate.height);
        });

        //startボタン
        this.start.addEventListener("click", () => {
            this.number = Number(document.querySelector("#number").value);
            this.kansu3 = Number(document.querySelector("#kansu3").value);
            this.kansu2 = Number(document.querySelector("#kansu2").value);
            this.kansu1 = Number(document.querySelector("#kansu1").value);
            this.kansu0 = Number(document.querySelector("#kansu0").value);

            let n1 = new nibun(this.number, this.EPS, this.kansu3, this.kansu2, this.kansu1, this.kansu0);
            let result1 = n1.nibunhou();
            this.num1.innerHTML = "計算回数：" + result1[0];
            this.ans1.innerHTML = "算出された根：" + result1[1];
            this.nibun.setyokoAxis(result1[0], this.yoko);
            this.nibun.settateAxis([result1[2], result1[result1.length - 2]], tate);
            this.nibun.writeGraph(result1, 0, this.number);

            let n2 = new newton(this.number, this.EPS, this.kansu3, this.kansu2, this.kansu1, this.kansu0);
            let result2 = n2.newtonhou();
            if (result2[1] > 0) {
                this.num2.innerHTML = "計算回数：" + result2[0];
                this.ans2.innerHTML = "算出された根：" + result2[1];
                this.newton.setyokoAxis(result1[0], this.yoko);
                this.newton.settateAxis([result1[2], result1[result1.length - 2]], tate);
                this.newton.writeGraph(result2, 1, this.number);
            } else {
                this.num2.innerHTML = "計算不能";
                this.ans2.innerHTML = "";
            }
        });
    }
}

window.addEventListener("load", () => {
    var x = new mediation(
        document.querySelector("#start"),
        document.querySelector("#clear"),
        document.querySelector("#num1"),
        document.querySelector("#ans1"),
        document.querySelector("#num2"),
        document.querySelector("#ans2"),
        document.querySelector("#e02"),
        document.querySelector("#e03"),
        document.querySelector("#e04"),
        document.querySelector("#graph1"),
        document.querySelector("#tateziku"),
        document.querySelector("#yokoziku")
    );
});
