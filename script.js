const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas_width = canvas.width = 1000;
canvas_height = canvas.height = 400;


const timeLeft = document.getElementById('countdown');
timeNow = 60;


let x = 20;
let y = 20;
let rabbitWidth = 80;
let rabbitHeight = 80;

let enemyX ;
let enemyY ; 
let enemyWidth = 80;
let enemyHeight = 80;


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
    wallCol();
    mainCollision();
    ctx.drawImage(mainSprite, 0, 0, 575, 523, x, y, rabbitWidth, rabbitHeight);
    ctx.drawImage(carrot, 0, 0, 100, 100, enemyX, enemyY, enemyWidth, enemyHeight);
    randomEnemyMove();
    wallOne();
    wallTwo();
    wallThree();
    wallFour();
    requestAnimationFrame(gameLoop);
};



function wallOne(){
  ctx.fillRect(400, 0, 20, 150);
};

function wallTwo(){
  ctx.fillRect(400, 300, 20 ,100);
};

function wallThree(){
  ctx.fillRect(600, 0, 25, 50);
};

function wallFour(){
  ctx.fillRect(800, 100, 20, 100);
};





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

function wallCol(){
  if(x === 400 && y < 150 ){
    x = 0;
 }
 if(x === 400 && y > 250 ){
  x = 0;
}
if(x === 600 && y < 50 ){
  x = 0;
}
if(x === 800 && y > 100 && y < 200 ){
  x = 0;
}
};

function mainCollision(){
  if (x + 80 >= enemyX  && y + 80 >= enemyY &&
     x <= enemyX + 80 &&
     y <= enemyY + 80){
      enemyX = 0;
      enemyY = 0;
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

function randomEnemyMove(){
  enemyX = 500;
  enemyY =  300;
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