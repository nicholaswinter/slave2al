Wk 2 

Honestly coming upon reflection, I found processing quite difficult to navigate. 


Processing: 
Cheatsheet
Line: 0,0 STARTING POINT 0,0 ENDING 
Rect: 0,0 WHERE(can insert mouse), 0,0 SIZE 

Example artists
- Piet Mondrian
- Sol Lewitt 
- Yoko Ono
- Manfred Mohr 
- Roman Verosko
- Harold Cohen Aaron 
- Samuel C Monier 
- Jean Pierre Herbert 



       //REVISION
 
      void setup(){
      size (500,500); 
      background (0); 
      } 

      void draw(){
      if (mousePressed){
      fill(255); 
      noStroke(); 
      stroke(255); 
      line (mouseX,mouseY,250,250); 
      stroke (0); 
      fill(255,0,0); 
      }
      if (mousePressed)
      rect(mouseX,mouseY,25,10); 
      fill(255); 
      noStroke(); 
      }
      
      //
      void setup() {
      size (500, 500);
      fill (100,30,60, 50);
      background (255,255,255);
      stroke (0);
      }
		
      void draw (){
      if (mousePressed) {
      fill (255);
      noStroke();
      ellipse (mouseX, mouseY,100, 100);
      }
		  else {
		  fill (mouseX/2, 0, mouseY/2, 30);
		  stroke (0);
		  ellipse (mouseX, mouseY,100, 100);
		  }
		 }
		void keyPressed() {
		  background(mouseX/2, 255-(mouseX/2), mouseY/2);
		}
      
      
