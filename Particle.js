class Particle{
    constructor(x,y){
        var options = {
            restitution:0.3,
        }
        this.body=Bodies.circle(x,y,10,options);
        this.colour=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var x=this.body.position.x;
        var y=this.body.position.y;
        var angle=this.body.angle;
        push();
        translate(x,y);
        rotate(angle);
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();

    }
}