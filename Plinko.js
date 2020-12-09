class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:1
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var x=this.body.position.x;
        var y=this.body.position.y;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(x,y,10,10);
    }
}