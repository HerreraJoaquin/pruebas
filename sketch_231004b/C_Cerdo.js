class Cerdo {
 
  constructor() {
    this.x = 200;
    this.y = height*0.75;
    this.tam = 60;
    this.vel = 0;
    this.ultimaTeclaPresionada = null; 
    
  }
  
  actualizar() {
    this.mover();
    this.dibujar();
    this.desacelera();
  }
  
  mover() {
    this.x+=this.vel;
  
  } 
  
  dibujar() {
   translate(this.x, this.y);
   fill(237,151,223);
   ellipse(0,0,this.tam,this.tam);
  }
  
  desacelera() {
    this.vel-=.001;
    if ( this.vel<0) {
      this.vel = 0;
     }
    }
    
    keyPressed() {
    if ( key != this.ultimaTeclaPresionada) {
      this.ultimaTeclaPresionada = key;
      this.vel+=.02;
      if ( this.vel>4 ) {
        this.vel = 4;
      }
     }
    }
    
  
  
}
