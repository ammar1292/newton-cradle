//var r1,b1,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
r1 = new Roof(400,100,400,30);

b1 = new Bob(260,400,70);
b2 = new Bob(330,400,70);
b3 = new Bob(400,400,70);
b4 = new Bob(470,400,70);
b5 = new Bob(540,400,70);


c1 = new Rope(b1.body,r1.body,-b1.radius*2, 0)
c2 = new Rope(b2.body,r1.body,-b2.radius*1,0)
c3 = new Rope(b3.body,r1.body,0,0)
c4 = new Rope(b4.body,r1.body,+b4.radius*1,0)
c5 = new Rope(b5.body,r1.body,+b5.radius*2,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  r1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  if (keyWentDown("UP_ARROW")){
		flick();
	  }

    drawSprites();

}

function flick(){
	Matter.Body.applyForce(b1.body,b1.body.position,{x:-20,y:-50});
}
