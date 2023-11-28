class Lobo {
 
  constructor() {
    this.x = 50;
    this.y = 250;
    this.tam = 75;
    this.vel = .75;
  }
  
  actualizar () {
   this.mover();
   this.dibujar();
  }
  

  
  mover() {
   this.x+=this.vel; 
  }
  
  agarroCerdo(cerdo) {
   return(dist(this.x,this.y,cerdo.x,cerdo.y-75) <= 10);
   }
  
  dibujar() {
    push();
     translate(this.x,this.y);
     fill(200,200,255);
     image(loboImage,0,0,this.tam,this.tam*2);
    pop();
  }
  
  getPosicionX(){
   return this.x; 
  }
}
