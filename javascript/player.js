//Lucas Lipinsky - 2022

class Player{
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.width = 50;
        this.height = 50;
        this.angle = 90 / 180 * Math.PI;
        this.speed = 7;
        this.weight = 0.1;
        this.friction = 0.02;
        this.impulse = 0.1;
        this.impulseXY= {
            x: 0,
            y: 0
        };
    }
    collision(){
        for(let i =0; i < arrayEnemies.length; i++){
            if(
                this.x < arrayEnemies[i].x + 20 &&
                this.x > arrayEnemies[i].x &&
                this.y < arrayEnemies[i].y + 20 &&
                this.y + 20 > arrayEnemies[i].y
            ){
                if(vida > 0){
                    vida--;
                    arrayEnemies.splice(0, arrayEnemies.length);
                }else{
                    continuar = false;
                }
            }
        }
    }
    draw(){
        ctx.beginPath();
        ctx.moveTo( //ponta
            this.x + 20 * Math.cos(this.angle),
            this.y - 20 * Math.sin(this.angle)
        );
        ctx.lineTo( // esquerda
            this.x - 20 * (Math.cos(this.angle) + Math.sin(this.angle)),
            this.y + 20 * (Math.sin(this.angle) - Math.cos(this.angle))
        );
        ctx.lineTo( // parte de baixo
            this.x - 20 * (Math.cos(this.angle) - Math.sin(this.angle)),
            this.y + 20 * (Math.sin(this.angle) + Math.cos(this.angle))
        );
        ctx.closePath();
        ctx.stroke();
    }
    borders(){
        if(this.x - 20 > canvas.width){
            this.x = -20;
            ponto = ponto + 200;
            pontoPeso = pontoPeso + 200;
        }if(this.x + 20 < 0){
            this.x = canvas.width + 20;
            ponto = ponto + 200;
            pontoPeso = pontoPeso + 200;
        }
        if(this.y - 20 > canvas.height){
            this.y = -20;
            ponto = ponto + 200;
            pontoPeso = pontoPeso + 200;
        }if(this.y + 20 < 0){
            this.y = canvas.height + 20;
            ponto = ponto + 200;
            pontoPeso = pontoPeso + 200;
        }
    }
    boost(){
        ctx.beginPath();
        ctx.moveTo( //ponta
            this.x - 35 * Math.cos(this.angle),
            this.y + 35 * Math.sin(this.angle)
        );
        ctx.lineTo( // esquerda
            this.x - 20 * (Math.cos(this.angle) +  0.5 * Math.sin(this.angle)),
            this.y + 20 * (Math.sin(this.angle) - 0.5 * Math.cos(this.angle))
        );
        ctx.lineTo( // parte de baixo
            this.x - 20 * (Math.cos(this.angle) - 0.5 * Math.sin(this.angle)),
            this.y + 20 * (Math.sin(this.angle) +  0.5 * Math.cos(this.angle))
        );
        ctx.closePath();
        ctx.stroke();
    }
    update(){
        if(aPressed){
            this.angle = this.angle + 6 / 180 * Math.PI;
        }
        if(dPressed){
            this.angle = this.angle - 6 / 180 * Math.PI;
        }
        if(wPressed){
            this.boost();
            this.impulseXY.x += this.impulse * Math.cos(this.angle);
            this.impulseXY.y -= this.impulse * Math.sin(this.angle);
        }else{
            this.impulseXY.x -= this.friction * this.impulseXY.x;
            this.impulseXY.y -= this.friction * this.impulseXY.y;
        }
        if(sPressed){
            this.impulseXY.x -= this.impulse * Math.cos(this.angle);
            this.impulseXY.y += this.impulse * Math.sin(this.angle);
        }
        this.x += this.impulseXY.x;
        this.y += this.impulseXY.y;
    }
    getPosX(){
        return this.x
    }
    getPosY(){
        return this.y
    }
    getAngle(){
        return this.angle
    }
}
player1 = new Player();