var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obstacle1,obstacle2,obstacle3,obsBottom4;

function preload(){
bgImg = loadImage("assets/bg.png")
obstacle1 = loadImage("assets/obsBottom1.png");
obstacle2 = loadImage("assets/obsBottom2.png");
obstacle3 = loadImage("assets/obsBottom3.png");
obstacle4 = loadImage("assets/obsTop2.png");
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

}

function setup(){
createCanvas(windowWidth,windowHeight)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 3


//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;



      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.5;



}

function draw() {
  
  background("black");
  addObstacles();      
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
            
          }

          //adding gravity
           balloon.velocityY =balloon.velocityY+0.5
        
        drawSprites();
        
}

function addObstacles(){

if(frameCount% 200===0){

obstacle = createSprite(windowWidth,500,50,50);
obstacle.velocityX = -4;
obstacle.scale = 0.3
var rand = Math.round(random(1,4))

switch(rand){

case 1:obstacle.addImage(obstacle1);
break;

case 2:obstacle.addImage(obstacle2);
break;

case 3:obstacle.addImage(obstacle3);
break;

case 4:obstacle.addImage(obstacle4);
break;
}
}



}
