var fixed_rect,moving_rect;
var shape1,shape2,shape3,shape4;
function setup() {
  createCanvas(800,400);
  moving_rect=createSprite(400, 200, 80, 30);
  moving_rect.shapeColor="red";

  fixed_rect=createSprite(200, 200, 50, 50);
  fixed_rect.shapeColor="red";
  
  shape1=createSprite(400,200,60,60)
  shape1.shapeColor="red"

  shape2=createSprite(300,150,60,90)
  shape2.shapeColor="red"

  shape3=createSprite(600,300,25,30)
  shape3.shapeColor="red"

  shape4=createSprite(700,100,40,40)
  shape4.shapeColor="red"
}

function draw() {
  background(255,255,255);

  
  moving_rect.x=mouseX; 
  moving_rect.y=mouseY;
  if(isTouching(shape4,moving_rect)){
    shape4.shapeColor="green";
    moving_rect.shapeColor="green";

  }
  else{
    shape4.shapeColor="red";
    moving_rect.shapeColor="red";
  }
  
  drawSprites();
}
