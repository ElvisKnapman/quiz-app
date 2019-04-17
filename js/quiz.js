'use strict';

const quiz = [
    {
        question: "Who holds the record for most career points scored in the NHL?",
        options: ["Mario Lemieux", "Wayne Gretzky", "Gordie Howe", "Mark Messier"],
        answer: 1
    },
    {
        question: "What is the most amount of goals scored in a single NHL season?",
        options: [92, 86, 97, 78],
        answer: 0
    },
    {
        question: "What is the most total points (goals + assists) scored in a single NHL season?",
        options: [212, 200, 199, 215],
        answer: 3
    }

];


// player object holding name, current question number, and answers array
const player = {
    name: '',
    questionNum: 0,
    answers: [],
    quizDone: false,

    nextQuestion() {
        // only increase 'questionNum' if current number is below upper boundary
        this.questionNum++;

        if (this.questionNum === quiz.length) {
            this.quizDone = true;
        }
    },

    // previousQuestion() {
    //     // only decrease 'questionNum' if current number is above lower boundary
    //     if (this.questionNum > 0) {
    //     this.questionNum--;
    //     }
    // }
};
