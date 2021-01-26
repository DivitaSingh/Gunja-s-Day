var fairy1;
var fairy2;

function preload(){
  f=loadAnimation("fairy1.png","fairy2.png");
  b=loadImage("Gunja.png");
}
function setup(){
  createCanvas(500,480);
fairy=createSprite(100,250,50,50);
  fairy.addAnimation("fairy",f);
  fairy.scale=0.20;

  back=createSprite(250,250,50,50);
  back.addImage("back",b);
  //back.scale=0.20;
}
function draw(){
  background("Aqua");
  drawSprites();
}













