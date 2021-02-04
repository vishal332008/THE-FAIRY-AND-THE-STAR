var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(0,0,10,10);
    star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5 , isStatic : true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy.setCollider("rectangle",0,0,50,50);

}


function draw() {
  background(bgImg);

  if(keyDown(LEFT_ARROW)){
    fairy.x = fairy.x - 10;
  }

  if(keyDown(RIGHT_ARROW)){
    fairy.x = fairy.x + 10;
  }

  star.x = starBody.position.x;
  star.y = starBody.position.y; 

  if(keyDown("f")){
	Matter.Body.setStatic(starBody , false);
  }

  if(starBody.position.y > 470){
	Matter.Body.setStatic(starBody , true); 
  }

  starFall();

  drawSprites();

}

function starFall() {
	//write code here
}
         