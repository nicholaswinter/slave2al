let lang = navigator.language || 'en-US'; 
let speechRec = new p5.SpeechRec(lang, gotSpeech); 
let continuous = true; 
let interim = true; 
var runningText; 

function setup() {
  background(0,0,0); 
  createCanvas(windowWidth, windowHeight);  
  speechRec.onResult = showResult; 
  speechRec.start(continuous, interim);  

}
function draw(){
  //gotSpeech(); 
  fill(0,0,0); 
  textFont("ZCOOLQingKeHuangYou-Regular");
  //text(runningText, 0, 0); 
} 
function showResult(){ 
 if (speechRec.resultValue === true) { 
   background(0,0,0); 
   textSize(0); 
   fill(0,0,255);
   text(speechRec.resultString, 50, 50, windowWidth-100, windowHeight); 
 }
}

function gotSpeech(){ 
    if(speechRec.resultValue){ 
      
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (0,0,255); 
    
  } 
