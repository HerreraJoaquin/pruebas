let ag;
let botones = [];
let juego;




function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('ventana');
  ag = new AventuraGrafica();
  crearBotones(ag.cantPantallas);
  juego = new Juego();
}

function draw() {
  ag.actualizar();
  if (ag.estado === 4) {
    juego.actualizar();
  }else if (ag.estado == 3) {
    juego.estado = 0;
  }
  
  if (ag.estado === 17) {
    juego.actualizar();
  }else if (ag.estado == 16) {
    juego.estado = 0;
  }
  
  if (ag.estado === 0) {
    juego.estado = 0;
  }
}



function crearBotones(cantidad) {
  botones = [];
  for (let i = 0; i < cantidad; i++) { 

    botones[i] = [];
  }
  
  botones[0][0] = new Boton(300, 355, "SIGUIENTE", 1);
  
  botones[1][0] = new Boton(300, 355, "SIGUIENTE", 2);
  
  botones[2][0] = new Boton(300, 355, "Soplar", 3);
  botones[2][1] = new Boton(175,355,"Quemar",13);
  
  botones[3][0] = new Boton(300, 355, "SIGUIENTE", 4);
  
  
  
  botones[5][0] = new Boton(300, 355, "Soplar", 6);
  botones[5][1] = new Boton(175,355,"Termitas",20);
  
  botones[6][0] = new Boton(300, 355, "SIGUIENTE", 7);
  
  botones[7][0] = new Boton(300, 355, "SIGUIENTE", 8);
  
  botones[8][0] = new Boton(300, 355, "Soplar", 9);
  botones[8][1] = new Boton(50, 355, "Esperar", 23);
  botones[8][2] = new Boton(175, 355, "Cavar", 28);
  
  botones[9][0] = new Boton(300, 355, "SIGUIENTE", 10);
  
  botones[10][0] = new Boton(300, 355, "SIGUIENTE", 11);
  
  botones[11][0] = new Boton(300, 355, "SIGUIENTE", 12);
  
  botones[12][0] = new Boton(300, 355, "SIGUIENTE", 31);
  
  botones[13][0] = new Boton(300, 355, "SIGUIENTE", 14);
  
  botones[14][0] = new Boton(300, 355, "SIGUIENTE", 15);
  
  botones[15][0] = new Boton(300, 355, "Soplar", 16);
  botones[15][1] = new Boton(175,355, "Termitas",32);
  
  botones[16][0] = new Boton(300, 355, "SIGUIENTE", 17);
  
  
  
  botones[18][0] = new Boton(300, 355, "Soplar", 19);
  botones[18][1] = new Boton(50, 355, "Esperar", 26);
  botones[18][2] = new Boton(175, 355, "Cavar", 33);
  
  botones[19][0] = new Boton(300, 355, "SIGUIENTE", 10);
  
  botones[20][0] = new Boton(300, 355, "SIGUIENTE", 21);
  
  botones[21][0] = new Boton(300, 355, "SIGUIENTE", 7);
  
  botones[22][0] = new Boton(300, 355, "SIGUIENTE", 17);
  
  botones[23][0] = new Boton(300, 355, "SIGUIENTE", 24);
  
  botones[24][0] = new Boton(300, 355, "SIGUIENTE", 25);
  
  botones[25][0] = new Boton(300, 355, "SIGUIENTE", 31);
  
  botones[26][0] = new Boton(300, 355, "SIGUIENTE", 35);
  
  botones[27][0] = new Boton(300, 355, "SIGUIENTE", 31);
  
  botones[28][0] = new Boton(300, 355, "SIGUIENTE", 29);
  
  botones[29][0] = new Boton(300, 355, "SIGUIENTE", 34);
  
  botones[30][0] = new Boton(300, 355, "SIGUIENTE", 34);
  
  botones[31][0] = new Boton(300, 355, "Reiniciar", 0);
  
  botones[32][0] = new Boton(300, 355, "SIGUIENTE", 22);
  
  botones[33][0] = new Boton(300, 355, "SIGUIENTE", 30);
  
  botones[34][0] = new Boton(300, 355, "SIGUIENTE", 31);
  
  botones[35][0] = new Boton(300, 355, "SIGUIENTE", 27);
  

  

}

function mousePressed() {
  for(i = 0; i<botones[ag.estado].length; i++)
  {
    if(botones[ag.estado][i].clickEnBoton()){ag.estado = botones[ag.estado][i].pantalla_ir; break}
    
    
  }
}

function keyPressed() {
  if (ag.estado === 4) {
    juego.keyPressed();
  } else {
    juego.keyPressed(); 
  }
  
  if (ag.estado === 17) {
    juego.keyPressed();
  } else {
    juego.keyPressed(); 
  }
  
}

function preload() {

  loboImage = loadImage("./assets/lobocorriendo2.0.png");
  cerdoImage = loadImage("./assets/cerditocorriendo2.0.png");
  fondoImage = loadImage("./assets/fondo.png");
}
