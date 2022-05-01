function setup () {
    createCanvas(1000, 1000);
    background(22, 1, 128);
    angleMode(DEGREES);
    }

let value = 0;
function draw() {
    noFill();
    stroke(value);
    strokeWeight(80);
    /*bezier(0, 0, 100, 2000, 300, 30, 350, 80, 550, 100, 800, 900);*/
    bezier(10, 1000, 100, -600, 800, 600, 1000, -100);

    noFill();
    stroke(value);
    strokeWeight(40);
    bezier(1000, 1000, 900, -600, 200, 600, 0, -100);
    }

  function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  }

function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-13", "png");
    }
}