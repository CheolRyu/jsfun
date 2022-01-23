const quizData = [{
        question: "When did America was Found?",
        a: "1768",
        b: "1675",
        c: "1645",
        d: "1776",
        correct: "d",
    },
    {
        question: "What is the best programming language?",
        a: "Django",
        b: "React",
        c: "Ruby On Rails",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who found America?",
        a: "Jonny Debs",
        b: "Tom Hanks",
        c: "Jimmy Falon",
        d: "None of above",
        correct: "d",
    },
    {
        question: "Who is the best actor?",
        a: "Tom Hanks",
        b: "Kim Collins",
        c: "Maddy Collins",
        d: "Charles Ryu",
        correct: "c",
    },
    {
        question: "Why you gay?",
        a: "who says I'm Gay?",
        b: "You are Gay",
        c: "I'm Not GAY.",
        d: "Yes, You. Are.",
        correct: "d",
    },
    {
        question: "Who Is US president?",
        a: "Joe",
        b: "Donald",
        c: "Charles",
        d: "Maddy",
        correct: "c",
    },
];
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswers() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (answer) {
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2> 
                <button onclick="location.reload()">Play again</button>`;
            }
        }
    }
});