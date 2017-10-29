var currentQuestion = 0;
var score = 100;
var totalQuestions = 20;

var container = document.getElementById('quizContainer');
var questionNum = document.getElementById('questionNum');
var questionEl = document.getElementById('question');
var image = document.getElementById('memeImage');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex){
	var q = questions[questionIndex];
	questionNum.textContent = "QUESTION " + (questionIndex + 1) + ".";
	questionEl.textContent = q.question;
	image.src = "img/memes/" + q.image;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(answer == 5){
		score += 5;
	} else if(questions[currentQuestion].answer == answer){
		score -= 5;
	} else if(Math.abs(questions[currentQuestion].answer - answer) >= 2){
		score += 5;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == totalQuestions-1){
		nextButton.childNodes[0].textContent = 'FINISH';
	}
	if (currentQuestion == totalQuestions){
		localStorage.setItem("score", score);
		window.location.href = "results.html";
	}
	loadQuestion(currentQuestion);
}