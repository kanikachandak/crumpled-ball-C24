
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,dust1,dust2,dust3;

function setup() 
{
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here
	ball=new Paper();
	ground=new Ground();
	dust1=new Dustbin(700,420,20,100);
	dust2=new Dustbin(760,460,100,20);
	dust3=new Dustbin(820,420,20,100);
}


function draw() 
{
  background(0);
  Engine.update(engine);
  dust1.display();
  dust2.display();
  dust3.display();
  ball.display();
  ground.display();
}
function keyPressed()
{
	if(keyCode ===UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70});
	}
}



