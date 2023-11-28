//hola necesito una mano con este codigo, necesito crear una clase boton que me permita aumentar el valor de estado de la clase aventura grafica de estado = 0 a estado = 1 y si vuelvo a presionar el boton que pase de estado = 1 a estado = 2 y así.
//el codigo esta dividido en el sketch principal y 3 clases.

let ag;
function setup() {
  let canvas = createCanvas(400,400);
  ag = new AventuraGrafica();

}


function draw() {
  ag.actualizar();
}

class AventuraGrafica {
  constructor() {
    this.estado = 0;
    this.pantalla = new Pantalla();
    this.cantPantallas = 4;
    this.fondos = [];
    
    this.fondos[0] = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXWfhwong6vecJkY3w0U5pfvUoGVzbFmeqQ&usqp=CAU");
    this.fondos[1] = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzL89UZ4RjW6b6Rlf4rDSUBZwnfgOz_D2H9Q&usqp=CAU");
    this.fondos[2] = loadImage("https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-caperucita-roja_23-2148983010.jpg?size=626&ext=jpg");
    this.fondos[3] = loadImage("https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-caperucita-roja_23-2148983010.jpg?size=626&ext=jpg");
   
    

    this.textos = [
      "Caperucita..",
      "Se encuentra con el lobo ¿Sigue su consejo?",
      "Se pierde en el bosque",
      "Llega antes que el lobo y advierte a su abuela del peligro"
    
    ];
    
 
    
    this.botones = [];
    
    this.boton = new Boton(100, 350, 200, 50); // Crear el botón
  }

  actualizar() {
    background(200, 100, 0);
    this.pantalla.actualizar(this.fondos[this.estado], this.textos[this.estado]);
     this.boton.dibujar();
    // Verificar si el botón ha sido presionado
    if (this.boton.estaPresionado()) {
      if (this.estado == 0) { // Solo aumentar de 0 a 1
        this.estado = 1; // Cambiar el estado de 0 a 1
      }
    }
  }
}

class Boton {
  constructor(x, y, ancho, alto) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.presionado = false;
  }

  estaPresionado() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.ancho &&
      mouseY >= this.y &&
      mouseY <= this.y + this.alto &&
      mouseIsPressed
    ) {
      this.presionado = true;
    } else {
      this.presionado = false;
    }
    return this.presionado;
  }

  dibujar() {
    rectMode(CORNER);
    noStroke();
    fill(100, 100, 200);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Siguiente", this.x + this.ancho / 2, this.y + this.alto / 2);
  }
}

class Pantalla{
  
  constructor(){
     
  }
  
  actualizar( fondo_ , texto_  )   {

    push();
     imageMode(CORNER);
    image(fondo_,0,0,width,height);
    

    fill(0,20);
    rect(0,0,width,height*0.3);
    

    fill(100);
    textSize(24);
    textAlign(CENTER,CENTER);
    text( texto_ , 0,0,width,height*0.3);
    
    pop();
    
      }
  
}
