var girl,backgroundImage,girlImage,schoolImage,obstacle1,obstacle2,obstacle3,obstacle4,road,canvas;
var obstacle,obstacles,things,group;

function preload(){
backgroundImage = loadImage("bgImage.jpg");
girlImage = loadAnimation("girlimage1.png","girlimage2.png","girlimage3.png");
schoolImage = loadImage("school.png");
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
maskImage = loadImage("mask.jpg");
hs = loadImage("handsanitizer.png");
}


function setup(){
createCanvas(windowWidth,windowHeight);
road = createSprite(width/2,200,20,20);
road.addImage(backgroundImage);
//road.x = road.width/2;
//road.velocityX = -2;
road.scale = 3;

//road.velocityX = -2;

girl = createSprite(100,600);
girl.addAnimation("g",girlImage);
girl.scale = 5;

obstacles = new Group();
group = new Group();
    }
    


   
    

    

function draw(){
   background(0);

//if(road.x<0){
   // road.x = width/2
//}
if(keyDown("UP_ARROW")){
    girl.y -=2;
}
if(keyDown("DOWN_ARROW")){
    girl.y +=2;
}
if(keyDown("RIGHT_ARROW")){
    girl.x +=2;
}
spawnObstacles();
spawnThings();

drawSprites();
}

function spawnObstacles(){
if(frameCount%150===0){
obstacle = createSprite(1100,Math.round(random(400,600)))
obstacle.velocityX -= 2;
obstacle.lifetime = 1000;
obstacle.scale = 0.4;

var rand = Math.round(random(1,4))
 switch(rand){
   case 1 : obstacle.addImage(obstacle1);
             break;
   case 2 : obstacle.addImage(obstacle2);             
            break;
case 3 : obstacle.addImage(obstacle3);
           break;
    case 4 : obstacle.addImage(obstacle4);
            break;
    default : break;               

 }
obstacles.add(obstacle);
}
}
function spawnThings(){
    if(frameCount% 200===0){
things = createSprite(1100,Math,round(random(100,500)))
things.velocityX -= 2;
things.lifetime = 800;

var a = Math.round(random(1,2))
switch(a){
    case 1 : things.addImage(mask);
             break;
    case 2 : things.addImage(hs);
              break;     
     default : break;         
   
}
group.add(things);
    }
}







