const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object,ground,ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

 // var options = {
 //   isStatic : true
//
  //}


  //object = Bodies.rectangle(200,100,50,50,options);
 // World.add(world,object);
 var ground_options = {
   isStatic : true
 }
  ground = Bodies.rectangle(200,390,200,20,ground_options)
  World.add(world,ground);
  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200,100,20, ball_options)
  World.add(world,ball)
 // console.log(object);
}

function draw() {
  background(0);
  var pos = ground.position  
Engine.update(engine);
  rectMode(CENTER)
  rect(pos.x, pos.y, 400, 20);
  //rect(object.position.x,object.position.y,50,50);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20, 20);
  drawSprites();
}