const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

 canvas_width = canvas.width = 1000;
 canvas_height = canvas.height = 400;


const score = document.getElementById('score');
let result = 0;

const time = document.getElementById('time');
let timeLeft = 60;

const gameOver = document.getElementById('game-over');
const youWin = document.getElementById('you-win');
const newGame = document.getElementById('restart-button');
const nextLevel = document.getElementById('nxt-level-button');
const youLoseRabbit = document.getElementById('you-lose');
const youWinRabbit = document.getElementById('you-win-rabbit');
const btnDisappear = document.getElementsByClassName('direction-btn-container');
const  upArrow = document.getElementById('up');
const rightArrow = document.getElementById('right');
const downArrow = document.getElementById('down');
const leftArrow = document.getElementById('left');

let mobileMoveUp = false;
let mobileMoveRight = false;
let mobileMoveDown = false;
let mobileMoveLeft = false;


let x = 20;
let y = 20;
let rabbitWidth = 80;
let rabbitHeight = 80;

let enemyX = 500 ;
let enemyY  = 200; 
let enemyWidth = 80;
let enemyHeight = 80;


const mainSprite = new Image();
mainSprite.src = 'rabbit.png'

carrot = new Image();
carrot.src = 'images/carrots100px.png';



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
    mobileInputs();
    boundryCollision();
    enemyBoundryCol();
    wallCol();
    enemyWallCol();
    mainCollision();
    ctx.drawImage(mainSprite, 0, 0, 575, 523, x, y, rabbitWidth, rabbitHeight);
    ctx.drawImage(carrot, 0, 0, 100, 100, enemyX, enemyY, enemyWidth, enemyHeight);
    wallOne();
    wallTwo();
    wallThree();
    wallFour();
    wallFive();
    wallSix();
    maxPoints();
    requestAnimationFrame(gameLoop);
};


function countDown(){
 timeLeft--;
 time.innerHTML = timeLeft;
 if(timeLeft === 0){
  clearInterval(timerDown);
   canvas.style.backgroundColor = 'black';
   gameOver.style.display = 'block';
   newGame.style.display = 'block';
   canvas.style.display = 'none';
   youLoseRabbit.style.display = 'block';
  upArrow.style.display = 'none';
    rightArrow.style.display = 'none';
    downArrow.style.display = 'none';
    leftArrow.style.display = 'none';
   
  }
};

let timerDown = setInterval(countDown, 1000);

function maxPoints(){
   if(result === 20 && timeLeft > 0){
     youWin.style.display = 'block';
     clearInterval(timerDown);
     canvas.style.display = 'none';
     nextLevel.style.display = 'block';
     youWinRabbit.style.display = 'block';
     upArrow.style.display = 'none';
     rightArrow.style.display = 'none';
     downArrow.style.display = 'none';
     leftArrow.style.display = 'none';
    }
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
  ctx.fillRect(800, 100, 20, 50);
};

function wallFive(){
  ctx.fillRect(800, 300, 20, 100);
};

function wallSix(){
  ctx.fillRect(200, 100, 20, 300);
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
if(x === 800 && y > 80 && y < 150 ){
  x = 0;
}
if(x === 800 && y > 250 ){
  x = 0;
}
if(x === 200 && y > 50 ){
  x = 0;
}

};

function enemyWallCol(){
  if(enemyX === 400 && enemyY <= 150){
     enemyX = 350
     
  }
  if(enemyX === 400 && enemyY >= 300){
    enemyX  = 235;
    
 }
 if(enemyX === 600 && enemyY <= 50){
  enemyX = 685;

}
if(enemyX === 800 && enemyY <= 150){
  enemyX = 900;
}
if(enemyX === 800 && enemyY >= 300){
  enemyX = 620;
}
if(enemyX === 200 && enemyY >= 100){
  enemyX = 485;
  
}
}

function mainCollision(){
  if (x + 80 >= enemyX  &&
     y + 80 >= enemyY &&
    x <= enemyX + 80 &&
    y <= enemyY + 80){
      enemyX = Math.floor(Math.random() * 920);
      enemyY = Math.floor(Math.random() * 320);
      result++;
      score.innerHTML = result;
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



function clearScreen(){
    ctx.clearRect(0, 0, canvas_width, canvas_height);
};

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);
upArrow.addEventListener('mousedown', mobileUpMouseDown);
rightArrow.addEventListener('mousedown', mobileRightMouseDown);
downArrow.addEventListener('mousedown', mobileDownMouseDown);
leftArrow.addEventListener('mousedown', mobileLeftMouseDown);
upArrow.addEventListener('mouseup', mobileUpMouseUp);
rightArrow.addEventListener('mouseup', mobileRightMouseUp);
downArrow.addEventListener('mouseup', mobileDownMouseUp);
leftArrow.addEventListener('mouseup', mobileLeftMouseUp);




function mobileUpMouseDown(e){
 if(e.type === 'mousedown'){
   mobileMoveUp = true;
   upArrow.style.backgroundColor = 'red';
 } 
};
function mobileRightMouseDown(e){
if(e.type === 'mousedown'){
  mobileMoveRight = true;
  rightArrow.style.backgroundColor = 'red';
}
};
function mobileDownMouseDown(e){
if(e.type === 'mousedown'){
    mobileMoveDown = true;
    downArrow.style.backgroundColor = 'red';
  }
};
function mobileLeftMouseDown(e){
 if(e.type === 'mousedown'){
  mobileMoveLeft = true;
  leftArrow.style.backgroundColor = 'red';
 }
};

function mobileUpMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveUp =  false;
   upArrow.style.backgroundColor = 'white';
  }
};
function mobileRightMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveRight = false;
   rightArrow.style.backgroundColor = 'white';
  }
};
function mobileDownMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveDown = false;
   downArrow.style.backgroundColor = 'white';
  }
};
function mobileLeftMouseUp(e){
  if(e.type === 'mouseup'){
   mobileMoveLeft = false;
   leftArrow.style.backgroundColor = 'white';
  }
};

function mobileInputs(){
  if(mobileMoveUp){
    y = y - speed;
  }

  if(mobileMoveRight){
    x = x + speed;
  }
  if(mobileMoveDown){
    y = y + speed;
  }

  if(mobileMoveLeft){
    x = x - speed;;
  }
};


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