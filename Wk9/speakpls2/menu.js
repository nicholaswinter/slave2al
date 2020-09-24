var mode; // determines whether recording has started
function setup() { 
  mode = 0; 
  createCanvas(windowWidth, windowHeight); 
  textSize(21); 
} 

function draw() { 
  clear(); 
  if (mode==0){ 
    textSize(70);
    text('Press enter to start', windowWidth/2, windowHeight/2); 
   }
} 

function keyPressed() { 
  if (keyCode===ENTER) { 
  
  } 
} 
