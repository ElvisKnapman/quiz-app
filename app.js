'use strict';

const nextButton = document.getElementById('next-question');
const previousButton = document.getElementById('previous-question');
const questionDiv = document.getElementById('show-question');
const questionNumDiv = document.getElementById('question-number');
const divOptions = document.getElementById('options');


nextButton.addEventListener('click', event => {
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
});

previousButton.addEventListener('click', event => {
    player.previousQuestion();
    quizBundle();

    // make next button clickable again if it was disabled
    nextButton.disabled = false;

});

quizBundle();




/*
*********************
FUNCTION DEFINITIONS
*********************
*/



// consolidated function with frequently repeated group of functions
function quizBundle() {
    displayQuestionNumber();
    displayQuestion();
    displayOptions();
    toggleButtons();
}


//displays question with answer options
function displayQuestion() {
    // remove previous contents
    questionDiv.innerHTML = '';
    questionDiv.innerHTML = quiz[player.questionNum].question;
}

function displayQuestionNumber() {
    questionNumDiv.innerHTML = '';
    questionNumDiv.innerHTML = `Question #${player.questionNum + 1}`;
}

// loop through array and display options for current question
function displayOptions() {
    let output = '';
    // get length of options array
    let length = quiz[player.questionNum].options.length;

    for (let i = 0; i < length; i++) {
        output += `<div class="question-option"><p><input type="radio" name="choice" value="${i}"> ${quiz[player.questionNum].options[i]}`;
    }

    divOptions.innerHTML = output;
}

function toggleButtons() {
    // if question is last in array disable next question button
    if (player.questionNum > quiz.length) {
        nextButton.disabled = true;
        // otherwise make it functional
    } else {
        nextButton.disabled = false;
    }

    // if question is first in array disable previous question button
    if (player.questionNum === 0) {
        previousButton.disabled = true;
        // otherwise make it functional
    } else {
        previousButton.disabled = false;
    }
}

function addPlayerChoice(choice) {
    // add player answer to their chosen answers array
    player.answers.push(choice);
}
