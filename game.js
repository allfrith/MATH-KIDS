const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
	{
		question: "Eritrocitos con espiculas de longitud variable irregularmente distribuidas",
		choice1: "Equinocitos",
		choice2: "Acantocitos",
		choice3: "Esferocitos",
		choice4: "Esquistocitos",
		answer: 2
	},
	{
		question: "Eritrocitos con forma de media luna que se forma en pacientes con hemoglobina S",
		choice1: "Equinocito",
		choice2: "Esferocito",
		choice3: "Drepanocito",
		choice4: "Codocito",
		answer: 3
  },
  
	{
		question: "Inclusiones eritrocitarias redondas que se componen de ADN",
		choice1: "Anillos de cabot",
		choice2: "Cuerpo de Heinz",
		choice3: "Cuerpos de Howell Jolly",
		choice4: "Puenteado basafico",
		answer: 3
	},
	{
		question: "Composicion de los cuerpos Papenhaimer",
		choice1: "ADN",
		choice2: "Hierro",
		choice3: "Hemoglobina desnaturalizada",
		choice4: "ARN",
		answer: 2
	},
	{
		question: "Alteracion de distribucion de los erotrocitos que se observa en eventos inflamatorios por reduccion del potencial Z",
		choice1: "Aglutinacion",
		choice2: "Fenomeno de Rouleaux",
		choice3: "Policromatofilia",
		choice4: "Microcitosis",
		answer: 2
	}
];

//CONSTANTS
const CORRECT_BONUS = 25;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
