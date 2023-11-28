class Cerdo {

  constructor() {
    this.espera = millis()+4*1000;
    this.x = 100;
    this.y = 325;
    this.tam = 75;
    this.vel = 0;
    this.teclaPresionadaN = "n";
    this.teclaPresionadaM = "m";
    this.mov = true;
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
    push();
    translate(this.x, this.y);
    fill(237, 151, 223);
    image(cerdoImage, 0, 0, this.tam, this.tam);
    pop();
  }

  desacelera() {
    this.vel-=.001;
    if ( this.vel<0) {
      this.vel = 0;
    }
  }

  keyPressed() {
    
    if ( key == this.teclaPresionadaN && !this.mov) {
      this.mov = true;
      this.vel+=.02;
      if ( this.vel>4 ) {
        this.vel = 4;
      }
    }
    if ( key == this.teclaPresionadaM && this.mov) {
      this.mov = false;
      this.vel+=.02;
      if ( this.vel>4 ) {
        this.vel = 4;
      }
    
    }
  }
}
