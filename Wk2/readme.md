Wk 2 

Honestly coming upon reflection, I found processing quite difficult to understand in regards to how the coding language reads. 


Processing: 
Cheatsheet
Line: 0,0 STARTING POINT 0,0 ENDING 
Rect: 0,0 WHERE(can insert mouse), 0,0 SIZE 

Notable Artists: 
- Ryoji Ikeda 
- Raven Kwow

Personally, having mentioned mental health this week, in the form of anxiety interests me. Even dreams. Anxious dreams and how can I create a system them that looks to correct these anxieties through music or white noise? Including visuals, colours or patterns to help your 'sleep state'? This would interest me most - Creating atmospheres in which allows a being to enter their sleep without hestiations or distracting thoughts, a program that can detect when those thoughts are triggered, and then counteract them. 

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
      
      
