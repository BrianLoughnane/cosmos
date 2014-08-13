$(document).ready(function(){

function Question(question, op1, op2, op3, op4, op5) {
	this.question = question;
	this.op1 = op1;
	this.op2 = op2;
	this.op3 = op3;
	this.op4 = op4;
	this.op5 = op5;
};

var quiz = new Array();

quiz[0] = new Question("What's the tallest mountain in the world?", "Mt. Hood", "Mt. Kilimanjaro", "Mt. Sinai", "Mt. Everest", "Mt. Rushmore")
quiz[1] = new Question("Which Number come first?", "1", "2", "3", "4", "5");
quiz[2] = new Question();
quiz[3] = new Question();
quiz[4] = new Question();

console.log(quiz[0].question);

function askQuestion(number) {
	$(".question p").text(quiz[number].question);
	$(".question li:first-child").text(quiz[number].op1);
	$(".question li:nth-child(2)").text(quiz[number].op2);
	$(".question li:nth-child(3)").text(quiz[number].op3);
	$(".question li:nth-child(4)").text(quiz[number].op4);
	$(".question li:nth-child(5)").text(quiz[number].op5);	
}

function evaluateAnswer(op) {

	var correct = $(".question li")[op];

	$(".question li")
	.on("click", function(e) {
		e.stopPropagation();
		e.preventDefault();
		if(this === correct) {
			console.log("correct!");
			$(this).closest

		} else {
			console.log("wrong answer");

		}

	$(".question").fadeOut("slow");
	$(".answer").delay(800).fadeIn("slow");

	});

}

function nextQuestion(qIndex, aIndex) {
	$(".next")
	.on("click", function(e) {
	e.stopPropagation();
	e.preventDefault();	
	$(".answer").fadeOut("slow");
	$(".question").delay(800).fadeIn("slow");
	askQuestion(qIndex);
	evaluateAnswer(aIndex);
	});
}

function playGame() {
	askQuestion(0);
	evaluateAnswer(3);
	nextQuestion(1, 0);
}

playGame();

});