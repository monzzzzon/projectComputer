// HANDLE WHEN A MESSAGE ARRIVES

client.on("message", modtager);

function modtager(topic, modtagetBesked) {

  let modtagerBuffer = JSON.parse(modtagetBesked);

  let afsender = modtagerBuffer.from;
  // Only receive information from the friend's phone
  if (afsender == "friendPhone") {

    // Read the phone's horizontal and vertical tilt values
    let tiltX = modtagerBuffer.val;
    let tiltY = modtagerBuffer.val2;
    
    // Read the shake value, if the message contains one
    let shake = modtagerBuffer.shake; 

    // Move the YES and NO buttons according to the phone's tilt
    moveStudentButtons(tiltX, tiltY);

    // If a shake value exists, send it to the screen-shake function
    if (shake !== undefined) {
      shakeStudentScreen(shake);
      
    }
  }
}
