class Juego {
  
  constructor(){
  this.cerdo = new Cerdo();
  this.lobo = new Lobo();
  this.casa = new Casa();
  this.estado = 1;
  this.espera = millis()+3*1000;
  
}

actualizar(){
  
    if ( this.estado == 0) {
    } else if ( this.estado == 1 ) {
      //fondo...
      background(28, 194, 252);
      if ( millis() > this.espera ) {
        
       this.lobo.actualizar(); 
       this.cerdo.actualizar(); 
       this.casa.actualizar();
         
      } else {
        push();
        fill(255);
        textAlign(CENTER, CENTER);
        text("preparados!", width/2, height/2);
        let falta = this.espera-millis();
        text(round(falta/1000), width/2, height/2+100);
        pop();
      }
      //evaluar si gana o pierde
    } else if ( this.estado == 2 ) {
      //gane...
    } else if ( this.estado == 3 ) {
      //perdi...
    }
  }


keyPressed() {
    this.cerdo.keyPressed();
  }
 }
