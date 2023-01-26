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
//This variable hides the quiz when the page loads and ONLY shows it when the "Start Quiz" button is clicked
quiz.style.display = "none"

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
//This variable sets the score to 0
let score = 0;

//AN EVENT LISTENER THAT TAKES THE USER TO ANOTHER QUESTION AND SHOWS THE RESULT
submitButton.addEventListener("click", () => {

    const answer = getSelected()

    const usersAnswer = document.getElementById(answer)
//SCORE TRACKER - This adds the value attribute (in the range 1-4 as an integer number) of the selected answer to the score
    score = score + parseInt(usersAnswer.value)
    console.log("Score:" + score)

    if (answer) {
        currentQuizIndex++
        if (currentQuizIndex < quizQuestions.length) {
            loadQuiz()
        } else {
//This IF ELSE statement adds the answer to inner HTML based on the score
        if (score <= 12){ quiz.innerHTML = `<div class="container">
        <div class="row d-flex justify-content-center align-content-center">
        <h2>You scored ${score}. This indicates that your spirit animal is:</h2>
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
        else if (score >13 && score < 18){ quiz.innerHTML = `<div class="container">
        <div class="row d-flex justify-content-center align-content-center">
        <h2>You scored ${score}. This indicates your spirit animal is:</h2>
        <p> This indicates that your soul has an avian companion: an eagle, flamingo or a crow.
        <br>
        Bird Spirit is the perfect symbol for freedom and perspective, because they fly high into the sky freely and “see” the bigger picture.
        Bird's are not fighters – they lean toward self-survival and adaptation over a fist-to-cuffs any day.
        <br>
        People who's spirit animal is a bird have an affinity for being outdoors and an uncanny way of recognizing when danger is afoot.
        Thanks to fast thinking and reflexes they can get out of harm’s way quickly, often warning others as they flee. 
        </div>
        <div class="row d-flex justify-content-center align-content-center">
        <button class="btn col-3 btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
        </div>
        </div>` }
        else if (score >19 && score < 24){ quiz.innerHTML = `<div class="container">
        <div class="row d-flex">
        <h2 >You scored ${score}. This indicates your spirit animal is:</h2>
        <p> This indicates that your soul has a feline companion: a lion, tiger or a house cat.
        <br>
        The cat symbolizes grace, intelligence, cunning, and independence. It is a fascinating animal that cultures around the world have long revered. They are not content to be controlled or tamed, preferring to live on their own terms.
        <br>
        If your spirit animal is a cat, it means that you are a very independent person. You like to do things your own way and on your own terms.
        You are also probably quite clever and resourceful. Friends describe you as being very self-sufficient.
        <br>
        In addition to that, you love to live your life with a sense of curiosity. You are always exploring and trying new things. Even if it pushes you outside of your comfort zone, you are always up for the challenge.
        You view life as an adventure, and you are always looking for new experiences.
        </div>
        <div class="row d-flex justify-content-center align-content-center">
        <button class="btn col-3 btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
        </div>
        </div>` }
        else { quiz.innerHTML = `<div class="container">
        <div class="row d-flex justify-content-center align-content-center">
        <h2>You scored ${score}. This indicates your spirit animal is:</h2>
        <p> This indicates that your soul has an ursus companion: a black, polar bear or a panda.
        <br>
        When Bear as a Spirit Animal comes to stand beside you, there’s the assurance of renewed power and courage.
        Whatever adversity you face, Bear holds you firm and keeps you grounded until hardships pass. Bear Spirit is restorative and recuperative.
        <br>
        Bear people growl at adversity and come to the rescue of those in their circle in times of need.
        If your spirit animal belongs to the Ursus family, you have natural fortitude, assurance, and aptitude when taking on leadership roles.
        <br>
        However, sometimes it also means that you must also care for the self, often by taking regular retreats to refuel.
        The one caution of which to remain aware is that Bear people have hot tempers. Be careful not to attack without just cause. Discernment is your ally.
        </div>
        <div class="row d-flex justify-content-center align-content-center">
        <button class="btn col-3 btn-dark btn-lg border-light-subtle fs-3" onclick="location.reload()">Reload</button>
        </div>
        </div>` }
        }
    }
});


//Function that hides the main Intro page and starts the quiz

function hideElement() {
    document.getElementById("intro").style.display = "none";
    quiz.style.display = "block";
}