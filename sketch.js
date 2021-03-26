const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300


function setup() {
  createCanvas(450,700);
  
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(230,690,550,10)

  division1= new Divisions(450,350,10,700)
  division2= new Divisions(0,350,10,700)

  division3 = new Divisions(50,510,10,350)
  division4 = new Divisions(100,510,10,350)
  division5 = new Divisions(150,510,10,350)
  division6 = new Divisions(200,510,10,350)
  division7 = new Divisions(250,510,10,350)
  division8 = new Divisions(300,510,10,350)
  division9 = new Divisions(350,510,10,350)
  division10 = new Divisions(400,510,10,350)

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2 , 10, divisionHeight))
  }

  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  
  for(var j =15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 40; j <=width; j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j =15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }
}

function draw () {
  background("black"); 
  Engine.update(engine); 
  
  ground.display()

  division1.display()
  division2.display()

  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  division8.display()
  division9.display()
  division10.display()


  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }



  for(var j = 0; j<particles.lenght; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.lenght; k++){
    divisions[k].display()
  }
  
}
