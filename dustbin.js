class Dustbin
{
    constructor(x,y,width,height)
    {
        var options= {isStatic:true};
        this.dust=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.dust);
    }
    display()
    {
        rectMode(CENTER);
        fill("yellow");
        rect(this.dust.position.x,this.dust.position.y,this.width,this.height);
    }
}