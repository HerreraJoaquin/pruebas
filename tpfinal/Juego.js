

class Juego {
  

  constructor(){
  this.cerdo = new Cerdo(); 
  this.lobo = new Lobo(); 
  
  this.estado = 0;
  this.espera = millis()+3*1000;
 
}



actualizar(){
  
    if ( this.estado == 0) {
      background(28, 194, 252);
      textAlign(CENTER, CENTER);
      push();
      textSize(15);
      text("Bienvenido a corre del Lobo, las reglas son simples,", width/2, height/2-50);
      text("debes apretar alternadamente las teclas", width/2, height/2-25);
      text("N y M para que el cerdito",width/2,height/2);
      text("corra del lobo, si llegas a la casa antes de que", width/2, height/2+25);
      text("el lobo te atrape, ganas, si te alcanza antes... pierdes.", width/2, height/2+50);
      text("Presiona I para comenzar.", width/2, height/2+100);
      pop();
      
  } else if ( this.estado == 1 ) {
     
      image(fondoImage,0,0,400,400);
      if ( millis() > this.espera ) {
       
        
       this.cerdo.actualizar(); 
       this.lobo.actualizar(); 
       if(this.lobo.agarroCerdo(this.cerdo)){
       ag.estado -- ;
      
       }
       if(this.cerdo.x >= 400){
       ag.estado ++ ;
       }
         
      } else {
        push();
        textSize(25);
        textAlign(CENTER, CENTER);
        text("preparados!", width/2, height/2);
        let falta = this.espera-millis();
        text(round(falta/1000), width/2, height/2+100);
        pop();
      }
      
    } 
  }


keyPressed() {
  
   
    if (this.estado == 0 && key == "i") {
    this.estado = 1;
    this.espera = millis()+3*1000;
    this.cerdo.x = 200;
    this.cerdo.vel = 0;
    this.lobo.x = 50;
  }else if (this.estado == 1 && millis() > this.espera) {
      this.cerdo.keyPressed();
  }else if (ag.estado == 3) {
    this.estado = 0;
  }
  }  
 }
