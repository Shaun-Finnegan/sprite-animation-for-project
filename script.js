const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas_width = canvas.width = 1000;
canvas_height = canvas.height = 400;


const timeLeft = document.getElementById('countdown');
timeNow = 60;


let x = 20;
let y = 20;
let radius = 5;

let enemyX = 1;
let enemyY = 200;


const mainSprite = new Image();
mainSprite.src = 'images/shadow_dog.png'

carrot = new Image();
carrot.src = 'images/Safeimagekit-resized-img (11).png';



//Input variables
let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

let speed = 5;
let enemySpeed = 2;
//Game Loop with functions

function gameLoop (){
    clearScreen();
    inputs();
    boundryCollision();
    enemyBoundryCol();
    ctx.drawImage(mainSprite, 0, 0, 575, 523, x, y, 80, 80);
    ctx.drawImage(carrot, 0, 0, 100, 100, enemyX, enemyY, 80, 80);
    requestAnimationFrame(gameLoop);
};

function countDown(){
   timeNow--;
   timeLeft.innerHtml = timeNow;
};

setInterval(countDown, 1000);

setInterval(randomEnemyMove, 5000);



function boundryCollision(){
  if(x < 0){
     x = 0;
  }
 if( x >= 920){
      x = 920;
 }
  if(y < 0){
   y = 0;
 }
 if(y >= 320){
    y = 320;
 }
};



function enemyBoundryCol (){
  if(enemyX < 0){
    enemyX = 0;
    }
if( enemyX >= 920){
    enemyX = 920 ;
 }
   
 if(enemyY < 0){
  enemyY = 0;
}
if(enemyY >= 320){
   enemyY = 320;
}
};



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

function randomEnemyMove(){
  enemyX = Math.floor(Math.random() * 920);
  enemyY =  Math.floor(Math.random() * 320);
}


  

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