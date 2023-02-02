function checkNanGuess(guess) {
    const num = + guess
    if (Number.isNaN(num) && guess != "Mary") {
        displayMessageUser("Invalid input, your guess is not a number.");
    };
}

function checkGuessRange(guess) {
    if (guess > max_value || guess < min_value) {
        displayMessageUser(`Your guess is out of range, try a number between ${min_value} and ${max_value}`);
        setIcon(`<svg class="block p-2 m-auto  lg:m-0" text-anchor="middle" width="48" height="48" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7303 1.5L15.7647 1.5C16.5455 2.68343 17 4.10114 17 5.625C17 7.14887 16.5455 8.56658 15.7647 9.75L15.6174 9.75C14.8111 9.75 14.0835 10.1958 13.5859 10.8303C12.8127 11.8162 11.8383 12.6366 10.7245 13.2298C10.0023 13.6144 9.37571 14.1857 9.07185 14.9454C8.85924 15.4769 8.75 16.0441 8.75 16.6166V17.25C8.75 17.6642 8.41421 18 8 18C6.75736 18 5.75 16.9926 5.75 15.75C5.75 14.5984 6.00956 13.5074 6.47337 12.5323C6.73896 11.974 6.36638 11.25 5.74809 11.25L2.62227 11.25C1.59564 11.25 0.676699 10.556 0.568009 9.53514C0.523055 9.11291 0.5 8.68415 0.5 8.25C0.500001 5.40238 1.49188 2.78642 3.149 0.728778C3.5366 0.247485 4.13581 -1.62073e-07 4.75377 0L8.76975 1.05326e-06C9.25342 1.18012e-06 9.73393 0.077977 10.1928 0.230926L13.3072 1.26908C13.7661 1.42203 14.2466 1.5 14.7303 1.5Z" fill="#B75D69"/>
        <path d="M20.6685 10.0229C21.2052 8.66107 21.5 7.17746 21.5 5.625C21.5 4.40493 21.3179 3.22738 20.9794 2.11805C20.7201 1.26802 19.8958 0.750004 19.0071 0.750004L18.0993 0.750003C17.6538 0.750003 17.3786 1.24827 17.5758 1.6478C18.1675 2.84708 18.5 4.19722 18.5 5.625C18.5 7.33318 18.0241 8.93021 17.1977 10.2907C16.9527 10.6941 17.226 11.25 17.6979 11.25H18.7506C19.5827 11.25 20.3635 10.797 20.6685 10.0229Z" fill="#B75D69"/>
        </svg>
         `)
    } else {
        checkHigherOrLowGuess(guess)
    }
}

function checkGirlFriendName(guess) {
    if (guess == "Mary") {
        displayMessageUser("You're the most beautiful person in the world, love you!");
        setIcon(`<svg class="block p-2 m-auto  lg:m-0"  text-anchor="middle" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.645 20.9107L11.6384 20.9072L11.6158 20.8949C11.5965 20.8844 11.5689 20.8693 11.5336 20.8496C11.4629 20.8101 11.3612 20.7524 11.233 20.6769C10.9765 20.5261 10.6132 20.3039 10.1785 20.015C9.31074 19.4381 8.15122 18.5901 6.9886 17.5063C4.68781 15.3615 2.25 12.1751 2.25 8.25C2.25 5.32194 4.7136 3 7.6875 3C9.43638 3 11.0023 3.79909 12 5.0516C12.9977 3.79909 14.5636 3 16.3125 3C19.2864 3 21.75 5.32194 21.75 8.25C21.75 12.1751 19.3122 15.3615 17.0114 17.5063C15.8488 18.5901 14.6893 19.4381 13.8215 20.015C13.3868 20.3039 13.0235 20.5261 12.767 20.6769C12.6388 20.7524 12.5371 20.8101 12.4664 20.8496C12.4311 20.8693 12.4035 20.8844 12.3842 20.8949L12.3616 20.9072L12.355 20.9107L12.3523 20.9121C12.1323 21.0289 11.8677 21.0289 11.6477 20.9121L11.645 20.9107Z" fill="#B75D69"/>
        </svg>
        `)

    }
}
function checkRightGuess(guess) {
    if (guess == secret_number) {
        displayMessageUser("You're guess is correct!")
        setIcon(`<svg class="block p-2 m-auto  lg:m-0"  text-anchor="middle" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z" fill="#B75D69"/>
        </svg>
        <button id="play-again" class="bg-popstar rounded-2xl mt-4 py-3 w-full">Play again</button>
         `)
        const tryAgainButton = document.getElementById("play-again")
        tryAgainButton.addEventListener("click", () => {window.location.reload()})
    }
}


function checkHigherOrLowGuess(guess) {
    if (guess > secret_number) {
        displayMessageUser("The secret number is lower. ")
        
        setIcon(`<svg class="block p-2 m-auto  lg:m-0"  text-anchor="middle" width="48" height="48" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM11.4697 16.2803C11.6103 16.421 11.8011 16.5 12 16.5C12.1989 16.5 12.3897 16.421 12.5303 16.2803L15.5303 13.2803C15.8232 12.9874 15.8232 12.5126 15.5303 12.2197C15.2374 11.9268 14.7626 11.9268 14.4697 12.2197L12.75 13.9393L12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25L11.25 13.9393L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L11.4697 16.2803Z"
                fill="#B75D69" />
            </svg>`)
        
    } else if (guess < secret_number) {
        displayMessageUser("The secret number is higher. ")
        
        setIcon(`<svg class="block p-2 m-auto lg:m-0 rotate-180"  text-anchor="middle" width="48" height="48" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.75 6.61522 17.3848 2.25 12 2.25ZM11.4697 16.2803C11.6103 16.421 11.8011 16.5 12 16.5C12.1989 16.5 12.3897 16.421 12.5303 16.2803L15.5303 13.2803C15.8232 12.9874 15.8232 12.5126 15.5303 12.2197C15.2374 11.9268 14.7626 11.9268 14.4697 12.2197L12.75 13.9393L12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25L11.25 13.9393L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L11.4697 16.2803Z"
                fill="#B75D69" />
            </svg>`)
        
    }
}

function setIcon(svg_tag) {
    const svgIcon = document.getElementById("icon");
    svgIcon.innerHTML = svg_tag

}
function validation(guess) {
    displayUserSpeech(guess);
    checkGuessRange(guess);
    checkNanGuess(guess);
    checkGirlFriendName(guess);
    checkRightGuess(guess)

   
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