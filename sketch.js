var player,zombie,bullet,groundImage,playerImage;
function preload(){
  groundImage = loadImage("ground.png");
  playerImage = loadImage("soilder.png");
}
function setup() {
  createCanvas(displayWidth,650);
  player = createSprite(150,325,70,100);
  player.addImage("soilder",playerImage);
  player.scale = 0.45;
}

function draw() {
  background(groundImage); 
  if(keyDown(UP_ARROW)){
    player.y = player.y-10;
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10;
  }
  zombies();
  drawSprites();
}
function zombies(){
  
  zombie = createSprite(displayWidth-10,random(185,500),70,100);
  zombie.velocityX = -5;
  

}
