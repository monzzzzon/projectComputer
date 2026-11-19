// Keeps track of the current stress level of the student.
let stressMeter = 0;

// The dimensions of the stress bar
let barWidth = 400; 
let barHeight = 30;

function stressBar() {  
//The background becomes more red as stress increases 
  let darkRed = map(stressMeter, 0, 100, 20, 180);
  let darkGreen = map(stressMeter, 0, 100, 35, 10);
  let darkBlue = map(stressMeter, 0, 100, 80, 10);
  
// The background becomes lighter blue as stress decreases
  let lightRed = map(stressMeter, -100, 0, 100, 20);
  let lightGreen = map(stressMeter, -100, 0, 180, 35);
  let lightBlue = map(stressMeter, -100, 0, 200, 80);

// The background color depending on the current stress level 
if (stressMeter < 0) {
  background(lightRed, lightGreen, lightBlue);  
} else {
  background(darkRed, darkGreen, darkBlue);
}

  fill(255);
  textAlign(CENTER);
  text('Amount of stress: ', width/2, height/2-60);
  
//The stressbar
  rect(width/2 - 200, height /2, barWidth, barHeight, 20);

// Calculates how wide the colored part of the bar should be 
  let meterWidth = map(abs(stressMeter), 0, 100, 0, barWidth/2);

// Variables for RGB color values of the stress bar
  let redCol;
  let greenCol;
  let blueCol;
  
  
// If stress is negative, the bar changes toward a blue color
// If stress is positive, the bar changes toward a red color
  if (stressMeter <= 0) {
    redCol = 0;
    greenCol = map(stressMeter, -100, 0, 0, 255);
    blueCol = map(stressMeter, -100, 0, 255, 0);
  } else {
    redCol = map(stressMeter, 0, 100, 0, 255);
    greenCol = map(stressMeter, 0, 100, 255, 0);
    blueCol = 0;
  }

//Apply the calculated RGB color to the stress bar
  fill(redCol, greenCol, blueCol);
  
//Draw the colored part of the stress bar.
    if (stressMeter < 0) {
    rect(width/2 - meterWidth, height/2, meterWidth, barHeight, 20);
  } else {
    rect(width/2, height/2, meterWidth, barHeight, 20);
  } 
  
  fill(0);
  textSize(16);
  text(stressMeter + '%',  width/2, height/2 + 20);
  
// Display a specific message depending on the stress level
// The text size increases as the stress level becomes higher
  fill(255);
  if (stressMeter < -80) {
    textSize(16);
    text('You feel peaceful.', width/2, height/2 + 80);
    } else if (stressMeter < -50) {
    textSize(16);
    text('You feel very calm.', width/2, height/2 + 80);
    } else if (stressMeter < -20) {
    textSize(16);
    text('You feel calm.', width/2, height/2 + 80);
    } else if (stressMeter <= 20) {
    textSize(16);  
    text('You feel neutral', width/2, height/2 + 80);
    } else if (stressMeter <= 50) {
    textSize(22);  
    text('You are beginning to feel a little stressed!', width/2, height/2 + 80);
    } else if (stressMeter <= 70) {
    textSize(30);  
    text('Slow down. You are too overwhelmed!', width/2, height/2 + 80);
    } else { 
    textSize(44);  
    text('STOP. Take a break!', width/2, height/2 + 80);
    }
}
