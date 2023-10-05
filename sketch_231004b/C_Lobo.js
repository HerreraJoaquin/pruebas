class Lobo {
 
  constructor() {
    this.x = 50;
    this.y = height*0.75;
    this.tam = 60;
    this.vel = .75;
  }
  
  actualizar () {
   this.mover();
   this.dibujar();
  }
  
  mover() {
   this.x+=this.vel; 
  }
  
  dibujar() {
    push();
     translate(this.x,this.y);
     fill(200,200,255);
     rectMode(CENTER);
     rect(0,0,this.tam,this.tam*2);
    pop();
  }
  
  getPosicionX(){
   return this.x; 
  }
}
