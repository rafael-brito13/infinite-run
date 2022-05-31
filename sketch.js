var solo_invisivel
var bloco;
var groundImage;
var solo;
var score = 0; 
var play = 1
var end = 0
var gameState = play
var grupoObstaculos

function preload(){
obs1 = loadImage ("descarga.jpg")
skin = loadImage ("images.jpg")
chao = loadImage ("ground2.png")
}

function setup(){
  createCanvas(600, 200);



  bloco = createSprite(50,180,20,50);
  edges = createEdgeSprites();
  bloco.addImage (skin)
  
  
  bloco.scale = 0.2;
  bloco.x = 50

  solo = createSprite(200, 180, 400, 20)
  solo.addImage(chao)
  
  solo_invisivel = createSprite(200, 190, 400, 10)
  solo_invisivel.visible = false

  grupoObstaculos = createGroup ()

}


function draw(){
  
  background("black");
  

text ("Pontuacao: " + score, 50, 30)


if (gameState == play){

  score = score + Math.round (frameRate()/30)

solo.velocityX = -(3 + (3 * score)/100)

 if(keyDown("space")&& bloco.y >= height - 120){
 bloco.velocityY = -10;
  }
  bloco.velocityY = bloco.velocityY + 0.5;
if (bloco.isTouching (grupoObstaculos)){

gameState = end
}

  gerarobs ()

} else if (gameState == end){

bloco.velocityY = 0
solo.velocityX = 0

grupoObstaculos.setVelocityXEach (0)-

grupoObstaculos.setLifetimeEach (-1)

}

 
  bloco.collide(solo)
  drawSprites();

  if ( solo.x <0){ solo.x= solo.width/2}

  
}

function gerarobs () {

if (frameCount %60 == 0){
cacto = createSprite (600, 158, 10, 40)
cacto.velocityX = -(6 + score/100)
cacto.scale = 0.2
cacto.addImage(obs1)

cacto.lifetime = 120

grupoObstaculos.add (cacto)
}
}
