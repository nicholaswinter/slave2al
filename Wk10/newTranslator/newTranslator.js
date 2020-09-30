let pg;
let lang = navigator.language || 'en-US'; 
let speechRec = new p5.SpeechRec(lang, gotSpeech); 
let continuous = true; 
let interim = true; 
var runningText; 

function setup() {
 createCanvas(windowWidth, windowHeight); 
 pgleft = createGraphics(width/2, height);
 pgright = createGraphics(width/2, height); 
}

function draw(){ 
 pgright.background(255); 
 pgleft.noStroke(0);
 image(pgleft, 0, 0, width/2, height);
 image(pgright, width/2, 0, width/2, height);
  }

function showResult(){ 
 if (speechRec.resultValue === true) {  
 background(0,255,0); 
 textSize(72); 
 fill(255); 
 pgright.text(speechRec.resultString, width, height/2); 
 } 
}

function gotSpeech(){ 
    if(speechRec.resultValue){   
      createP(speechRec.resultString);
      runningText=speechRec.resultString;
    }
    fill (255);  
  } 
