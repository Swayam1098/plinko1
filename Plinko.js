class Plinko{
    constructor(x,y){
        var options = {
           isStatic : true
        }
this.body = Bodies.circle(x,y,10,options)
this.radius=10
World.add(world,this.body)

    }
display(){
    var angle=this.body.angle
    var pos= this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(RADIUS)
    fill("white")
     ellipse(0,0,this.radius,this.radius)
    pop();
}
}