PFont helv; 
float spin=0; 
void setup() {
  size (500,500);
  background (255);
  fill(0); 
  smooth(4); 
  //helv=createFont("Helvetica",32,true); 
  helv=loadFont("Helvetica-48.vlw");
  textFont(helv); 
  textAlign(CENTER,CENTER); 
  frameRate(50); 
}
void draw(){
  fill(0); 
  translate(width/2,height/2); 
  spin+=.1;
  rotate(spin); 
  textFont(helv);
  textSize(48); 
  text("Slave2Al",0,0); 
  fill(255,20);
  //noStroke(); 
  translate(-width/2,-height/2); 
  rect(0,0,width,height); 
  //rotate(90); 
}
void keyPressed(){
  background(255);
}
