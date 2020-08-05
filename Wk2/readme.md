//STAR

    class star {
    float x; 
    float y; 
    float z; 
  
    float pz;
    star() {
    x = random(-width,width);
    y = random(-height,height); 
    z = random(width); 
    pz = z;
    }
  
    void update() {  
    z = z - speed; 
    if (z < 1) { 
      z = width; 
      x = random(-width, width);
      y = random(-height, height); 
      pz = z;
     }
    }
    void show() { 
    fill(255); 
    noStroke(); 
    
    float sx = map(x / z,0,1,0,width); 
    float sy = map(y / z,0,1,0,height); 
    
    float r = map(z, 0, width, 16, 0);
    ellipse(sx,sy,r,r); 
    
    float px = map(x / pz,0,1,0,width); 
    float py = map(y / pz,0,1,0,width); 
    
    stroke(255);
    line(px, py, x, x);

     }
    }
    
    //FIELD 
    star [] star = new star [800]; 
    float speed; 
    void setup() {
    size(800, 800); 
    for (int i = 0; i < star.length; i++)
    star[i] = new star(); 
    }


    void draw() {
    speed = map (mouseX, 0, width, 0, 40); 
    background(0); 
    translate(width/2, height/2);
    for (int i = 0; i < star.length; i++) {
    star[i].update();  
    star[i].show();
     }
    }


