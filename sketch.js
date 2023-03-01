var fondo1, fondo;
var jugadordisparando, jugadornormal;
var suelo;


function preload(){
  fondo1=loadImage("zombiefondo.jpg");
  jugadordisparando=loadImage("jugador.png");
  jugadornormal=loadImage("jugador2.png");
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  fondo=createSprite(displayWidth/2-40,displayHeight/2-60);
  fondo.addImage(fondo1); 
  fondo.scale=1;
  jugador=createSprite(displayWidth-1000,displayHeight-250);
  jugador.addImage(jugadornormal);
  jugador.scale=0.35;
  jugador.debug=true;
  jugador.setCollider("rectangle",0,0,300,500);
  suelo=createSprite(displayWidth/2,displayHeight);
}




function draw(){
background("black");
if(keyDown("space")){
jugador.velocityY=-3;

}
jugador.velocityY=jugador.velocityY+0.8;


drawSprites();


  
}