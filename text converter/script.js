// Function to convert text to speech
function textToSpeech() {
  const textInput = document.getElementById('text-input').value; // Get the text input

  if (textInput.trim() === "") {
      alert("Please enter some text to convert to speech.");
      return;
  }

  const speechSynthesis = window.speechSynthesis; // Access the speech synthesis API
  const speech = new SpeechSynthesisUtterance(textInput); // Create an utterance (text-to-speech object)

  // Set properties for speech
  speech.lang = 'en-US'; // Set language to English
  speech.rate = 1; // Set speech speed (1 is normal)
  speech.pitch = 1; // Set pitch (1 is normal)

  // Speak the text
  speechSynthesis.speak(speech);
}

// Event listener for the button click
document.getElementById('speak-btn').addEventListener('click', textToSpeech);
