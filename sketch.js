const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Start=0
var Play=1
var Gamestate=Start
var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
  towerImg=loadImage("tower.png");
  solImg=loadImage("soldier.png");
  sling1 = loadImage("sling1.png");
  sling2 = loadImage("sling2.png");
  bgImg = loadImage("bg.jpg");
  bg2Img = loadImage("bg2.jpg");
  
  birdImg = loadAnimation("bird.png", "bird2.png","bird.png");
  sunImg =loadAnimation("sun2.png","sun2.png","sun2.png","sun.png","sun.png","sun.png");
 // sling3 = loadImage("sling3.png");
}
function setup() {
  createCanvas(1200,600);

  
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  rock = new Stone(210,150,40);
  slingshot = new SlingShot(rock.body,{x:190, y:140});

  catapult=createSprite(220, 185, 70,70);
	catapult.addImage(sling1)
	catapult.scale=0.7
  catapult2=createSprite(203, 155, 70,70);
	catapult2.addImage(sling2)
	catapult2.scale=0.6
  catapult2.visible=false
  catapult.visible=false

  tower=createSprite(60, 370, 70,70);
	tower.addImage(towerImg)
	tower.scale=1.2
	tower.visible=false

  sol=createSprite(80, 500, 70,70);
	sol.addImage(solImg)
	sol.scale=0.2
  sol.visible=false
  
  sol2=createSprite(180, 500, 70,70);
	sol2.addImage(solImg)
	sol2.scale=0.18
  sol2.visible=false

  sol3=createSprite(280, 500, 70,70);
	sol3.addImage(solImg)
	sol3.scale=0.16
  sol3.visible=false

  sun=createSprite(1100, 50, 70,70);
	sun.addAnimation("sunshining",sunImg)
	sun.scale=0.2
 
  ground = new Ground(590,590,1300,40);
  stand1 = new Stand(470,400,250,15);
  stand2 = new Stand(900,300,350,15);

 
  //level one
  block1 = new Block(380,300,30,40);
  block2 = new Block(410,300,30,40);
  block3 = new Block(440,300,30,40);
  block4 = new Block(470,300,30,40);
  block5 = new Block(500,300,30,40);
  block6 = new Block(530,300,30,40);
  block7 = new Block(560,300,30,40);
  //level two
  block8 = new Block(410,235,30,40);
  block9 = new Block(440,235,30,40);
  block10 = new Block(470,235,30,40);
  block11 = new Block(500,235,30,40);
  block12 = new Block(530,235,30,40);
  //level three
  block13 = new Block(440,155,30,40);
  block14 = new Block(470,155,30,40);
  block15 = new Block(500,155,30,40);
  //top
  block16 = new Block(470,55,30,40);

//2nd stand level one
stand2block1 = new Block(790,203,30,40);
stand2block2 = new Block(820,203,30,40);
stand2block3 = new Block(850,203,30,40);
stand2block4 = new Block(880,203,30,40);
stand2block5 = new Block(910,203,30,40);
stand2block6 = new Block(940,203,30,40);
stand2block7 = new Block(970,203,30,40);
stand2block8 = new Block(1000,203,30,40);
stand2block9 = new Block(1030,203,30,40);
//2nd stand level two
stand2block10 = new Block(820,233,30,40);
stand2block11 = new Block(850,233,30,40);
stand2block12 = new Block(880,233,30,40);
stand2block13 = new Block(910,233,30,40);
stand2block14 = new Block(940,233,30,40);
stand2block15 = new Block(970,233,30,40);
stand2block16 = new Block(1000,233,30,40);
//2nd stand level three
stand2block17 = new Block(850,193,30,40);
stand2block18 = new Block(880,193,30,40);
stand2block19 = new Block(910,193,30,40);
stand2block20 = new Block(940,193,30,40);
stand2block21 = new Block(970,193,30,40);
//2nd stand level four
stand2block22 = new Block(880,153,30,40);
stand2block23 = new Block(910,153,30,40);
stand2block24 = new Block(940,153,30,40);

//2nd stand top
stand2block25 = new Block(910,113,30,40);

  

}
function draw() {
  
if(Gamestate===Start)
{
  background(bg2Img);
  textSize(97)
	fill("white");
	textFont("freestyle script");
	text("Press 'Enter' to Start",300,580)
  text("Press 'Space' to get a new chance ",170,480)
	textSize(137)
	fill("lightgreen");
	textFont("Algerian");
	text("Tower Siege",200,130)
	
}

if(keyCode===ENTER)
    {
        Gamestate=Play
		     
    }

  if(Gamestate===Play)
  {
  background(bgImg); 


  catapult2.visible=true
  catapult.visible=true
  tower.visible=true
  sol.visible=true
  sol2.visible=true
  sol3.visible=true


 slingshot.display();
  rock.display()
  drawSprites()

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  stand2block1.display();
  stand2block2.display();
  stand2block3.display();
  stand2block4.display();
  stand2block5.display();
  stand2block6.display();
  stand2block7.display();
  stand2block8.display();
  stand2block9.display();
  stand2block10.display();
  stand2block11.display();
  stand2block12.display();
  stand2block13.display();
  stand2block14.display();
  stand2block15.display();
  stand2block16.display();
  stand2block17.display();
  stand2block18.display();
  stand2block19.display();
  stand2block20.display();
  stand2block21.display();
  stand2block22.display();
  stand2block23.display();
  stand2block24.display();
  stand2block25.display();

  createbird()
  }

}
function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function createbird() {
  if (frameCount % 100 == 0) 
  {
    bird=createSprite(0, 50, 70,70);
    bird.y=Math.round(random(10,80));
    bird.addAnimation("birdflying",birdImg)
    bird.scale=0.7
    bird.velocityX = 4;
    bird.lifetime = 370;
  }
}

function keyPressed() {

	if(keyCode === 32) {
		Matter.Body.setPosition(rock.body, {x:210, y:150})
		slingshot = new SlingShot(rock.body,{x:190, y:140});
  }
  
}

