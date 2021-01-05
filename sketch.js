const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand1, stand2;

var scoreVariable;

var polygon;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16;

var box17,box18, box19, box20, box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32;


function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  scoreVariable = 0;

  polygon = new Polygon(100, 150, 25, 25);

  ground = new Ground(500, 390, 1000, 20);

  stand1 = new Ground(400, 275, 250, 20);
  stand2 = new Ground(800, 200, 250, 20);

  //Bottom row of the first stand
  box1 = new Box(295, 240, 35, 35);
  box2 = new Box(330, 240, 35, 35);
  box3 = new Box(365, 240, 35, 35);
  box4 = new Box(400, 240, 35, 35);
  box5 = new Box(435, 240, 35, 35);
  box6 = new Box(470, 240, 35, 35);
  box7 = new Box(505, 240, 35, 35);
 
  //second row of the first stand
  box8 = new Box2(330, 205, 35, 35);
  box9 = new Box2(365, 205, 35, 35);
  box10 = new Box2(400, 205, 35, 35);
  box11 = new Box2(435, 205, 35, 35);
  box12 = new Box2(470, 205, 35, 35);

  //third row of the first stand
  box13 = new Box3(365, 170, 35, 35);
  box14 = new Box3(400, 170, 35, 35);
  box15 = new Box3(435, 170, 35, 35);

  //final row of the first stand
  box16 = new Box4(400, 135, 35, 35);

  //first row of second stand
  box17 = new Box(695, 165, 35, 35);
  box18 = new Box(730, 165, 35, 35);
  box19 = new Box(765, 165, 35, 35);
  box20 = new Box(800, 165, 35, 35);
  box21 = new Box(835, 165, 35, 35);
  box22 = new Box(870, 165, 35, 35);
  box23 = new Box(905, 165, 35, 35);

  //second row of the second stand
  box24 = new Box2(730, 130, 35, 35);
  box25 = new Box2(765, 130, 35, 35);
  box26 = new Box2(800, 130, 35, 35);
  box27 = new Box2(835, 130, 35, 35);
  box28 = new Box2(870, 130, 35, 35);

  //third row of the second stand
  box29 = new Box3(765, 95, 35, 35);
  box30 = new Box3(800, 95, 35, 35);
  box31 = new Box3(835, 95, 35, 35);

  box32 = new Box4(800, 60, 35, 35);

  slingShot = new SlingShot(polygon.body, {x: 100, y: 150});
}

function draw() {
  background("grey"); 

  Engine.update(engine);

  textSize(20);
  stroke("Black");
  fill("Orange");
  text("Drag the Square to knock down the colour blocks, and press the space key to try again!", 100, 20);

  textSize(20);
  fill("Yellow");
  text("Score: " + scoreVariable, 50, 50);

  ground.display();
  stand1.display();
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();

  box32.display();

  slingShot.display();

  polygon.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
     slingShot.attach(polygon.body); 
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");

  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);

  console.log(hour);
}

async function fetchBackground() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Toronto");
  
  var JSONresponse = await response.json();

  var datetime = JSONresponse.datetime;

  var hour = datetime.slice(11, 13);

  if (hour >= 06 && hour <= 20) {
      bg = ("sprites/bg.png");
  }

  else {
      bg = ("sprites/bg2.jpg");
  }

  backgroundImg = loadImage(bg);
  console.log(bg);
}