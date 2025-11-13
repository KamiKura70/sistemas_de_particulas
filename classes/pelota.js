class Pelota {
    constructor(){
        this.alpha = 255;
        
        this.diam = random(10, 50);
        this.rad = this.diam / 2;
    
        this.posx = mouseX;
        this.posy = mouseY;

        this.velx = random(-5 , 5);
        this.vely = random(-5 , 5);

        this.nuevoColor = color((255), (255), (255), 200);

        this.formaInterna = random(['cuadro', 'triangulo', 'circulo'])
        this.tamInterno = random(this.rad / 2, this.rad - 2);
        this.colorInterno = color(random(255), random(255), random(255), 220);

    }   
    
    actualizar(){
         if(this.posx > width - this.rad || this.posx < this.rad){
            this.velx *= -1;
        }

        if(this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;

        this.alpha -= 3;
        this.alpha = max(this.alpha, 0);

    }

    vizualizar(){
        fill(red(this.nuevoColor), green(this.nuevoColor), blue(this.nuevoColor), this.alpha);
        stroke(255, this.alpha);
        strokeWeight(4);
        circle( this.posx, this.posy, this.diam);

         noStroke();
        fill(0, this.alpha);
        let t = this.tamInterno;

        switch (this.formaInterna) {
            case 'cuadro':
                rectMode(CENTER);
                rect(this.posx, this.posy, t, t);
                break;
            case 'triangulo':
                triangle(
                    this.posx, this.posy - t/2,
                    this.posx - t/2, this.posy + t/2,
                    this.posx + t/2, this.posy + t/2
                );
                break;
            case 'circulo':
                ellipse(this.posx, this.posy, t);
                break;
        }

    }
}