const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 

var engine,world; 
var ground, ball;

function setup() { 
  var canvas = createCanvas(400,400); 
  engine = Engine.create(); 
  world = engine.world; 

  var ground_options = {

        isStatic:true

  }

  ground = Bodies.rectangle(200,380,400,20,ground_options); 
  World.add(world,ground); 
  console.log(ground.position.x,ground.position.y);

  var ball_options = {

        restitution:1.0

  }
  
  ball = Bodies.circle(100,50,20,ball_options);
  World.add(world,ball);

 } 
 
 function draw() { 
   background("black"); 
    Engine.update(engine);

     rectMode(CENTER);
    // rect(200,200,50,50); 
    rect(this.ground.position.x,this.ground.position.y, 400, 20); 

    ellipseMode(RADIUS);
    ellipse(this.ball.position.x,this.ball.position.y,20,20);

   drawSprites(); 
  
  }