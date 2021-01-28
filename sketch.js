const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var fairy,star,starBody;
var canvas,bg;

function preload(){
   
  bg=loadImage("images/starnight.png");
  starImg=loadImage("images/star.png");
  fairyImg=loadAnimation("images/fairy1.png","images/fairy2.png"); 
}

function setup() {
  canvas=createCanvas(800, 750);

  star=createSprite(600,30,50,50);
  star.addImage(starImg);
  star.scale=0.2;

  fairy=createSprite(150,580,50,50);
  fairy.addAnimation("animation",fairyImg);
  fairy.scale=0.25;

  engine=Engine.create();
  world=engine.world;

  var star_options={
    isStatic:true
  }
  starBody=Bodies.rectangle(200,200,50,50,star_options);
  World.add(world,starBody);

  Engine.run(engine);
}

function draw() {
  background(bg);
  
  drawSprites();

  star.x=StarBody.position.x;
  star.y=StarBody.position.y;

  if(star.y>470 && starBody.position.y>470){
    Matter.Body.setStatic(starBody, true);   
  }
}

function keyFun(){

  if(keyCode===LEFT_ARROW){
    fairy.x=fairy.x-20;  
   }
 
 if(keyCode===RIGHT_ARROW){
    fairy.x=fairy.x+20;  
   }
 
 if(keyCode===DOWN_ARROW){
     Matter.Body.setStatic(starBody, false);  
  }
}