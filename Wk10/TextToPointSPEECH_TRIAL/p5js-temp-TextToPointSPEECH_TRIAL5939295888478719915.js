let neue; 
let fontSize = 300; 
let hiArray; 
let r = 0; 
let firstLetter = []; 
let secondLetter = []; 
let thirdLetter = []; 

let x, y; 

function preload(){ 
  neue = loadFont('data/ZCOOLXiaoWei-Regular.ttf'); 
}

function setup(){
 createCanvas(windowWidth, windowHeight);  
 fill(255,0,0); 
 textFont(neue); 
 textSize(fontSize);  
 frameRate(200); 
 //x = width/2 - 400; 
 //y = height/2 + 50;
 x = width/2 - 660; 
 y = height/2 + 50;
 
 firstLetter = neue.textToPoints('Friend',x,y,fontSize, 
{
  sampleFactor: 0.1
 }); 
  secondLetter = neue.textToPoints('Fiends',x,y,fontSize, 
{
  sampleFactor: 0.0999999999999999999999999999999999999
}); 
    thirdLetter = neue.textToPoints('ENEMIES',x,y,fontSize, 
{
  sampleFactor: 0.3
 }); 
 print(firstLetter.length, secondLetter.length); 
}

function draw() { 
 background(0,0,255); 
 
 beginShape(CLOSE); 
 for(let i=0; i< firstLetter.length; i++){ 
 //vertex(firstLetter[i].x, firstLetter[i].y); 
 
 ellipse(firstLetter[i].x, firstLetter[i].y, 10, 10);
 push();
 translate(firstLetter[i].x, firstLetter[i].y); 
 line(-10,-10,10,10);
 pop();
 
  if (firstLetter[i].x>= secondLetter[i].x){
    firstLetter[i].x--;
  }
    if (firstLetter[i].x<= secondLetter[i].x){
    firstLetter[i].x ++;
  }
      if (firstLetter[i].y>= secondLetter[i].y){
    firstLetter[i].y--;
  }
        if (firstLetter[i].y<= secondLetter[i].y){
    firstLetter[i].y++;
  }
  //  if (secondLetter[i].x>= thirdLetter[i].x){
  //  secondLetter[i].x--;
  //}
  //  if (secondLetter[i].x<= thirdLetter[i].x){
  //  secondLetter[i].x ++;
  //}
  //    if (secondLetter[i].y>= thirdLetter[i].y){
  //  secondLetter[i].y--;
  //}
  //      if (secondLetter[i].y<= thirdLetter[i].y){
  //  secondLetter[i].y++;
  //}
  //vertex(secondLetter[i].x, secondLetter[i].y); 
 }
 endShape(); 
 
 //beginShape(); 
 //for(let i=0; i< secondLetter.length; i++){ 
 //}
 //endShape(); 
}

function mousePressed(){ 
  background(255,0,0); 
} 
