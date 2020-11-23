//var paper,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1145, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,50);
	ground = new Ground(600,height,1200,20);
	box1=new Dustbin(1030,550);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("pink");
  paper.display();
  ground.display();
  box1.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:135,y:-125})
	}
}



