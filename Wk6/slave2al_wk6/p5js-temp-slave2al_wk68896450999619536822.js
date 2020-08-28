var song; 
var analyser; 
function preload(){
 song = loadSound('data/Damscray_-_Dancing_Tiger_02.mp3'); 
 }
function setup() {
 //song = loadSound('data/Damscray_-_Dancing_Tiger_02.mp3'); 
 createCanvas(windowWidth,windowHeight); 
 background(0); 
 fill(255,255,0); 
 //song.loop(); //set analyzer to check amplitude 
 analyzer= new p5.Amplitude(); 
 analyzer.setInput(song); 
 stroke(255); 
}
function draw() {
 background(0,1); 
 var volume=analyzer.getLevel(); // this will extract the volume of the song  k
 volume=(volume*windowWidth)+60; 
 ellipse(windowWidth/2,windowHeight/2,volume,volume); 
 
}
function mousePressed(){
  if (song.isPlaying()){
  song.stop();
  fill(0,0,255); 
  } 
  else {
  fill(255,0,0);
  song.play();
  }
}
