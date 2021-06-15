const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var stick1
function setup(){
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;
box1=new Box(200,200,30,30)
box2=new Box(250,250,40,40)
   ground=new Ground(450,550,900,20);
stick1=new stick(300,300,30,30)


}

function draw(){
    background(0);
    Engine.update(engine);
   box1.display()
   box2.display()
   ground.display()
   stick1.display()
   
}