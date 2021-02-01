const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var fairy,star,starBody;
var canvas,bg;

function preload(){
   
  bg=loadImage("starnight.png");
  starImg=loadImage("star.png");
  fairyImg=loadAnimation("fairy1.png","fairy2.png"); 
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
  starBody=Bodies.rectangle(600,30,50,50,star_options);
  World.add(world,starBody);

  Engine.run(engine);
}

function draw() {
  background(bg);

  keyFun();
  
  drawSprites();

  star.x=starBody.position.x;
  star.y=starBody.position.y;

  if(star.y>530 && starBody.position.y>470){
    Matter.Body.setStatic(starBody, true);   
  }
}

function keyFun(){

  if(keyCode===LEFT_ARROW){
    fairy.x=fairy.x-5;  
   }
 
 if(keyCode===RIGHT_ARROW){
    fairy.x=fairy.x+5;  
   }
 
 if(keyCode===DOWN_ARROW){
     Matter.Body.setStatic(starBody, false);  
  }
}
