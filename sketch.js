
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400);
  monkey=createSprite(50,315,20,50)
  monkey.addAnimation("walking",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  console.log(ground.x)
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
}


function draw() {
  ground.x=ground.width/2
  background("white")
  stroke("black")
  textSize(20)
  fill("black")
  score=Math.ceil(frameCount/frameRate())
  text("Survival Time : "+ score, 100,50);
  
  if(keyDown("space")&& monkey.y >= 50) {
        monkey.velocityY = -7 ;}
        monkey.velocityY = monkey.velocityY + 1
  monkey.collide(ground);
  spawnObstacles();
  foodObstacles();
  drawSprites();
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
var rand = Math.round(random(1,6));
    var obstacle = createSprite(400,330,10,40)
    obstacle.velocityX = -4
    obstacle.addImage(obstaceImage );
   obstacle.scale=0.1
   obstacle.lifetime=100
   obstaclesGroup.add(obstacle);
 }
}
function foodObstacles(){
  if (frameCount % 80 === 0) {
    var food= createSprite(400,120,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage );
    food.scale = 0.05;
    food.velocityX = -3;
    food.lifetime=133.33
    FoodGroup.add(food);
  }
}


