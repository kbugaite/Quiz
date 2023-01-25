// This is the JavaScript file for the quiz question and answers written as an array
const quizQuestions = [
{
    question: "What is your favourite activity?",
    answer1:   "Meeting friends",
    answer2:   "Being in the nature",
    answer3:   "Reading a book",
    answer4:   "Participating in sports",
},
{
    question: "What is your favourite foods?",
    answer1:   "Any food whatsoever",
    answer2:   "Vegan/vegetarian foods",
    answer3:   "Hearty meals with meat/fish",
    answer4:   "Sweets & desserts",
},
{
    question: "How many friends do you have?",
    answer1:   "I have a lot of friends",
    answer2:   "I have a few friends",
    answer3:   "I have a few close friends",
    answer4:   "I go by 'Keep your friends close, but your enemies closer'",
},
{
    question: "What is your favourite drink?",
    answer1:   "Water",
    answer2:   "Tea",
    answer3:   "Coffee",
    answer4:   "Alcohol",
},
{
    question: "What is your favourite season?",
    answer1:   "Spring",
    answer2:   "Summer",
    answer3:   "Autumn",
    answer4:   "Winter",
},
{
    question: "What is your favourite colour?",
    answer1:   "Yellow",
    answer2:   "Green",
    answer3:   "Blue",
    answer4:   "Red",
},
{
    question: "What is your favourite music genres?",
    answer1:   "Pop/Electronic",
    answer2:   "Rock/Hard Rock",
    answer3:   "Alternative/Indie",
    answer4:   "Hip-hop/Rap",
},
{
    question: "What would you do first if you were abandoned on a deserted island?",
    answer1:   "I would find food",
    answer2:   "I would find water",
    answer3:   "I would build a shelter",
    answer4:   "I would construct a raft",
},
];
let currentQuizIndex = 0;
//Here we select the elements from the HTML file and assign them to variables for later use
const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionElements = document.getElementById("question");
const answer1Text = document.getElementById("answer1Text");
const answer2Text = document.getElementById("answer2Text");
const answer3Text = document.getElementById("answer3Text");
const answer4Text = document.getElementById("answer4Text");
const submitButton = document.getElementById("submit");

//These variables show the current question and the score that later gets calculated in the Event listener

loadQuiz()

//This function loads the quiz questions and answers
function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizQuestions[currentQuizIndex]

    questionElements.innerText = currentQuizData.question
    answer1Text.innerText = currentQuizData.answer1
    answer2Text.innerText = currentQuizData.answer2
    answer3Text.innerText = currentQuizData.answer3
    answer4Text.innerText = currentQuizData.answer4
};
//This function makes sure that the answers are not selected when the next question is loaded
function deselectAnswers() {
    answerEl.forEach(answerEl => (answerEl.checked = false));
};

//This function goes through all of the answers and checks if they are selected and gets the selected option
function getSelected() {
    let answer

    answerEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
let score = 0;

submitButton.addEventListener("click", () => {
    const answer = getSelected()
    console.log("It's working")
    if (answer) {
        if (answer == quizQuestions[currentQuizIndex].answer1) {
            return score = score + parseInt(document.getElementById("answer1").getAttribute("value"))
        } else if (answer == quizQuestions[currentQuizIndex].answer2) {
            return score = score + parseInt(document.getElementById("answer2").getAttribute("value"))
        } else if (answer == quizQuestions[currentQuizIndex].answer3) {
            return score = score + parseInt(document.getElementById("answer3").getAttribute("value"))
        } else if (answer == quizQuestions[currentQuizIndex].answer4) {
            return score = score + parseInt(document.getElementById("answer4").getAttribute("value"))
        }
        console.log("Current score is: " + score + " and the type of score is - " + typeof(score))
        currentQuizIndex++
        console.log("Current question is:" + currentQuizIndex++)
        if (currentQuizIndex < quizQuestions.length) {
            loadQuiz()
        } else {
//This IF ELSE statement adds the answer to inner HTML based on the score
        if (score <= 12){ quiz.innerHTML = `<div class="container">
        <div class="row d-flex justify-content-center align-content-center">
        <h2>You scored ${score}. This indicates your spirit animal is:</h2>
        <p> Your soul has a canine companion: a wolf, coyote or a dog.
        <br>
        People describe you as a faithful friend, loyal and even protective.
        You know how to enjoy life's simple pleasures. But most importantly, you love with all of your heart.
        The unconditional love you offer friends and family stays with them their entire lives. You’re also incredibly reliable and devoted. 
        <br>When you commit to a project or person, you do everything you can to apply yourself.
        Dog spirit animal energy is about embracing life to the fullest with a sense of love and friendship.
        </div>
        <div class="row d-flex justify-content-center align-content-center">
        <button class="btn col-3 btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
        </div>
        </div>` }
        else if (score >13 && score < 18){ quiz.innerHTML = `<div class="col">
        <h2>You scored ${score}. This indicates your spirit animal is:</h2>
        <p> Your soul has an avian companion: an eagle, flamingo or a crow.
        <button class="quizProceed btn btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
        </div>` }
        else if (score >19 && score < 24){ quiz.innerHTML = `<div class="col">
        <h2>You scored ${score}. This indicates your spirit animal is:</h2>
        <p> Your soul has a feline companion: a lion, tiger or a house cat.
        <button class="quizProceed btn btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
        </div>` }
        else { quiz.innerHTML = `<div class="col">
        <h2>You scored ${score}. This indicates your spirit animal is:</h2>
        <p> Your soul has a ursus companion: a black, polar bear or a panda.
        <button class="quizProceed btn btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
        </div>` }
            /*Text to add: `<div class="col">
            <h2>You scored ${score}. This indicates your spirit animal is:</h2>
            <p>SCORE 0-12: Your soul has a canine companion: a wolf, coyote or a dog.
            <br>
            SCORE 13-18: Your soul has an avian companion: an eagle, flamingo or a crow.
            <br>
            SCORE 19-24: Your soul has a feline companion: a lion, tiger or a house cat.
            <br>
            SCORE 25-32: Your soul has a ursus companion: a black, polar bear or a panda.</p>
            <button class="quizProceed btn btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
            </div>`;*/
        }
    }
});


//Function that hides the main Intro page and starts the quiz


/*function quizStart() {
    document.getElementById("intro").style.display = "none"
    document.getElementById("quiz").style.display = "flex"
    console.log("You have started the quiz. Good luck finding your inner spirit animal!")
    alert("You have started the quiz. Good luck!!!")
} */


/* let x = false;
function hideElement() {
   if(x==false) {
    document.getElementById("intro").style.display = "flex"
    document.getElementById("quiz").style.display = "none"
    return x = false
    console.log(x)
} else {
    document.getElementById("intro").style.display = "none"
    document.getElementById("quiz").style.display = "flex"
    return x = true
    console.log(x)
}}*/
