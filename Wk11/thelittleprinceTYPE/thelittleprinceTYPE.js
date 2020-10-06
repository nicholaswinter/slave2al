var lines;
var counts;

function preload() {
  lines = loadStrings('data/thelittleprince.txt');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  var params = {
    ignoreStopWords: true,
    ignoreCase: true,
    ignorePunctuation: true
  };
  counts = RiTa.concordance(lines.join("data/thelittleprince.txt"),
    params); 

  // set drawing parameters
  background(50);
  textAlign(CENTER, CENTER);
  textSize(24,1000);
  noStroke();
  fill(255);
  noLoop();
}
function draw() {
  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      fill(random(255));
      textSize(counts[k]);
      text(k, random(width), random(height));
    }
  }
}
