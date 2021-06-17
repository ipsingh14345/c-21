var fixedRect, movingRect;
var car,wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,200,20,20);
  car.shapeColor="blue";
  wall=createSprite(1000,200,40,40);
  wall.shapeColor="green";

  car.velocityX=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(car,wall)){
textSize(30);
    text("touched",500,400);
  }
  
  bounceOff(car,wall);
    drawSprites();
  
}


