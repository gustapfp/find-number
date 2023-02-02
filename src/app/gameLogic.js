function checkNanGuess(guess) {
    const num =+ guess
    if (Number.isNaN(num) && guess != "Mary") {
        displayMessageUser("Invalid input, your guess is not a number.");
    };
}

function checkGuessRange(guess) {
    if (guess > max_value || guess < min_value) {
        // User guessed a number lower than the secret number
       displayMessageUser(`Your guees is out of range, try a number between ${min_value} and ${max_value}`);
    } 
}

function checkGirlFriendName(guees) {
    if (guees == "Mary") {
        displayMessageUser("You're the most beautiful person in the world, love you!");
    }
}
function checkRightGuess (guees) {

}

function validation(guees) {
    displayUserSpeech(guees);
    checkGuessRange(guees);
    checkNanGuess(guees);
    checkGirlFriendName(guees);
    checkRightGuess(guees)
}
// function checkHigherLowerGuess(guess) {
//     if (userGuess < secretNumber) {
//         // User guessed a number lower than the secret number
//         msg = "The secret number is higher"
//     } else if (userGuess > secretNumber) {
//         msg = "The secret number is lower"
//     }
// }



// if (userGuess.isNull()) {
//     msg = "Guess a number..."
// } else if (userGuess == "Mary" || userGuess == "Maria") {
//     msg = "Te amo mulher mais linda do mundo! <3"
// } else if (userGuess > secretNumber) {
//     // User guessed a number higher than the secret number
//     msg = "The secret number is lower"
// } else 