class Planet{
  constructor(name, color, diameter, distance, angle, speed){
    this.name = name;
    this.color = color;
    this.diameter = diameter;
    this.menuDiameter = diameter * 5;
    this.distance = distance;
    this.xCenter
    this.yCenter
    this.angle = angle;
    this.speed = speed;

  }
  // define a function that accepts coords, called withinBounds(x, y)
  clicked(){
    let d = dist(mouseX, mouseY, 445, 20);
    if (d < 15.98/2) {
     // image(venusglobe, 100, 140, 150, 150);
     // text(mercurytxt, 260, 170, 343, 120);
     // fill(255,0,0)
     console.log("clicked on planet");
    }
  }
  // define a function changeColor (pass RGB)
  // define a function resetColor (), reset to default color
  show(){
    fill(255);
  }
}

//var = available throughout the function, hoisting allowed
var nums = [40/2, 0.98 -5, 2.4 -5, 2.56 -5, 1.36 -5, 28.6 -20, 24.2 -20, 1.04 -5, 1 -5];
var col = 0;
var txt;
var i = 1;

//const = only available inside the block, reassign the value NOT allowed
const sun = new Planet('sun', 'rgb(255,255,255)', nums[0], 0, 0, 0);
const mercury = new Planet('mercury', 'rgb(255,255,255)', nums[1], 38 -10, 1, 4.783/2);
const venus = new Planet('venus', 'rgb(255,255,255)', nums[2], 72 -10, 1, 3.502/2);
const earth = new Planet('earth', 'rgb(255,255,255)', nums[3], 100 -10, 1, 2.978/2);
const mars = new Planet('mars', 'rgb(255,255,255)', nums[4], 150 -20, 1, 2.408/2);
const jupiter = new Planet('jupiter', 'rgb(255.255.255)', nums[5], 520 - 320, 1, 1.307/2);
const saturn = new Planet('saturn', 'rgb(255,255,255)', nums[6], 950 - 730, 1, 0.969/2);
const uranus = new Planet ('uranus', 'rgb(255,255,255)', nums[7], 1920 - 1660, 1, 0.681/2);
const neptune = new Planet ('neptune', 'rgb(255,255,255)', nums[8], 3000 - 2700, 1, 0.474/2);

