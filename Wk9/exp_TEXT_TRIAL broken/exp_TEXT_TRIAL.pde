String s = "to be or not to be.";
String[] words; 
int index = 0; 
void setup() { 
  PFont f = createFont("PingFangSC-Light", 64);
  size(600,400); 
  background(0); 
  String[] lines = loadStrings("sad.rtf"); 
  String entiretxt = join(lines, ""); 
  words = splitTokens(entiretxt ,",.?!:"); 
  
} 

void draw(){ 
 background(0); 
 fill(255); 
 textSize(20); 
 
 textAlign(CENTER); 
 text(words[index], width/2, height/2); 
 index++; 
 }
