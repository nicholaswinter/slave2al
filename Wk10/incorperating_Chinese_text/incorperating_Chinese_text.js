//var speechRec = new p5.SpeechRec(lang, gotSpeech);
var myText = '面试问题。总体介绍 您出生在哪个国家？您标识 哪个 国家？哪些 文化 背景 激发了 您的 道德？您 认为 自己 是 移 民吗？您的 最初 道德 如何 受到 澳大利亚文化的影响？';
var words, yplay;

function setup() {
createCanvas (windowWidth, windowHeight);
background (0);
textSize (32); 
textFont ('Times');
words=myText.split(' ');
}
//to have this 'appear over time' you can use the ongoing variable 'frameCount'
function draw() {
  background (0,100);
  fill(255);
  for (i=0; i<words.length; i++){
    if (frameCount>10*i){
      if (mouseX<200){
        yplay = int(random(-5,5));}
        else {yplay=1;}
      text(words[i], i*yplay, i*30, width, height); //(x,y, length of x, length of y)
    }
  }
}
