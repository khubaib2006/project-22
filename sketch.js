const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var con, con2, con3, con4, con5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob_options = {
		restitution: 0.5
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(300,300,25,bob_options);
    World.add(world,bob1);

	bob2 = Bodies.circle(350,300,25,bob_options);
    World.add(world,bob2);

	bob3 = Bodies.circle(400,300,25,bob_options);
    World.add(world,bob3);

	bob4 = Bodies.circle(450,300,25,bob_options);
    World.add(world,bob4);

	bob5 = Bodies.circle(500,300,25,bob_options);
    World.add(world,bob5);

	rope1=new rope(bob1,roof,-80,0)
	World.add(world,rope1)

	rope2=new rope(bob2,roof,-100,0)
	World.add(world,rope2)

	rope3=new rope(bob3,roof,-120,0)
	World.add(world,rope3)

	rope4=new rope(bob4,roof,-140,0)
	World.add(world,rope4)

	rope5=new rope(bob5,roof,-150,0)
	World.add(world,rope5)

	con = Matter.Constraint.create({
		pointA:{x:300,y:95},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  });

	World.add(world,con);

	con2 = Matter.Constraint.create({
	  pointB:{x:350,y:95},
	  bodyA:bob2,
	  length:200,
	  stiffness:0.1
	});

  World.add(world,con2);

  con3 = Matter.Constraint.create({
	pointA:{x:400,y:95},
	bodyB:bob3,
	length:200,
	stiffness:0.1
  });

World.add(world,con3);

con4 = Matter.Constraint.create({
	pointA:{x:450,y:95},
	bodyB:bob4,
	length:200,
	stiffness:0.1
  });

World.add(world,con4);

con5 = Matter.Constraint.create({
	pointA:{x:500,y:95},
	bodyB:bob5,
	length:200,
	stiffness:0.1
  });

World.add(world,con5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("black");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  

  
  //create ellipse shape for multiple bobs here
  Engine.update(engine);
  ellipse(bob1.position.x,bob1.position.y,50);
  ellipse(bob2.position.x,bob2.position.y,50);
  ellipse(bob3.position.x,bob3.position.y,50);
  ellipse(bob4.position.x,bob4.position.y,50);
  ellipse(bob5.position.x,bob5.position.y,50);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
  pop();
  
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob2.position.x,bob2.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob3.position.x,bob3.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob4.position.x,bob4.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob5.position.x,bob5.position.y);
  pop();
}



 


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
    }
}