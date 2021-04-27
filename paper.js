class Paper {
    constructor(x,y,r){
        var options={
        //bouncy thing
        restitution:0.3,
        //friction is friction
        friction:0.5,
        //and density is density
        density:0.5

        }
        this.body=Bodies.circle(x,y,70/2,options)
        World.add(world,this.body)
        this.radius=70;
        this.image=loadImage("sprites/paper.png")
    }
    display(){
        var paperPos=this.body.position;
        push ()
        //rectMode(CENTER);
        translate (paperPos.x,paperPos.y)
        //rotate (this.angle)
        ellipse (0,0,this.radius,this.radius)
        pop ()
    }
}