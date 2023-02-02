window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US'
recognition.start()


recognition.addEventListener("result", onSpeak)

function onSpeak(event) {
    let userGuess = event.results[0][0].transcript;
    validation(userGuess);
    
}

function displayUserSpeech(userGuess){
    const display= document.getElementById("user-speech");
    display.innerHTML = userGuess;
}

function displayMessageUser(validationMessage) {
    const message = document.getElementById('user-message');
    message.innerHTML = validationMessage;
}
