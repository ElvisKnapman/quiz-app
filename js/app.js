'use strict';

const submitButton = document.getElementById('submit');
// const previousButton = document.getElementById('previous-question');
const questionDiv = document.getElementById('show-question');
const questionNumDiv = document.getElementById('question-number');
const optionsDiv = document.getElementById('options');
const resultDiv = document.getElementById('results');


submitButton.addEventListener('click', event => {
    let choice = document.querySelector('input[name ="choice"]:checked');
    
    // only allows if a choice has been made
    if (choice) {
        choice = choice.value;
        addPlayerChoice(choice); // add player choice to their answers array
        console.log(player.answers);
        player.nextQuestion(); // increment question number to display next question
        quizBundle();
    } else {
        alert('Please make a valid selection');
    }

    // if this is the last question, disable submit button after submitting answer and show results
    if (player.quizDone) {
        submitButton.disabled = true;
        showResults();
    }
});

// previousButton.addEventListener('click', event => {
//     player.previousQuestion();
//     quizBundle();

// });

// run on page load
quizBundle();
