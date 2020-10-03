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
var box, button; 
var resultValue, resultWord, result; 

function preload(){
  F1=loadFont('CormorantGaramond-Bold.ttf'); 
  F2=loadFont('data/Fahkwang-ExtraLight.ttf'); 
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill (255);
  textSize(30);
  textFont("PingFangSC-Light");
  text("r u angry. press enter", 50, 50, width-100);
}

function keyPressed() {
  if (keyCode === ENTER) {
    clear();
    background(0);
    textSize(72);
    speechRec.start();
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
