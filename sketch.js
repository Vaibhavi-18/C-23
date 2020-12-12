const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


   box1 = new Box(300,200,30 , 40)
   box2 = new Box(320,300 , 40 ,40)

   ground = new Ground(200,390,400,30)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display()
    box2.display()
    ground.display()
}