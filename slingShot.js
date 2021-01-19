class SlingShot{
    constructor(body, point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 15
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    display(){
        if(this.slingShot.bodyA){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.slingShot.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }
 
    fly(){
        this.slingShot.bodyA=null;
    }
    
}