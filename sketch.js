var bullet,wall,thickness;

var speed,weight,damage;



function setup() {
  createCanvas(1600,400);
 

speed=random(50,90);
weight=random(400,1500);
thickness=random(28,83);

bullet = createSprite(200, 200, 40, 20);
wall =createSprite(1200,200,thickness,height/2);

bullet.velocityX = speed;
}
function draw() {
  background("black");  
  if(wall.x-bullet.x<1/2*(wall.width+bullet.width)){
    bullet.velocityX=0

   damage=0.5*weight*speed*speed/thickness*thickness*thickness
    
   if(damage<10){
      wall.shapeColor="green"
         
   }
   else {
     wall.shapeColor="red"
   }
  }
  
      
    
  

  drawSprites();
}