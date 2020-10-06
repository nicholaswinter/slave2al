//RiTa library
var lines;
var count;

// speech variables 
var speechRec = new p5.SpeechRec();
speechRec.continuous = true;
speechRec.interimResults = true;
speechRec.onResult = showResult;

// functions
let angle = 0; 
let x = 400; 
let y = 400; 
var textInput;
var part; 
var F1, F2; 
var textEntry, RiTa; 
var textDisplay = []; 
var box, button1, button2, button3; 
var resultValue, resultWord, result; 

function preload(){
  F1=loadFont('data/CormorantGaramond-Bold.ttf'); 
  F2=loadFont('data/Fahkwang-ExtraLight.ttf'); 
}

function setup(){
  mode = 0; 
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill (255);
  textSize(90);
  textFont(F1);
  text("hey, how are you?", 70, 130);
  button1=createButton('talk it out');
  button1.size(200);
  button1.position(width/2-100, height-(2*(height/3)))
  button1.mousePressed(shout);
  
//  var params = {
//    ignoreStopWords: true, 
//    ignoreCase: true, 
//    ignorePunctuation: true
//  };
//  counts = RiTa.concordance(lines.join(""), params); 
  
//  // set drawing parameters
//  background(50);
//  textAlign(CENTER,CENTER); 
//  textSize(24); 
//  noStroke(); 
//  fill(255); 
//  noLoop(); 
//}
  
  button2=createButton('write it down?');
  button2.size(200);
  button2.position(width/2-100, height-(height/3));
  button2.mousePressed(type);
}

function shout() {
mode = 1;
button1.hide();
button2.hide();
    clear();
    background(0);
    textSize(72);
    textFont(F2); 
    speechRec.start();
}

function type() {
mode = 2;
button1.hide();
button2.hide();
    clear(); 
    background(0); 
    
    box = createInput("thoughts?"); 
    box.size(300, 30); 
    box.position(width/2-150, height/2);
    
    button3=createButton('generate a collage'); 
    button3.size(100);
    button3.position(width/2-50, height-(height/3)); 
    button3.mousePressed(thoughtData);

}

function mad() {
 
}

function showResult(){
  if (speechRec.resultValue === true) {
    clear();
    background(0);
    
    if (match(speechRec.resultString, "hello")){
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    
    text(speechRec.resultString, 70, 140, width-100);
  }
}

function thoughtData(){
 mode = 3; 
 box.hide(); 
 button3.hide(); 
 const data = box.value(); 
 
 var params = {
   ignoreStopWords: true, 
   ignoreCase: true, 
   ignorePunctuation: true
 };
 counts = RiTa.concordance(box.value(""), params); 
 
 //set drawing parameters
 background(50); 
 textAlign(CENTER, CENTER); 
 textSize(24); 
 noStroke(); 
 fill(255); 
 noLoop(); 
}

function draw(){
 for (var k in count){
  if (counts.hasOwnProperty(k)){
   fill(random(255));
   textSize(counts[k]);
   text(k, random(width), random(height)); 
  }
 }
}


//cosmetics
//function draw(){
// background(0);
// fill (255);
// textSize(100);
// textFont(F1);
// text("hey, how r u...", 70, 140);
// translate(mouseX, mouseY); 
// rotate(angle); 
// fill(255,0,0); 
// rect(0,0,10,10); 
// angle = angle +10; 
//}
