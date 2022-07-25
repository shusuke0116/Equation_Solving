class vcanvas{
    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext( '2d' );
    }

    settateAxis(tate,ziku){
        this.tate = tate;
        this.ctxtate = ziku.getContext( '2d' );
        this.ctxtate.font = '10px serif';
        let t = 20;
        let s;      
        for(let i=0;i < tate.length;i++){
            s = 0;
            if(tate[i] > 1){
                for(let j=tate[i];j > 10;j = j / 10){
                    s = s + 1;
                } 
            } else{
                for(let j=tate[i];j < 1 && j > 0;j = j*10){
                    s = s - 1;
                }
            }
            this.ctxtate.fillText("10^" + s, 1, t);
            t = 400;
        } 
    }

    setyokoAxis(yoko,ziku){
        this.yoko = yoko;
        this.ctxyoko = ziku.getContext( '2d' );
        this.ctxyoko.font = '20px serif';
        
        for(let i = 0;i <= yoko; i = i+5){
            this.ctxyoko.fillText(i, (i / yoko) * 430 + 25,20);
        }
    }

    writeGraph(result,color,num){
        this.num = num;
        
        let yokoziku = [0];
        for(let i=1;i <= this.yoko;i++){
            yokoziku.push(i);
        }

        let n = 0;      
        do{
            n = n + 10;
        }while(result[2]*(n + 10) < 400);
        this.ctx.lineWidth = 3;
        if(color == 1){
            this.ctx.strokeStyle = "blue";
        }else{
            this.ctx.strokeStyle = "red";
        }
        
        for(let i=2;i < result.length - 1;i++){
            this.ctx.beginPath();
            this.ctx.moveTo(((i -1)/ this.yoko) * 410 +25, 400 - result[i]*n);
            this.ctx.lineTo(( i/ this.yoko) * 410 +25, 400 - result[i+1]*n );
            this.ctx.stroke();
        }  
    }
}


