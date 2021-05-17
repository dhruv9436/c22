const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myengine,myworld,myobject1, ball;

function setup() {
  createCanvas(400,400);
myengine=Engine.create();
myworld=myengine.world;
var option={isStatic:true};
myobject1=Bodies.rectangle(200,380,400,20,option);
World.add(myworld,myobject1);
console.log(myobject1);
var balloption={restitution:1.0};
ball=Bodies.circle(200,100,30,balloption);
World.add(myworld,ball);
}

function draw() {
  background("black"); 
  Engine.update(myengine);
  rectMode(CENTER);
  rect(myobject1.position.x,myobject1.position.y,400,20);
  ellipse(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}