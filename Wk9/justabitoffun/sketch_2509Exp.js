let pg;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pgleft = createGraphics(width/2, height);
  pgright = createGraphics(width/2, height);
  textSize(70); 
  textAlign(CENTER, CENTER); 
  background(200);
   pgleft.background(0,255,0,100);
}

function draw() {
  fill(0); 
  pgright.background(mouseX,mouseY,0);
  //pgleft.background(0,255,0);
  pgleft.noStroke();
  pgright.fill(255,0,0);
  pgright.ellipse(mouseX-width/2, mouseY, mouseX, mouseY);
  //pgleft.ellipse(mouseX-width/2, mouseY, mouseX, mouseY);
  rect(mouseX-25, mouseY-25, mouseX, mouseY); 
  image(pgleft, 0, 0, width/2, height);
  image(pgright, width/2, 0, width/2, height);
    text('slave2al', 50, 0, width, height/2);
}
