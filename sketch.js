var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var banana, bananaImg;
var obstacle, obstacleImg;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
   
}

function setup() {
  
  createCanvas(400, 400);
  
  monkey = createSprite(60, 315);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  
  bananaGroup = createGroup();
  
}

function draw() {

  background("white");
  
  if(keyDown("space")&& monkey.y >= 120){
    
    monkey.velocityY = -12;
    
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
    
  food();
  
  enemy();
  
  drawSprites();
  
}

function food(){
  
  if (frameCount % 80 === 0){
  
  banana = createSprite(325, Math.round(random(120, 300)));
  banana.addImage(bananaImg);
  banana.scale = 0.1;
  banana.velocityX = -5;
  banana.lifetime = 400;
    
    bananaGroup.add(banana);
  
}
  
}

function enemy(){
  
  if (frameCount % 300 === 0){
    
    obstacle = createSprite(325, 325);
    obstacle.addImage(obstacleImg);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 400;
    
  }
  
}