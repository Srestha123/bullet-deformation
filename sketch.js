var bullet,wall,speed,weight,damage,thickness;
  function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  bullet=createSprite(150,200,50,10);
  wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
}
function draw() {
  background(1,1,1);
 bullet.shapeColor="white";
  wall.shapeColor="blue"; 
  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+8;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
 if(damage>10){
   wall.shapeColor="red";
 }
 if(damage<=10){
   wall.shapeColor="green";
 }
  }
  textSize(20);
  text("WALL THICKNESS:",100,100);
  text(thickness,100,120);
  text("BULLET SPEED:",100,140);
  text(speed,100,160);
  text("DAMAGE>10-RED",100,180);
  text("DAMAGE<=10-GREEN",100,200);
  text("BULLET DAMAGE",770,30);
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge= bullet.x+bullet.width/2;
  wallLeftEdge=wall.x-wall.width/2;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}