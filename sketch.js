var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,50,50);

}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)){
    background("RED")
  }
  if (keyIsDown(LEFT_ARROW)){
    background("BLUE")
  }
  if (keyIsDown(UP_ARROW)){
    background("YELLOW")
  }
  if (keyIsDown(DOWN_ARROW)){
    background("GREEN")
  }
 
 
 


  drawSprites();
}




