var lang = navigator.language || 'en-US'; 
var speechRec = new p5.SpeechRec(lang, gotSpeech); 
var continuous = true; 
var interim = true; 
var myText = "hello my name is nick and I'm just here to hang out for a little bit"; 

var words; 

function setup() {
 createCanvas (windowWidth, windowHeight);
 background (0); 
 textSize (32); 
 textFont ('Times'); 
 words=myText.split(' '); 
 speechRec.onResult = showResult;
 speechRec.start(continuous, interim);
}


function draw() {
 background (0); 
 fill(255); 
 for (i=0; i<words.length; i++){ 
   if (frameCount>10*i){ 
     text(words[i], i*int(random(0,10)), i*30, mouseX, mouseY); 
   }
  }
}

function showResult(){
 if (speechRec.resultValue === true) {
   background(0);
   textSize(72);
   fill(255);
   text(speechRec.resultString, 50, height/2);
}
}

function gotSpeech(){
    if(speechRec.resultValue){       
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (255);
  }
