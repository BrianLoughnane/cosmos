$(document).ready(function(){

// =======================================
// Question Class Constructor
// =======================================

function Question(question, op1, op2, op3, op4, op5) {
	this.question = question;
	this.op1 = op1;
	this.op2 = op2;
	this.op3 = op3;
	this.op4 = op4;
	this.op5 = op5;
};


// =======================================
// Array Storing Quiz Questions
// =======================================


var quiz = new Array();

quiz[0] = new Question("What's the tallest mountain in the world?", "Mt. Hood", "Mt. Kilimanjaro", "Mt. Sinai", "Mt. Everest", "Mt. Rushmore")
quiz[1] = new Question("Which number comes first?", "1", "2", "3", "4", "5");
quiz[2] = new Question("This is question number 3?", "1", "2", "3", "4", "5");
quiz[3] = new Question("This is question number 4?", "1", "2", "3", "4", "5");
quiz[4] = new Question("This is question number 5?", "1", "2", "3", "4", "5");

console.log(quiz[0].question);

// ======================================================
// askQuestion - Changes Text in .question Div
// ======================================================

function askQuestion(qIndex) {
	$(".question p").text(quiz[qIndex].question);
	$(".question li:first-child").text(quiz[qIndex].op1);
	$(".question li:nth-child(2)").text(quiz[qIndex].op2);
	$(".question li:nth-child(3)").text(quiz[qIndex].op3);
	$(".question li:nth-child(4)").text(quiz[qIndex].op4);
	$(".question li:nth-child(5)").text(quiz[qIndex].op5);	
}

// ======================================================
// evaluateAnswer - Compares Clicked Line to Correct Line
// ======================================================

function evaluateAnswer(correctAns) {

	correct = $(".question li")[correctAns];

	$(".question li")
	.on("click", function(e) {
		e.stopPropagation();
		e.preventDefault();
		if(this === correct) {
			console.log("correct!");
			

		} else {
			console.log("wrong answer");

		}

	$(".question").fadeOut("slow");
	$(".answer").delay(800).fadeIn("slow");

	});

}

// ======================================================
// nextQuestion - combines askQuestion and evaluateAnswer
// ======================================================

function nextQuestion(qIndex, correctAns) {
	$(".next")
	.on("click", function(e) {
		e.stopPropagation();
		e.preventDefault();	
		$(".answer").fadeOut("slow");
		$(".question").delay(800).fadeIn("slow");
		askQuestion(qIndex);
		evaluateAnswer(correctAns);
	});
}

// ==========================================================
// playGame - a series of calls to execute quiz in sequence
// ==========================================================

function playGame() {
	askQuestion(0);
	evaluateAnswer(3);
	nextQuestion(1, 0);
	// nextQuestion(2, 1);
	// nextQuestion(3, 2);
	// nextQuestion(4, 3);			
}

// =======================================
// Calls to Execute
// =======================================

playGame();

});