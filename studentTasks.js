// Variables that store yes and no buttons 
let yesButton;
let noButton;
let shakeAmount = 0;

// Random popup events that the student must answer yes or no to
// Stores all possible popup events. Each has a title and a message.
let randomPopUps = [
{title: 'Friend Invitation', message: 'Do you want to hang out tonight?'},
{title: 'Incoming Videocall', message: 'Your friend wants to FaceTime!'},
{title: 'Party Invitation', message: 'Come join our party at 8 PM!'},
{title: 'Deadline', message: 'Assignment deadline approaching! You need to lock in.'}
]

// An empty array 
let popUpOrder = [];

// Kepps track of which popup is currently being shown
// Starts at 0 for the first item in the array. 
let currentPopUpIndex = 0; 

// Moves from the current popup to the next one.
function nextPopUp() {
  currentPopUpIndex++;
  
  // checks if there are still popups left
  if (currentPopUpIndex < popUpOrder.length) {
    yesButton.show();
    noButton.show();
  } else {
    //hides the yes/no buttons when all popups have been answered
    yesButton.hide();
    noButton.hide();
  }
}


// Creates the yes and no buttons.
// When pressed, either increase or decrease the stress level of the student
function createInvitation() {
  yesButton = createButton('YES');
  yesButton.position(325, 170);
  yesButton.mousePressed(acceptInvitation);

  noButton = createButton('NO');
  noButton.position(420, 170);
  noButton.mousePressed(declineInvitation);
}

// When accepting the invitation, the stress increase by 15
function acceptInvitation() {
  stressMeter = stressMeter + 15;
  stressMeter = constrain(stressMeter, -100, 100);
  
  // Moves to the next popup
  nextPopUp();
}

// When declining the invitation, the stress decrease by 10
function declineInvitation() {
  stressMeter = stressMeter - 10;
  stressMeter = constrain(stressMeter, -100, 100);
  
  nextPopUp();
}

// Increase stress by 5 with a constraint on -100 to 100 
function increaseStress() {
  stressMeter = stressMeter + 5; 
  stressMeter = constrain(stressMeter, -100, 100);
}

// Displays the current popup on the screen
function popUpInvitations(){
  if (currentPopUpIndex < popUpOrder.length) {
  
    // Gets the popup that should currently be displayed
  let currentPopUp = popUpOrder[currentPopUpIndex];
    
  // Draw the invitation pop-up box.
  fill(240);
  rect(200, 60, 400, 150, 20);
  
  // Display the invitation message and title
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(currentPopUp.title, 400, 100);
  
  textSize(16);
  text(currentPopUp.message, 400, 140);
 }
}

// a Test with left and right arrow to increase or decrease stress
function keyPressed() {
 if (keyCode == 37) {
   stressMeter = stressMeter - 10;
   stressMeter = constrain(stressMeter, -100, 100);
 } else if (keyCode === 39) {
   stressMeter = stressMeter + 10;
   stressMeter = constrain(stressMeter, -100, 100);
 }
}

// Move the YES and NO buttons according to the phone's tilt
function moveStudentButtons(tiltX, tiltY) {
  let moveX = map(tiltX, -1, 1, -250, 250);
  let moveY = map(tiltY, -1, 1, -180, 180);
  
  // Check that both buttons exist before moving them
  if (yesButton && noButton) {
  yesButton.position(325 + moveX, 170 + moveY);
  noButton.position(420 + moveX, 170 + moveY);
  }  
}

// Receive the shake intensity from the phone
function shakeStudentScreen(shake) {
  if (shake > 15) {
    shakeAmount = (shake - 15) * 0.15;
  }
}