//let = only available inside the block,
// uncomment planets and assign all planets into an array
let planets = [sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
let planet;
let img;

let hoverOver;
let showInfo = false;

let lights1;
let lights2;
let lights3;
let lights4;
let lights5;
let lights6;
let lights7;
let lights8;




function setup(){
  createCanvas(1600, 800);
  planet = new Planet();
  angleMode(DEGREES);
  // let p = new Planet();
  // planets.push(p);
  // createP(join(txt, '<br/>'));

  textFont(fontRegular);
  text('Font Style Normal', 0, 0);
  textSize(16);

  hoverOver = createElement("h1", "More Info");
  hoverOver.mouseOver(() => showInfo = true);
  hoverOver.mouseOut(() => showInfo = false);

  click = createElement("p1", "M");
  click = createElement("span1", "○");
  click.mouseOver(() => lights1 = true);
  click.mouseOut(() => lights1 = false);

  click = createElement("p2", "V");
  click = createElement("span2", "○");
  click.mouseOver(() => lights2 = true);
  click.mouseOut(() => lights2 = false);

  click = createElement("p3", "E");
  click = createElement("span3", "○");
  click.mouseOver(() => lights3 = true);
  click.mouseOut(() => lights3 = false);

  click = createElement("p4", "M");
  click = createElement("span4", "○");
  click.mouseOver(() => lights4 = true);
  click.mouseOut(() => lights4 = false);

  click = createElement("p5", "J");
  click = createElement("span5", "○");
  click.mouseOver(() => lights5 = true);
  click.mouseOut(() => lights5 = false);

  click = createElement("p6", "S");
  click = createElement("span6", "○");
  click.mouseOver(() => lights6 = true);
  click.mouseOut(() => lights6 = false);

  click = createElement("p7", "U");
  click = createElement("span7", "○");
  click.mouseOver(() => lights7 = true);
  click.mouseOut(() => lights7 = false);

  click = createElement("p8", "N");
  click = createElement("span8", "○");
  click.mouseOver(() => lights8 = true);
  click.mouseOut(() => lights8 = false);

}

function draw(){
  background(0);
  // background(col);
  // col = map(mouseY, 0, windowHeight, 0, 105);
  translate(width/2,height/2);
  planet = new Planet();

  sun_();
  mercury_();
  venus_();
  earth_();
  mars_();
  jupiter_();
  saturn_();
  uranus_();
  neptune_();

  allplanets();
  description();

  createElementInfo();

}

//Hover effect
function mousePressed(){
  // planet.clicked();
  // for(let i =0 ; i < planets.length; i++){
  // if planets[i].withinBounds(mouseX,mouseY) {
  // planets[i].changeColor()
//} else {planet.ResetColor}
  //   }
}

function createElementInfo() {
  if (showInfo) {
    image(mercuryglobe, 100, 20, 150, 150);
    text('Mercury', 145, 20, 150, 150);
    text('△Mercury', 865, 440,100,100);
    text(mercurytxt, 260, 40, 300, 150);
  }
  if (showInfo) {
    image(venusglobe, 100, 220, 150, 150);
    text('Venus', 150, 220, 150, 150);
    text('△Venus', 895, 460,100,100);
    text(venustxt, 260, 240, 300, 150);
  }
  if (showInfo) {
    image(earthglobe, 100, 420, 150, 150);
    text('Earth', 155, 420, 150, 150);
    text('△Earth', 925, 480,100,100);
    text(earthtxt, 260, 440, 300, 150);
  }
  if (showInfo) {
    image(marsglobe, 100, 620, 150, 150);
    text('Mars', 158, 614, 150, 150);
    text('△Mars', 955, 500,100,100);
    text(marstxt, 260, 640, 300, 150);
  }
  if (showInfo) {
    image(jupiterglobe, 1190, 20, 150, 150);
    text('Jupiter', 1240, 30, 150, 150);
    text('△Jupiter', 945, 590,100,100);
    text(jupitertxt, 1350, 40, 300, 150);
  }
  if (showInfo) {
    image(saturnglobe, 1190, 220, 150, 150);
    text('Saturn', 1240, 220, 150, 150);
    text('△Saturn', 965, 610,100,100);
    text(venustxt, 1350, 240, 300, 150);
  }
  if (showInfo) {
    image(uranusglobe, 1190, 420, 150, 150);
    text('Uranus', 1240, 425, 150, 150);
    text('△Uranus', 985, 640,100,100);
    text(venustxt, 1350, 440, 300, 150);
  }
  if (showInfo) {
    image(neptuneglobe, 1190, 620, 150, 150);
    text('Neptune', 1230, 620, 150, 150);
    text('△Neptune', 1005, 670,100,100);
    text(neptunetxt, 1350, 640, 300, 150);
  }
  if (lights1) {
    ellipse(870, 395, 55, 55);
  }

  if (lights2) {
    ellipse(870, 395, 125, 125);
  }
  if (lights3) {
    ellipse(870, 395, 180, 180);
  }

  if (lights4) {
    ellipse(870, 395, 260, 260);
  }
  if (lights5) {
    ellipse(870, 395, 400, 400);
  }

  if (lights6) {
    ellipse(870, 395, 440, 440);
  }
  if (lights7) {
    ellipse(870, 395, 520, 520);
  }

  if (lights8) {
    ellipse(870, 395, 600, 600);
  }
}

function preload(){
  mercuryglobe = loadImage('*img/mercuryglobe.jpeg');
  venusglobe = loadImage('*img/venusglobe.jpeg');
  earthglobe = loadImage('*img/earthglobe.jpeg');
  marsglobe = loadImage('*img/marsglobe.jpeg');
  jupiterglobe = loadImage('*img/jupiterglobe.jpeg');
  saturnglobe = loadImage('*img/saturnglobe.jpeg');
  uranusglobe = loadImage('*img/uranusglobe.jpeg');
  neptuneglobe = loadImage('*img/neptuneglobe.jpeg');

  mercurytxt = loadStrings('*txt/Mercury.txt');
  venustxt = loadStrings('*txt/Venus.txt');
  earthtxt = loadStrings('*txt/Earth.txt');
  marstxt = loadStrings('*txt/Mars.txt');
  jupitertxt = loadStrings('*txt/Jupiter.txt');
  saturntxt = loadStrings('*txt/Saturn.txt');
  uranustxt = loadStrings('*txt/Uranus.txt');
  neptunetxt = loadStrings('*txt/Neptune.txt');

  fontRegular = loadFont('*assets/SourceSansPro-Light.ttf');

}

function sun_(){
  noStroke();
  fill(sun.color);
  ellipse(0, 0, sun.diameter + 10);
}

function mercury_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, mercury.distance + 28);

  rotate(mercury.angle);
  noStroke();
  fill(mercury.color);
  ellipse(mercury.distance, 0, mercury.diameter + 10) ;
  pop(); //restore
  mercury.angle += mercury.speed;
}

