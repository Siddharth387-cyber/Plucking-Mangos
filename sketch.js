const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dground,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,attach;

function preload()
{
	treeimg=loadImage("tree.png");
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000,650);


	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stones(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	attach=new Throw(stones.body,{x:100,y:465});

	tree=createSprite(775,368);
	tree.addImage(treeimg);
	tree.scale=0.42;

	boy=createSprite(160,550);
	boy=addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  fill("black");
  textSize(18);

  detectcollision(stones,mango1);
  detectcollision(stones,mango2);
  detectcollision(stones,mango3);
  detectcollision(stones,mango4);
  detectcollision(stones,mango5);
  detectcollision(stones,mango6);
  detectcollision(stones,mango7);
  detectcollision(stones,mango8);
  detectcollision(stones,mango9);
  detectcollision(stones,mango10);

  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	attach.fly()
}
function detectCollision(lstones,lmango){
	if(lstones.body.position.x-lmango.body.position.x<lmango.diametre+lstones.diametre&&lmango.body.position.x-lstones.body.position.x<diametre+lstones.diametre&&lstones.body.position.x-lmango.body.position.x<diametre+lstones.diametre&&lmango.body.position.x-lstones.body.position.x<diametre+lstones.diametre,Matter.Body.setStatic(lmango=false)){

	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}



