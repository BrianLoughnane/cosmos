$(document).ready(function(){

$("body").css("background-size", "130%");
$("body").css("background-position", "-100px -100px");

// =======================================
// Question Class Constructor
// =======================================

function Question(question, op1, op2, op3, op4, op5, correct, description) {
	this.question = question;
	this.op1 = op1;
	this.op2 = op2;
	this.op3 = op3;
	this.op4 = op4;
	this.op5 = op5;
	this.correct = correct;
	this.description = description;
};


// =======================================
// Array Storing Quiz Questions
// =======================================


var quiz = new Array();

quiz[0] = new Question("This animal has survived all 5 of the most recent mass extinctions on earth", "Alligator", "Shark", "Ant", "Tartigrade", "Amoeba", "Tartigrade", "\"They can make a living anywhere on earth.  In the frigid peaks of the tallest mountains, in the cauldrons of erupting volcanoes, and in the deep ocean vents at the bottom of the sea.\"");
quiz[1] = new Question("If we scaled the entire timeline of the cosmos to a calendar year (big bang 'til present day), the entire recorded history of human life would be...", "2 months", "22 days", "8 hours", "8 minutes", "14 seconds", "14 seconds", "\"Every person you’ve ever heard of lies right in there. All those kings and battles, migrations and inventions, wars and loves, every thing in the history books happened here in the last 14 seconds of the cosmic calendar\"");
quiz[2] = new Question("How long does it take light to cross the Milky Way Galaxy?", "100,000 years", "10 years", "1 year", "5 days", "3 hours", "100,000 years", "\"It would take light, the fastest thing there is, 100,000 years\"");
quiz[3] = new Question("Volcanoes erupt 500 million tons of CO2 into the atmosphere each year.  How much more CO2 than that do humans emit?", "2x as much", "5 times as much", "10 times as much", "20 times as much", "50 times as much", "50 times as much", "\"That's not even 2% of the 30 billion tons of CO2 that our civilization is cracking out every year\"");
quiz[4] = new Question("Every time you breathe, you're inhaling how many molecules of oxygen?", "10,000", "100,000", "1 million", "100 million", "1 billion", "100 million", "every breath we take, we inhale as many molecules as there are stars in all the galaxies in the visible universe");

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


function newGame() {
	count = 0;
	score = 0;
	quesNum = 1;

	$(".total").text(quiz.length);
	$(".score").text(score);
	$(".quesNum").text(1);

	askQuestion(count);
}

newGame();


$("section")
.on("click", "li", function(event) {
	event.stopPropagation();
	event.preventDefault();
	
	var correct = quiz[count].correct;
	var yourAnswer = $(this).text();

	if(yourAnswer === correct) {
		console.log("correct!");
		$(".answer h1").text("Correct").css("color", "green");
		score++;
	} else {
		console.log("wrong answer");
		$(".answer h1").text("Incorrect").css("color", "red");
	}

	$(".yourAns").text(yourAnswer);
	$(".correctAns").text(correct);
	$(".answer p").text(quiz[count].description);
	$(".score").text(score);

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

	if(count < quiz.length) {
		askQuestion(count);
		quesNum++;
		$(".quesNum").text(quesNum);
	} else {
		// alert("the game is over");
		// if(count === quiz.length) {
		$(".answer").fadeOut("slow");
		$(".playAgain").delay(900).fadeIn("slow");

		if(score === 0 || score === 1 || score === 2) {
			$(".playAgain h1").text("Ouch").css("color","red");
		} else if (score === 3 || score === 4) {
			$(".playAgain h1").text("Good Job!").css("color","orange");
		} else {
			$(".playAgain h1").text("YOU'RE A COSMIC GENIUS").css("color","green");
		}
	}

	}
);


$("section")
.on("click", ".playAgainButton", function(event) {
	event.stopPropagation();
	event.preventDefault();

	newGame();

	$(".playAgain").fadeOut("slow");
	$(".question").delay(900).fadeIn("slow");
	}
);




// var count = 0;

// for(var i=0; i<quiz.length; i++) {

// 	askQuestion(count);

// }

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