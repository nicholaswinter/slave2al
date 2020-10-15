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
var F1, F2, F3, F4; 
var textEntry, RiTa; 
var textDisplay = []; 
var box, button1, button2, button3; 
var resultValue, resultWord, result; 
var slider; 
var boxdata = [];
var selectedfont;
var imageCount = 0;
//colours
var color1; 
var color2; 
function preload() {
  //F1=loadFont('data/CormorantGaramond-Bold.ttf'); 
  //F1=loadFont('data/Campfire.ttf'); 
  //F1=loadFont('data/ã…ç◊çsèë.ttf'); 
  F1=loadFont('data/Migra-Extralight.otf');
  //F2=loadFont('data/Fahkwang-ExtraLight.ttf'); 
  F2=loadFont('data/Campfire.ttf'); 
  //F3=loadFont('data/Osgard Pro.otf');
  //F3=loadFont('NeueMachina-Black.otf'); 
  //F3=loadFont('data/TurismoCF-Light.otf'); 
  F3=loadFont('data/HelveticaNeueLTCom-BdOu.ttf'); 
  F4=loadFont('data/Gatwick-Ultralight.otf'); 
  //F2 = loadFont('data/Fuji-Light.otf');
}
function setup() {
  mode = 0; 
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill (255);
  textSize(90);
  textFont(F1);
  text("random(tool)", 100, 170);
  text("Press ESC to return to homepage", color1);
  button1=createButton('collage chat');
  button1.style('background-color', color2); 
  button1.style('line-color', color2); 
  button1.size(100);
  button1.position(width/2-50, height-(2*(height/3)));
  button1.mousePressed(shout);
  button2=createButton('collage make');
  button2.style('background-color', color2); 
  button2.style('line-color', color2); 
  button2.size(100);
  button2.position(width/2-50, height-(height/3));
  button2.mousePressed(type);
  selectedfont = F1;
}

function shout() {
  mode = 1;
  button1.hide();
  button2.hide();
  clear();
  background(random(255));
  textSize(72);
  textFont(F2); 
  speechRec.start();
}
function showResult() {
  if (speechRec.resultValue === true) {
    clear();
    background(0);
    if (match(speechRec.resultString, "hello")) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    text(speechRec.resultString, 70, 140, width-100);
  }
}
function type() {
  mode = 2;
  button1.hide();
  button2.hide();
  clear(); 
  background(0); 
  box = createInput(""); 
  box.attribute("placeholder", "gimme some text"); 
  box.size(300, 60); 
  box.position(width/2-150, height/2);
  button3=createButton('generate a collage'); 
  button3.style('background-color', color2); 
  button3.size(100);
  button3.position(width/2-50, height-(height/3)); 
  button3.mousePressed(thoughtData);
}
function getText() {
  boxdata = box.value();
}
function thoughtData() {
  mode = 3; 
  box.hide(); 
  button3.hide();
  /*//slider for text 
  slider = createSlider(10, 100, 86); 
  slider.style('background-color', color2); 
  slider.position (width/2-100, height-(height/3));*/
  // font buttons
  font1button=createButton('font 1'); 
  font1button.size(100);
  font1button.position(width/2-230, height-80);
  font1button.mousePressed(font1);
  font2button=createButton('font 2');
  font2button.size(100);
  font2button.position(width/2-110, height-80);
  font2button.mousePressed(font2);
  font3button=createButton('font 3'); 
  font3button.size(100);
  font3button.position(width/2+10, height-80);
  font3button.mousePressed(font3);
  font4button=createButton('font 4'); 
  font4button.size(100);
  font4button.position(width/2+130, height-80);
  font4button.mousePressed(font4);
  if (boxdata.length == 0) {
    getText();
  }
  var params = {
  ignoreStopWords: 
  true, 
  ignoreCase: 
  true, 
  ignorePunctuation: 
  true
  };
  counts = RiTa.concordance(boxdata, params); 
  background(random(255), random(255),random(255)); 
  textAlign(CENTER, CENTER);
  color1 = color (255); 
  color2 = color (255,0,0); 
  button4=createButton('screenshot'); 
  button4.position (100,80); 
  button4.style('background-color', color2); 
  button4.style('line-color', color2);
  button4.mousePressed(saveImage);
  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      fill(random(255), random(255), random(255));
      textFont(selectedfont); 
      textSize(random(5, 300));
      text(k, random(width), random(height));
      fill(255, 0, 0);
     }
  }
}
function font1() {
  selectedfont = F1;
  thoughtData();
}
function font2() {
  selectedfont = F2;
  thoughtData();
}
function font3() {
  selectedfont = F3;
  thoughtData();
}
function font4() {
  selectedfont = F4;
  thoughtData();
}
function keyPressed(){
 if (keyCode === 27) { 
 box.hide(); 
 button3.hide(); 
 button1.hide();
 button2.hide();
 //textSize(18); 
 //textFont(F2); 
 //fill(255); 
 //text("press \ 'ESC\ 'to restart", windowWidth/2, windowHeight*2); 
 boxdata = [];
  mode = 0; 
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill (255);
  textSize(90);
  textFont(random(F1, F2, F3, F4));
  text("random(tool)", 100, 170);
  button1=createButton('collage chat');
  button1.size(100);
  button1.position(width/2-100, height-(2*(height/3)));
  button1.mousePressed(shout);
  button2=createButton('collage make');
  button2.size(100);
  button2.position(width/2-100, height-(height/3));
  button2.mousePressed(type);
 }
}
function saveImage() {
  saveCanvas('Screenshot-' + imageCount, 'png');
  }
