let juego;

function setup() {
 createCanvas(600,600);
  juego = new Juego();
}


function draw() {
 juego.actualizar();
}

function keyPressed(){
 juego.keyPressed(); 
}
