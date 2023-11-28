class Boton{
  constructor(x, y, etiqueta, ir) {
    this.x = x;
    this.y = y;
    this.etiqueta = etiqueta;
    this.ancho = 80;
    this.alto = 40;
    this.pantalla_ir = ir;
  }

  mostrar() {
    fill(100);
    rect(this.x, this.y, this.ancho, this.alto);
    fill(255);
    textSize(10);
    textAlign(CENTER, CENTER);
    text(this.etiqueta, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

  clickEnBoton() {
    return mouseX > this.x && mouseX < this.x + this.ancho && mouseY > this.y && mouseY < this.y + this.alto;
  }
}
