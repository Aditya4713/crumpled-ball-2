class Dustbin{
   constructor(x,y,width,height){
      this.image = loadImage("sprites/dustbingreen.png");
    var options={
       isStatic:true , 
       friction:110.5, 
    }   
    this.body=Bodies.rectangle(x,y,200,195,options);   
    this.width=200;
    this.height=195;
    World.add(world,this.body);
 }
    display(){
       var pos=this.body.position ;
       imageMode(CENTER);
       image(this.image,pos.x, pos.y, 250,300);
   }  
 }