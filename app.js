/* Ask yourselves "What information does this app need to know about itself?"
 The answer to that question will help you decide what needs 
 to go in your state; and remember that your state should 
 be a single object, a single source of truth. */

 /* Each of your views could be a unique template, 
 and the best way to do that right now is a div imo */

 /* Do you all remember the HTML5 data-* attribute I discussed this weekend? 
 hat might be a better way to indicate a template. */

// one object with properties 
//Array of strings for choices 

 //--------- Section 1 --------------->

let state = {view: "startPage",
			  
			   questions: [
                            { text: "What team won the 2017 NBA championship?" , 
			   				 choices: ["A. Cavs", "B. Warriors", "C. Knicks", "D. Spurs"],
			   				 answer: 1},
			   			  
			   			   { text: "How many championships does Tim Duncan have?",
			   				 choices: ["A. 3", "B. 4", "C. 5", "D. 6"],
			   				 answer: 2},

                            { text: "Who scored the most points in NBA history?",
			   				 choices: ["A. Michael Jordan", "B. Karl Malone", "C. Wilt Chamberlain", "D. Kareem Abdul-Jabbar"],
			   				 answer: 3},
			   				 
							
							{ text: "Which team never won a championship?",
			   				 choices: ["A. Bulls", "B. Blazers", "C. Suns", "D. Mavericks"],
			   				 answer: 2},
							
							{ text: "When you hit three shots in a row in NBA Jam, what do they say?",
			   				 choices: ["A. 'He’s on fire!'", "B. 'No one can hold him!'", "C. 'Hat trick!'", "D. 'Kobe!'"],
			   				 answer: 0},
			   				 ],

			   	currentQuestion: 0,

			   	currentScore: 0,

}
//------------- Modify functions Section 2 ------------------->
//advance page function


var currentQuestionText = state.questions[state.currentQuestion].text

function answerQuestion(event, chosenButton){

	var correctAnswer = state.questions[state.currentQuestion].choices[state.questions[state.currentQuestion].answer]
	var currentScoreIndex = state.currentScore
	var currentQuestionText = state.questions[state.currentQuestion].text

//change to compare the numeric values of the chosenButton value
    if (state.questions[state.currentQuestion].choices[chosenButton] === correctAnswer) {
    //if correct, add 1 to score
     state.currentScore++
    } 
    	state.view = "feedbackPage";
    	showFeedback()
}
//need checkState function

function startGame(){
    state.view = "questionsPage";
    showView();
    showQuestion()
}

function resetGame(){
    state.view = "startPage";
    state.currentScore = 0
	state.currentQuestion = 0
	showView();
}

function nextQuestion() {
    state.currentQuestion++
    if (state.currentQuestion < state.questions.length) {
    	state.view = "questionsPage";
    	showQuestion();
    }
    else {
    	state.view = "finalPage";
    	showResults();
    }


}

function showFeedback (){
	showView();
    let score = state.currentScore
    $( ".feedbackPage h2").html(`You have ${score} correct` );
}


function showResults() {
	showView();
	let score = state.currentScore
	let finalScore = ""
	if (state.currentScore === 3){
		finalScore.text == "Nice try"
	} 

    $( ".finalPage h2").html(`You have ${score} correct. Want to play again?`);
}

function showView(){
	$('.startPage').hide()
    $('.questionsPage').hide()
    $('.feedbackPage').hide()
    $('.finalPage').hide()

	$(`.${state.view}`).show();
} 
//------------- Render functions Section 3 ------------------->

function showQuestion(){
    let curQues = state.currentQuestion
    const ques = state.questions[curQues]
    showView();

    $("#questionAsk").text(ques.text);
    $(".answerButtons .btn1").text(ques.choices[0]);
    $(".answerButtons .btn2").text(ques.choices[1]);
    $(".answerButtons .btn3").text(ques.choices[2]);
    $(".answerButtons .btn4").text(ques.choices[3]);
   
}

//------------- Event listeners Section 4 ------------------->

$(document).ready(function() {

	$('.start').on('click', '', function(event){
	   
	    startGame()

  	});

	$('.btn').on('click', '', function(event){
	    event.preventDefault(); //form submit problem -- dont actually need 
	    var chosenButton = $(this).val()
	    answerQuestion(event, chosenButton)   

    });
	$("#questionAsk").submit('', function(event) {
		event.preventDefault();
	    state.view = "questionsPage"; //try to move back to "state" manipulation (section 2)
		showQuestion();
	}) 

	$('.nextButton').on('click', function(event) {
		event.preventDefault();
		nextQuestion()
	})

	$('.resetButton').on('click', function(event) {
		event.preventDefault();
		resetGame()
	})
})






















