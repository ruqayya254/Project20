var car,wall;
var speed,weigth;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500)

  car=createSprite(50,200,50,50)
  car.velocityX=speed;
  car.shapeColor="purple"
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor="yellow"
  
}

function draw() {
  background(255,255,255); 
  
  if (wall.x-car.x<(wall.width+car.width)/2){
    car.velocityX=0
    var deformation=0.5*width*speed*speed/22509
    if (deformation>180){
      car.shapeColor="red"
    }
    if (deformation<180&&deformation>100){
      car.shapeColor="blue"
    }
    if (deformation<100){
      car.shapeColor="green"
    }




  }




  drawSprites();
}