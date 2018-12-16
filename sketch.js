console.log("Hello")

var towns = [];
var totalTowns = 15;



var recDist;
var bestDist;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (var i = 0; i < totalTowns; i++) {
		var v = createVector(random(width), random(height));
    towns[i] = v;
    
	}


    var d = calcDistance(towns);
    recDist = d;
    bestDist = towns.slice();
  
  }
  
  function draw() {
    background(0);
    fill(255);
    for (var i = 0; i < towns.length; i++) {
      ellipse(towns[i].x, towns[i].y, 8, 8);
      
    }
  
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    for (var i = 0; i < towns.length; i++) {
      vertex(towns[i].x, towns[i].y);
    }
    endShape();
  
    stroke(255, 13, 41);
    strokeWeight(4);
    noFill();
    beginShape();
    for (var i = 0; i < towns.length; i++) {
      vertex(bestDist[i].x, bestDist[i].y);
    }
    endShape();
  
  
  
    var i = floor(random(towns.length));
    var j = floor(random(towns.length));
    swap(towns, i, j);
  
    var d = calcDistance(towns);
    if (d < recDist) {
      recDist = d;
      bestDist = towns.slice();
    }
  }
  
  function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  
  
  function calcDistance(pts) {
    var sum = 0;
    for (var i = 0; i < pts.length - 1; i++) {
      var d = dist(pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y);
      sum += d;
    }
    return sum;
  }