function venus_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, venus.distance + 62);

  rotate(venus.angle);
  noStroke();
  fill(venus.color);
  ellipse(venus.distance, 0, venus.diameter + 10) ;
  pop(); //restore
  venus.angle += venus.speed;
}

function earth_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, earth.distance + 92);

  rotate(earth.angle);
  noStroke();
  fill(earth.color);
  ellipse(earth.distance, 0, earth.diameter + 10) ;
  pop(); //restore
  earth.angle += earth.speed;
}

function mars_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, mars.distance + 130);

  rotate(mars.angle);
  noStroke();
  fill(mars.color);
  ellipse(mars.distance, 0, mars.diameter + 10) ;
  pop(); //restore
  mars.angle += mars.speed;
}

function jupiter_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, jupiter.distance + 200);

  rotate(jupiter.angle);
  noStroke();
  fill(jupiter.color);
  ellipse(jupiter.distance, 0, jupiter.diameter + 10) ;
  pop(); //restore
  jupiter.angle += jupiter.speed;
}

function saturn_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, saturn.distance + 220);

  rotate(saturn.angle);
  noStroke();
  fill(saturn.color);
  ellipse(saturn.distance, 0, saturn.diameter + 10) ;
  pop(); //restore
  saturn.angle += saturn.speed;
}

function uranus_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, uranus.distance + 260);

  rotate(uranus.angle);
  noStroke();
  fill(uranus.color);
  ellipse(uranus.distance, 0, uranus.diameter + 10) ;
  pop(); //restore
  uranus.angle += uranus.speed;
}

function neptune_(){
  push();//save
  strokeWeight(0.3);
  stroke('grey');
  noFill();
  circle(0, 0, neptune.distance + 300);

  rotate(neptune.angle);
  noStroke();
  fill(neptune.color);
  ellipse(neptune.distance, 0, neptune.diameter + 10) ;
  pop(); //restore
  neptune.angle += neptune.speed;
}

function allplanets(){
  translate(-170,-350);
  stroke(255);
  noFill();
  // ellipseMode(CENTER);
  for (var i = 1 ; i < 9; i++){
    ellipse(i * 60 - 90, 0, nums[i]*5, nums[i]*5);
  }
  // eg) ellipse(planets[i].xCenter, planets[i].yCenter, planets[i].menuDiameter)
}

function description(){
  translate(-700,-45);
  // image(venusglobe, 100, 140, 150, 150);
  // rect(100, 20, 150, 150);
  // rect(100, 220, 150, 150);
  // rect(100, 420, 150, 150);
  // rect(100, 620, 150, 150);
  // rect(1190, 20, 150, 150);
  // rect(1190, 220, 150, 150);
  // rect(1190, 420, 150, 150);
  // rect(1190, 620, 150, 150);
  // text('Venus', 260, 150, 343, 120);
  // rect(260, 20, 300, 150);
  // rect(260, 220, 300, 150);
  // rect(260, 420, 300, 150);
  // rect(260, 620, 300, 150);
  // rect(1350, 20, 300, 150);
  // rect(1350, 220, 300, 150);
  // rect(1350, 420, 300, 150);
  // rect(1350, 620, 300, 150);
  // text(venustxt, 260, 170, 343, 120);
  // rect(250, 150, 343, 120);
  text('Solar System by Yuri Yasukawa', width/2-30, height-20, 300, 50);
}
