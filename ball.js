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

const circle = Bodies.circle(maxWidth/2, 50, 50);

function addBodies() {
  Composite.add(engine.world, circle);
}
addBodies();

render.canvas.width = maxWidth;
render.canvas.height = maxHeight;

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

Bodies.applyForce(circle, {
  x: 500,
  y: 50
},
{
  x: 200,
  y: 200  
})