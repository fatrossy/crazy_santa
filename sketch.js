var myImg;

function preload() {
  myImg = loadImage("santa claus_1.png");
}


function setup() {
createCanvas(360,640);
frameRate(5)
 //Deal with microphone
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volume = mic.getLevel();
  
  //If the volume is not enought, re-map it (set a higher newMax).
  var newMax = 10;
  volume = map(volume,0,1,0,newMax);
  
  background(255);
  
  var size1 = map(volume, 0,1,1,13)
  //left eyelip
fill('#FECD96')
strokeWeight(6)
rect(85,262-size1, 55, 30);
rect(85,298+size1, 55, 30);

//right eyelip
rect(210,262-size1, 60, 30);
rect(210,298+size1, 60, 30);
image(myImg, 25, 90);

//eye balls move 
fill('black');
var move1 = random(110, 130);
var move2 = random(220, 260)
ellipse(move1,295,3,3);
ellipse(move2,295,3,3);

strokeWeight(0);
fill(200,200,200,200);
var size2 = map(volume,0,1,50,130)
if (volume<0.5){
  ellipse(270,310,size2);
  ellipse(300,350,size2);}
if (volume>= 0.5){
  ellipse(270,300,size2);
  ellipse(300,350,size2);
  ellipse(330,250,size2);
}
}