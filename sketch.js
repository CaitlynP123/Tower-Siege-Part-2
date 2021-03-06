const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
  
}

function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  
  Platform1 = new Platform(390,300,250,10);
  Platform2 = new Platform(700,200,200,10);
 
  blocka1 = new Block(300,275,30,40);
  blocka2 = new Block(330,275,30,40);
  blocka3 = new Block(360,275,30,40);
  blocka4 = new Block(390,275,30,40);
  blocka5 = new Block(420,275,30,40);
  blocka6 = new Block(450,275,30,40);
  blocka7 = new Block(480,275,30,40);
  blocka8 = new Block(330,235,30,40);
  blocka9 = new Block(360,235,30,40);
  blocka10 = new Block(390,235,30,40);
  blocka11 = new Block(420,235,30,40);
  blocka12 = new Block(450,235,30,40);
  blocka13 = new Block(360,195,30,40);
  blocka14 = new Block(390,195,30,40);
  blocka15 = new Block(420,195,30,40);
  blocka16 = new Block(390,155,30,40);

  blockb1 = new Block(640,175,30,40);
  blockb2 = new Block(670,175,30,40);
  blockb3 = new Block(700,175,30,40);
  blockb4 = new Block(730,175,30,40);
  blockb5 = new Block(760,175,30,40);
  blockb6 = new Block(670,135,30,40);
  blockb7 = new Block(700,135,30,40);
  blockb8 = new Block(730,135,30,40);
  blockb9 = new Block(700,95,30,40);

  polygon = new Polygon(200,200,50)

  slingShot = new Slingshot(polygon.polygon,{x:120,y:200});
  
  Engine.run(engine);
}
function draw() {
  background("lightgreen"); 
 
  textSize(20);
  fill("Black");
  text("Drag the Stone and Release it, to launch it towards the blocks",100,30);
  text("Press Space to have another go",230,50);

  ground.display();

  polygon.display();

  Platform1.display();
  Platform2.display();

  strokeWeight(2);
  stroke("black");
  
  //fill("white");
  blocka1.display();
  blocka2.display();
  blocka3.display();
  blocka4.display();
  blocka5.display();
  blocka6.display();
  blocka7.display();
  
  //fill("pink");
  blocka8.display();
  blocka9.display();
  blocka10.display();
  blocka11.display();
  blocka12.display();
  
  //fill("hotpink");
  blocka13.display();
  blocka14.display();
  blocka15.display();
  
  //fill("red");
  blocka16.display();
  
  //fill("lightblue");
  blockb1.display();
  blockb2.display();
  blockb3.display();
  blockb4.display();
  blockb5.display();
  
  //fill("blue");
  blockb6.display();
  blockb7.display();
  blockb8.display();
  
  //fill("darkblue")
  blockb9.display();
  
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode == 32){
    slingShot.attatch(polygon.polygon)
  }
}