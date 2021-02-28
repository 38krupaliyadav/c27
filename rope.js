class Rope{
    constructor(bodyA, bodyB){
        var options = {
            "bodyA": bird.body,
            "bodyB": log6.body,
            "stiffness": 1,
            "length": 50
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope);     
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        strokeWeight(7);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}


