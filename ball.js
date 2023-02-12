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


const target = Matter.Bodies.circle(window.innerWidth/2, window.innerHeight/2, 1, {
  isStatic: true,
  render: {
    visible: false,
  },
});

const constraint = Matter.Constraint.create({
  bodyA: circle,
  pointB: { x: window.innerWidth/2, y: window.innerHeight/2 },
  stiffness: 0.05,
  damping: 0.05,
});

function addBodies() {
  Composite.add(engine.world, circle);
}
addBodies();

Matter.World.add(engine.world, target, constraint);


render.canvas.width = maxWidth;
render.canvas.height = maxHeight;

Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);
