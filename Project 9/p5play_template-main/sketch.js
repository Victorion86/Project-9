var box


function setup() {
  createCanvas(400,400);

  box = createSprite(200, 200, 40, 40); 

}



function draw() 
{

  background(30);

  if(keyDown("left")) { 

    background("green");
  }

  if(keyDown("right")) {

    background("orange");
  }

  if(keyDown("up")) {

    background("blue");
  }

  if(keyDown("down")) {

    background("red");
  }

  drawSprites();

}




