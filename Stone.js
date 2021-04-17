class Stone
{
	constructor(x,y,r)
	{
		var options={
			'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.image = loadImage("stone.png");
		World.add(world, this.body);

	}
	display()
	{
		var pos =this.body.position;
		  imageMode(CENTER);
		  image(this.image, pos.x,pos.y,this.r, this.r)
		  
			
	}

}