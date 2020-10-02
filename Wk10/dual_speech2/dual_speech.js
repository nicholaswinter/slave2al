var lang = navigator.language || '中文';
var speechRec = new p5.SpeechRec(lang, gotSpeech);
var continuous = true;
var interim = true;
var runningText;

function setup(){
  background(0);
  createCanvas(windowWidth, windowHeight);
  speechRec.onResult = showResult;
  speechRec.start(continuous, interim);
  fill (255); 
  text ("我们开始吧-let's get started", 50, height/2); 
}

function draw(){
 //gotSpeech();
 //text(runningText, width/2, height/2);
}
function showResult(){
 if (speechRec.resultValue === true) {
   background(0);
   textFont("PingFangSC-Light"); 
   textSize(72);
   fill(255);
   text(speechRec.resultString, 50, height/2);
   fill(255); 
   var regexp = 'hello';
   var m = match(speechRec.resultString, regexp);  
   if (m>""){fill(255, 0, 0);}
   text(speechRec.resultString, 50, 50, windowWidth-100, windowHeight); 
 }
}

function gotSpeech(){
    if(speechRec.resultValue){    
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (255);
  }
