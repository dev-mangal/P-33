const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particle=null;
var plinkos=[];
var divisions=[];
var score=0,count=0,gameState="start";
var ground;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height-10,width,20);
  for(var i=0;i<=width;i=i+80){
    divisions.push(new Division(i,height-150));
  }
  for(var i=30;i<=width-30;i=i+50){
    plinkos.push(new Plinko(i,100));
  }
  for(var i=60;i<=width;i=i+50){
    plinkos.push(new Plinko(i,200));
  }
  for(var i=30;i<=width-30;i=i+50){
    plinkos.push(new Plinko(i,300));
  }
  for(var i=60;i<=width;i=i+50){
    plinkos.push(new Plinko(i,400));
  }
}

function draw() {
  Engine.update(engine);
  background(115,115,115);
  for(var i in divisions){
    divisions[i].display();
  }
  for(var i in plinkos){
    plinkos[i].display();
  }
  ground.display();
  fill("white");
  textSize(30);
  text("Score :"+score,20,40);
  text(mouseX+","+mouseY,mouseX,mouseY);
  text("500",15,650);
  text("300",95,650);
  text("100",175,650);
  text("100",255,650);
  text("300",335,650);
  text("500",415,650);
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>500){
      if((particle.body.position.x<80&&particle.body.position.x>0)||(particle.body.position.x<480&&particle.body.position.x>400)){
        score=score+500;
        particle=null;
        if(count>=5)
        gameState="end";
      }
      else if((particle.body.position.x>80&&particle.body.position.x<160)||(particle.body.position.x<400&&particle.body.position.x>320)){
        score=score+300;
        particle=null;
        if(count>=5)
        gameState="end";
      }
      else if((particle.body.position.x<320&&particle.body.position.x>160)){
        score=score+100;
        particle=null;
        if(count>=5)
        gameState="end";
      }
    }
  }
  if(gameState==="end"){
    textSize(50);
    fill("red");
    text("Game Over",110,450);
  }
}

function mouseReleased(){
  if(gameState!="end"){
    count++;
    particle=new Particle(mouseX,10);
  }
}