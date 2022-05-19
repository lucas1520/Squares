//Lucas Lipinsky - 2022

numberBullet = 5;
arrayBullet = []
class Bullet {
    constructor() {
        this.x = player1.getPosX();
        this.y = player1.getPosY();
        this.angle = player1.getAngle();
        this.speed = 5;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(
            this.x + 20 * Math.cos(this.angle),
            this.y - 20 * Math.sin(this.angle) + Math.cos(this.angle)
        );
        ctx.lineTo(
            this.x + 40 * Math.cos(this.angle),
            this.y - 40 * Math.sin(this.angle)
        );
        ctx.stroke();
        ctx.closePath();
    }
    collision() {
        for (let i = 0; i < arrayEnemies.length; i++) {
            if (
                this.x < arrayEnemies[i].x + 20 &&
                this.x > arrayEnemies[i].x &&
                this.y < arrayEnemies[i].y + 20 &&
                this.y + 20 * Math.sin(this.angle) + Math.cos(this.angle) > arrayEnemies[i].y
            ) {
                arrayEnemies.splice(i, 1);
                console.log("Colisão detectada");
                arrayBullet.splice(0, arrayBullet.length);
                ponto = ponto + 20;
            }
        }
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
            arrayBullet.shift();
        }
    }
    update() {
        this.x += this.speed * Math.cos(this.angle);
        this.y -= this.speed * Math.sin(this.angle);
        this.draw();
        this.collision();
    }
}
bullet = new Bullet();
