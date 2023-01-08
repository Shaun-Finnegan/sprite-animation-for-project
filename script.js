const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_width = canvas.width = 600;
canvas_height = canvas.height = 600;


const playerImage = new Image();
playerImage.src = 'images/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'images/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'images/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'images/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'images/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'images/layer-5.png';
let x = 0;


function animate(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 400, 100, 100);
    if(gameFrame % staggerFrames === 0){
        if(frameX < 6){
            frameX++
        }else{
            frameX = 0;
        }
    }
    gameFrame++;
    requestAnimationFrame(animate);
};
animate();

function backgroundLoop (){
    ctx.drawImage(backgroundLayer4, x, 0,);
    x--;
    requestAnimationFrame(backgroundLoop);
};
backgroundLoop();