let tiltX = 0;
let tiltY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(increaseStress, 10000); // Increase stress level every 10 seconds
  
  popUpOrder = shuffle(randomPopUps); // randomise the order of popups
  createInvitation(); 
  
  
}

function draw() {
  // Chooses a random horizontal and vertical shake
  let shakeX = random(-shakeAmount, shakeAmount);
  let shakeY = random(-shakeAmount, shakeAmount);
  
  push();
  translate(shakeX, shakeY); // Move everything drawn on the canvas by the shake values
   
  // Draw the stress meter and popup invitations
  stressBar();
  popUpInvitations();
  
  pop();
    
  // Gradually reduce the shake intensity
  shakeAmount *= 0.8; 
}
