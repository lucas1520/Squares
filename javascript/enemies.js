//Lucas Lipinsky - 2022

numberEnemies = 15;
//numberEnemies = parseInt(prompt("Digite o número de inimigos. Pelo amor de deus, bota apenas um número sem espaço, letras ou vírgulas"));
arrayEnemies = [];
var x = 0;
var y = 0;
function calcX(){
    var a = Math.random()
    if(a <= 0.5){
        x = -a * 100;
        //console.log(x);
        return x;
    }else{
        x = (a * 100) + canvas.width;
        //console.log(x)
        return x;
    }
}
function calcY(){
    var a = Math.random()
    if(a <= 0.5){
        y = -a * 100;
        //console.log(x);
        return y;
    }else{
        y = (a * 100) + canvas.height;
        //console.log(x)
        return y;
    }
}

class Enemie{
    constructor(){
        this.x = calcX()
        this.y = calcY();
        this.radius = 50;
        this.velocityX = (Math.random() * 100) / 90 + 1.7;
        this.velocityY = (Math.random() * 100) / 90 + 1.7;
    }
    
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + 20);
        ctx.lineTo(this.x + 20, this.y + 20);
        ctx.lineTo(this.x + 20, this.y);
        //ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    borders(){
        if(this.x - this.radius * 3 > canvas.width){
            this.x = -20 * 3;
        }if(this.x + this.radius * 3 < 0){
            this.x = canvas.width + this.radius * 3;
        }
        if(this.y + this.radius * 3 < 0){
            this.y = canvas.height + this.radius * 3;
        }if(this.y - this.radius * 3 > canvas.height){
            this.y = 0 - this.radius * 3;
        }
    }
    update(){
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.draw();
        this.borders();
    }
}


enemie1 = new Enemie();
