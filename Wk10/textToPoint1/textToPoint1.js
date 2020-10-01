let neue; 
let fontSize = 100; 
let hiArray; 
let r = 0; 

function preload(){ 
  neue = loadFont('data/ZCOOLXiaoWei-Regular.ttf'); 
}

function setup(){
 createCanvas(windowWidth, windowHeight);  
 background(0,255,0); 
 fill(255,0,0); 
 textFont(neue); 
 textSize(fontSize); 
 hiArray = neue.textToPoints("我们开始吧", 50, height/2, fontSize, {
   sampleFactor: 0.05
   
 });
 
 print(hiArray); 
}


function draw() { 
 //text("hi", width/2, height/2); 
 beginShape(); 
 for (let i = 0; i<hiArray.length; i++){ 
   
   vertex(hiArray[i].x, hiArray[i].y);
 }
 endShape(); 
   //push(); 
   //translate(hiArray[i].x, hiArray[i].y); 
   //ellipse(hiArray[i].x, hiArray[i].y, 5,5); 
   //rotate(r); 
   //r++;
   //strokeWeight(0.5); 
   //line(-5,-5, 5, 5); 
   //pop(); 
}
