class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			pointA:{x:0,y:0},
			bodyB:body2,
			pointB:{x:0,y:0},
			length:200,
			stiffness:0.01
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		line(320,430,340,260)
		line(360,430,370,260)
		line(400,430,400,260)
		line(440,430,430,260)
		line(480,430,460,260)
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES

		
	}

}