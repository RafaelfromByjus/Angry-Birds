class slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
    this.pointB = pointB;
    this.slingshot1 = Constraint.create(options);
    World.add(world, this.slingshot1);
    }
    fly(){
        this.slingshot1.bodyA = null;
    }
    display(){

        if(this.slingshot1.bodyA){
            var pointA = this.slingshot1.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(3);
    
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}         