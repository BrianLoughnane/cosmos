$(document).ready(function(){
	// event.stopPropagation();
	// event.preventDefault();

// =======================================
// Question Class Constructor
// =======================================

function Question(question, op1, op2, op3, op4, op5, correct) {
	this.question = question;
	this.op1 = op1;
	this.op2 = op2;
	this.op3 = op3;
	this.op4 = op4;
	this.op5 = op5;
	this.correct = correct;
};


// =======================================
// Array Storing Quiz Questions
// =======================================


var quiz = new Array();

quiz[0] = new Question("What's the tallest mountain in the world?", "Mt. Hood", "Mt. Kilimanjaro", "Mt. Sinai", "Mt. Everest", "Mt. Rushmore", "Mt. Everest")
quiz[1] = new Question("Which number comes first?", "1", "2", "3", "4", "5", "1");
quiz[2] = new Question("This is question number 3?", "1", "2", "3", "4", "5", "3");
quiz[3] = new Question("This is question number 4?", "1", "2", "3", "4", "5", "4");
quiz[4] = new Question("This is question number 5?", "1", "2", "3", "4", "5", "5");

console.log(quiz[0].question);



// ======================================================
// askQuestion - Changes Text in .question Div
// ======================================================

function askQuestion(qIndex) {
	$(".answer").fadeOut("slow");
	$(".question").delay(900).fadeIn("slow");
	$(".question p").text(quiz[qIndex].question);
	$(".question li:first-child").text(quiz[qIndex].op1);
	$(".question li:nth-child(2)").text(quiz[qIndex].op2);
	$(".question li:nth-child(3)").text(quiz[qIndex].op3);
	$(".question li:nth-child(4)").text(quiz[qIndex].op4);
	$(".question li:nth-child(5)").text(quiz[qIndex].op5);	
	console.log("Fired askQuestion(" + qIndex + "]")
}

// ======================================================
// evaluateAnswer - Compares Clicked Line to Correct Line
// ======================================================



// function evaluateAnswer(question) {

// 	// var correct = $(".question li")[0];
// 	var correct = quiz[question].correct;

// 	if($(this).text() === correct) {
// 	// if(this === quiz[question].correct) {
// 		console.log("correct!");
		

// 	} else {
// 		console.log("wrong answer");

// 	}

// 	$(".question").fadeOut("slow");
// 	$(".answer").delay(900).fadeIn("slow");


// }

// ======================================================
// nextQuestion - combines askQuestion and evaluateAnswer
// ======================================================


// function nextQuestion(qIndex, correctAns) {
// 	$(".answer").fadeOut("slow");
// 	$(".question").delay(900).fadeIn("slow");
// 	askQuestion(qIndex);
// 	evaluateAnswer(correctAns);
// }




var count = 0;

askQuestion(count);

$("section")
.on("click", "li", function(event) {
	event.stopPropagation();
	event.preventDefault();
	
	var correct = quiz[count].correct;

	if($(this).text() === correct) {
	// if(this.innerText === correct) {
		console.log("correct!");
		

	} else {
		console.log("wrong answer");

	}

	$(".question").fadeOut("slow");
	$(".answer").delay(900).fadeIn("slow");
	// evaluateAnswer(count);
	}
);

$("section")
.on("click", ".next", function(event) {
	event.stopPropagation();
	event.preventDefault();
	count++;
	askQuestion(count);
	}
);

// var count = 0;

// for(var i=0; i<quiz.length; i++) {

// 	askQuestion(count);

// }






// ==========================================================
// playGame - a series of calls to execute quiz in sequence
// ==========================================================

// function playGame() {
// 	nextQuestion(0, 3);			
// 	nextQuestion(1, 0);
// 	nextQuestion(2, 1);
// 	nextQuestion(3, 2);
// 	nextQuestion(4, 3);			
// }

// playGame();

// =======================================
// Event Handlers
// =======================================

// var go = false;
// var currentQ = 0;

// $(".question li")
// .on("click", function() {
// 	go = false;
// })

// $(".next")
// .on("click", function() {
// 	go = true;
// });



// for(var i = 0; i < quiz.length; i++) {

// 	nextQuestion(i, i);
// 	currentQ++;

// }





});