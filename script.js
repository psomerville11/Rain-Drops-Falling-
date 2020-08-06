/* global createCanvas, colorMode, HSB, random, width, height, background, noStroke, fill, ellipse */

let drop1x, drop1y, drop1d, drop1FallSpeed;


function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  // Variables for droplets
  
  drops = [];
  for (let i = 0; i < 100; i++) {
    let drop = new RainDrop();
    drops.push (drop);
  }
}
  
  /*
  drop1 = new RainDrop(8);
  drop2 = new RainDrop(1);
  drop3 = new RainDrop(11);
  drop4 = new RainDrop(15);
  drop5 = new RainDrop(13);
  */
  
  
function draw() {
  background(60, 10, 100);
  //// Code for droplets
  for(let i = 0; i < drops.length; i++){
    drops[i].drip();
    drops[i].show();
  }
}
  /*
  drop1.drip();
  drop1.show();
  drop2.drip();
  drop2.show();
  drop3.drip();
  drop3.show();
  drop4.drip();
  drop4.show();
  drop5.drip();
  drop5.show();

}
 */  

class RainDrop {
  constructor(fallSpeed) {
   this.x = random(width);
   this.y = random(height);
   this.width = 10
   this.height= 15
   this.fallSpeed = 10;
  }
  
 show(){
  noStroke();
  fill(70,70,70)
  ellipse(this.x,this.y, this.width, this.height)
   
  }
  
  
  drip(){
   this.y += this.fallSpeed; 
    if (this.y > height) {
    // ...reset it...
    this.y = 0;
    // ...and move it somewhere random.
    this.x = random(width);
    
  }
  }
  

   
 }
    
  
