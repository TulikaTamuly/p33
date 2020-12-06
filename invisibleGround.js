class invisibleGround{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,798,70,2,options)
        World.add(world,this.body)
    }
    display(value){
        if(this.body.position.y-bodyA.position.y<12){
            score=score+value
            World.remove(world,this.world)
        }
    }
            
}