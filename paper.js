class Paper
{
    constructor()
    {
        var options = { 'restitution':0.3,
                        'friction':0.5,
                        'density':1.2
        };
        this.body=Bodies.circle(100,430,20,options);
        this.radius=20;
        World.add(world,this.body);
    }
    display()
    {
        var pos= this.body.position;
        var angle=this.body.angle;
        push();
        fill(255,105,180);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop();
    }
}