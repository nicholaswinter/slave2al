// speech variables 
var speechRec = new p5.SpeechRec();
speechRec.continuous = true;
speechRec.interimResults = true;
speechRec.onResult = showResult;
// functions
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
  textSize(30);
  textFont(F1);
  text("r u mad. press a button", 50, 50, width+100);
  //landing page
  //if (keyCode === ESC){
    textFont(F1); 
    textAlign(CENTER,CENTER); 
    textSize(70); 
    fill(255,0,0); 
    button1=createButton('SHOUT IT OUT');
    button1.position(windowWidth/2+100, windowHeight=windowHeight/3); 
    
    button2=createButton('TYPE IT OUT');
    button2.position(windowWidth/2-100, windowHeight=windowHeight/3);
 }

function keyPressed() {
  if (button1 === true) {
    mode = 1; 
    button1.hide(); 
    button2.hide(); 
    clear();
    background(0);
    textSize(72);
    textFont(F2); 
    speechRec.start();
  }
  if (button2 === true){
    mode = 2; 
    button1.hide(); 
    button2.hide(); 
    clear(); 
    background(0); 
    box = createInput("what're you thinking?"); 
    box.side(300,30); 
    box.position(CENTER, CENTER); 
    button3=createButton('get mad'); 
    button3.size(100.30); 
    button3.position(windowWidth/2-200, windowheight/2-200); 
    button3.mousePressed(textdata);
 }
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
    text(speechRec.resultString, 50, 50, width-100);
  }
}
