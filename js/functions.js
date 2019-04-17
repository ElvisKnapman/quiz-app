'use strict';

/*
*********************
FUNCTION DEFINITIONS
*********************
*/


// consolidated function with frequently repeated group of functions
function quizBundle() {
    if (!player.quizDone) {
    displayQuestionNumber();
    displayQuestion();
    displayOptions();
    // togglePreviousButton();
    }
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

function addPlayerChoice(choice) {
    // add player answer to their chosen answers array
    player.answers.push(choice);
}

// function togglePreviousButton() {
//     // if question is first in array disable previous question button
//     if (player.questionNum === 0) {
//         previousButton.disabled = true;
//         // otherwise make it functional
//     } else {
//         previousButton.disabled = false;
//     }
// }
