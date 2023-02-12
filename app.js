const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

const engine = Engine.create();
const render = Render.create({
  element: document.body,
  engine: engine
})

const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

const boxA = Bodies.rectangle(maxWidth/2, 600, 70, 300);
const circleA = Bodies.circle(maxWidth/2+70, 670, 40);
const circleB = Bodies.circle(maxWidth/2-70, 670, 40);
const ground = Bodies.rectangle(maxWidth/2, maxHeight - 30, maxWidth, 60, {isStatic: true});
let bodies = [boxA, circleA, circleB, ground];

function addBodies() {
  Composite.add(engine.world, bodies);
}
addBodies();

function spawnBalls() {
  const randomSpawnY = Math.floor(Math.random()*maxWidth/8)+maxWidth/2-maxWidth/16;
  const randomSize = Math.floor(Math.random()*30)+10;
  const circle = Bodies.circle(randomSpawnY, 50, randomSize);
  Composite.add(engine.world, [ground, circle])
}

setInterval(spawnBalls, 500)


render.canvas.width = maxWidth;
render.canvas.height = maxHeight;

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);
