
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperBall, bin1,bin2,bin3, ground, binImage;
function preload()
{
	binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,500,70);
	ground = new Ground(500,690,1000,20);
	bin1 = new Bin(585,510,20,320);
	bin2 = new Bin(820,510,20,320);
	bin3 = new Bin(700,665,220,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  Engine.update(engine);
  throwBall();

  //console.log(paperBall.body.position.x);

  image(binImage,565,345);
  paperBall.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}

function throwBall(){

	if(keyCode === UP_ARROW){

		Body.applyForce(paperBall.body,paperBall.body.position,{x:50,y:-140});

	}
}



