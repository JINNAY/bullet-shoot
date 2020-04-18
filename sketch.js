
var bullet,wall;


function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 50, 30);
  wall = createSprite(1500,200,random(60,61),300)

}

function draw() {
  background(0,0,0);
  
  bullet.velocityX = 5;
  
  bullet.shapeColor = "wight";

  if(bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2 ){
    
      bullet.velocityX = 0;
     
      bullet.shapeColor = "red"||"yellow";

  }

 

  drawSprites();
}