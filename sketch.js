let sp = [];

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 20);

  noFill();
  stroke(255, 255, 255, 160);
  strokeWeight(2);

  beginShape();
  for (let i = 0; i < sp.length; i++) {
    curveVertex(sp[i].pos.x, sp[i].pos.y);
  }
  endShape();

  for (const [index, particula] of sp.entries()) {
    particula.update();
    particula.display();
    if (particula.estaMuerta) {
      sp.splice(index, 1);
    }
  }

  let np = new Particula(mouseX, mouseY);
  sp.push(np);
}

function mouseClicked() {
  let np = new Particula(mouseX, mouseY);
  sp.push(np);
}
