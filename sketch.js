const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinko = [];
var division = [];

var ground, div, pli;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create(); 
  world = engine.world;
  
  ground = new Ground (width / 2, 795, width, 10);

  for (let index = 0; index <= width; index = index + 68.57142857142857) {
    div = new Division(index, height - 150, 10, 300);
    division.push(div);
  }

  for (let index = 40; index <= width; index = index + 50) {
    pli = new Plinko (index, 75)
    plinko.push(pli);
  }

  for (let index = 15; index <= width; index = index + 50) {
    pli = new Plinko (index, 150)
    plinko.push(pli);
  }

  for (let index = 40; index <= width; index = index + 50) {
    pli = new Plinko (index, 225)
    plinko.push(pli);
  }

  for (let index = 15; index <= width; index = index + 50) {
    pli = new Plinko (index, 300)
    plinko.push(pli);
  }

}

function draw() {
  background(0, 0, 0);  
  
  Engine.update(engine)

  rectMode(CENTER);

  if(frameCount % 60 === 0) {
    particles.push(new Particle(random(200, width - 200), 10, 10));
  }

  ground.display();

  for (let index = 0; index < division.length; index++) {
    division[index].display();
  }

  for (let index = 0; index < plinko.length; index++) {
    plinko[index].display();
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  
}