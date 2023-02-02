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
    display.innerHTML = `<h1 class="text-xl lg:text-3xl  mb-8 font-normal">You said:</h1>
    <h1 class="p-8 text-2xl lg:text-4xl ring-4 ring-popstar text-center font-light max-w-2xl">${userGuess}</h1>
    `;
}

function displayMessageUser(validationMessage) {
    const message = document.getElementById('user-message');
    message.innerHTML = validationMessage;
}

recognition.addEventListener('end', () => {
    recognition.start();

})