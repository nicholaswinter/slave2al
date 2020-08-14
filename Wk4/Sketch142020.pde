//sketch 14th August 2020
PImage photo; 
int smallPoint, largePoint, x, y; 
color pix; 
void setup (){
smallPoint=4; 
largePoint=40; 
size(480,480);
background (255); 
imageMode(CENTER); 
photo = loadImage("IMG_2801.jpg"); 
smallPoint=1; 
largePoint=100; 
}

void draw(){
//image (photo,240,240);
x=int (random(photo.width)); 
y=int (random(photo.height)); 
float pointillise =map(mouseX, 0, width, smallPoint, largePoint); 
int dotSize=int(pointillise); 
pix=photo.get(x,y);
int t=int(random(256)); 
strokeWeight(3); 
fill (pix,t); // this updates the colour of the fill () to the pixel values as set before 
noStroke(); // this removes the outline of the circle 
ellipse(x,y,dotSize,dotSize); 
//line(x,y,x+dotSize,y+dotSize); 
}
