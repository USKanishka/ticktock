var hr, mn, sc ;






function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(255,255,255);  
  // getting hour, min, sec
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  hrAngle = map(hr%12, 0, 12 , 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0 , 60, 0, 360);

  translate(400,200);
 rotate(-90);


 stroke("blue");
  strokeWeight(5);
 noFill();
 arc(0, 0, 300, 300, 0, hrAngle);
 



 stroke("red");
  strokeWeight(5);
 noFill();
 arc(0, 0, 350, 350, 0, mnAngle);



 stroke(" green");
  strokeWeight(5);
 noFill();
 arc(0, 0, 400, 400, 0, scAngle);
 
 


  push();

  
  rotate(hrAngle);

  stroke("blue");
  strokeWeight(15);
  line(0, 0, 100, 0)
  
  pop();




  push();
  rotate(mnAngle);
  stroke("red");
  strokeWeight(10);
  line(0, 0, 100, 0)
  pop();




  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(5);
  line(0, 0, 100, 0)
  pop();








console.log(hr);









  drawSprites();
}