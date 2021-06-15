class stick{
    constructor(x,y,width,height) {
   var opt={
       isStatic:true
   }
   this.body=Bodies.rectangle(x,y,width,height,opt);
   
   this.width=width;
   this.height=height;
   World.add(world,this.body)
   
    }   
   display(){
     push()
       fill("red")
       
   rect(this.body.position.x,this.body.position.y,30,30)
   pop()
   }
   
   
   
   
   
   
   }