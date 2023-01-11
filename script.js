const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas_width = canvas.width = 600;
canvas_height = canvas.height = 600;

let x = 20;
let y = 20;
let radius = 5;

const mainSprite = new Image();
mainSprite.src = 'images/shadow_dog.png';


//Input variables
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

let speed = 2;
//Game Loop with functions

function gameLoop (){
    clearScreen();
    inputs();
    boundryCollision();
    ctx.drawImage(mainSprite, 0, 0, 575, 523, x, y, 50, 50);
    //drawPlayer();
    requestAnimationFrame(gameLoop);
};


function boundryCollision(){
  if(x < 0){
     x = 0;
  }
 if( x === 600){
      x = 560;
 }
 if(y < 0){
  y = 0;
 }
}


function inputs (){
  if (upPressed){
     y = y - speed;
  }
  if(downPressed){
    y = y + speed;
  }
  if (leftPressed){
    x = x - speed;
 }
 if(rightPressed){
   x = x + speed;
 }
};


function drawPlayer(){
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
};

function clearScreen(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
};

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);


function keyDown (event){
  if( event.keyCode == 40){
      downPressed = true;
  }

  if( event.keyCode == 38){
    upPressed = true;
}
if( event.keyCode == 37){
    leftPressed = true;
}

if( event.keyCode == 39){
  rightPressed = true;
}
};

function keyUp(event){
    if( event.keyCode == 40){
        downPressed = false;
    }
  
    if( event.keyCode == 38){
      upPressed = false;
  }
  if( event.keyCode == 37){
      leftPressed = false;
  }
  
  if( event.keyCode == 39){
    rightPressed = false;
  }
};

gameLoop();