//Lucas Lipinsky - 2022

wPressed = false;
aPressed = false;
sPressed = false;
dPressed = false;

shiftPressed = false;

frame = 0;

ponto = 0;

continuar = true;


document.addEventListener('keydown', function(e){
    if(e.key === 'w') wPressed = true;
});
document.addEventListener('keydown', function(e){
    if(e.key === 'a') aPressed = true;
});
document.addEventListener('keydown', function(e){
    if(e.key === 's') sPressed = true;
});
document.addEventListener('keydown', function(e){
    if(e.key === 'd') dPressed = true;
});
// document.addEventListener('keydown', function(e){
//     if(e.key === 'c'){
//         shiftPressed = true;
//     }
// });

document.addEventListener('keyup', function(e){
    if(e.key === 'w') wPressed = false;
})
document.addEventListener('keyup', function(e){
    if(e.key === 'a') aPressed = false;
})
document.addEventListener('keyup', function(e){
    if(e.key === 's') sPressed = false;
})
document.addEventListener('keyup', function(e){
    if(e.key === 'd') dPressed = false;
})
document.addEventListener('keyup', function(e){
    if(e.key === 'l'){
        shiftPressed = !shiftPressed;
    }
});

var pontos = document.getElementById("pontos");
var nInimigos = document.getElementById("inimigos");
nInimigos.innerText = numberEnemies;

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    player1.borders();
    player1.draw();
    player1.update();
    player1.collision();
    // bullet.update();
    //bullet.on();
    frame++;
    if(shiftPressed){
        arrayBullet.push(new Bullet);
        console.log("teste");
        shiftPressed = !shiftPressed;
    }
    for(let i = 0; i < arrayBullet.length; i++){
        arrayBullet[i].update();
    }
    if(arrayBullet.length > numberBullet){
        arrayBullet.shift();
    }
    if(frame % 50 === 0){
        arrayEnemies.push(new Enemie);
    }
    for(let i = 0; i < arrayEnemies.length; i++){
        arrayEnemies[i].update();
    }
    if(arrayEnemies.length > numberEnemies){
        arrayEnemies.pop(arrayEnemies[0]);
    }
    pontos.innerText = ponto;
    if(continuar){
        requestAnimationFrame(animate);
    }else{
        alert("Você perdeu")
    }
}
animate();