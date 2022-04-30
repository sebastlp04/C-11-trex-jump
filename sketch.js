
var trex,trex_running;
var edges;
var ground,ground_image;
var invisibleground;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges =createEdgeSprites();
  trex.scale = 0.5;
  trex.x =50;

  ground = createSprite(220,180,400,20);
  ground.addImage ("tierra",ground_image);
  ground.x = ground.width/2

  invisibleground = createSprite(210,195,400,20);
  invisibleground.visible = false; 
}

function draw(){
  background(150);
  
  console.log(trex.y);
  if(keyDown("space") && trex.y >= 100){
    trex.velocityY=-10
  
  }
  trex.velocityY= trex.velocityY + 0.5
  trex.collide(invisibleground);
  ground.velocityX =-2;

  if (ground.x < 0)
  {
    ground.x = ground.width/2  
  }


  drawSprites()
}

