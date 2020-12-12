

class Ground {
    constructor(x,y,width,height){
 // defines the properties of the object

 var option = {
     isStatic : true 
 }

this.body = Bodies.rectangle(x,y,width,height,option);
World.add(world,this.body); 
this.width = width
this.height = height


    }

    display(){
//function
var pos = this.body.position
fill("yellow")
rectMode(CENTER);
rect(pos.x, pos.y, this.width, this.height);
    }
}


