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



	console.log(currentQuestionText)
	console.log(state.questions[state.currentQuestion].choices[chosenButton])

//change to compare the numeric values of the chosenButton value
    if (state.questions[state.currentQuestion].choices[chosenButton] === correctAnswer) {
    //if correct, add 1 to score
     state.currentScore++
        console.log("correct")
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
	showView();
    currentScore = 0
}

function nextQuestion() {
    state.currentQuestion++
    console.log(state.currentScore)
    console.info(state.currentQuestion < state.questions.length)
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
    $( ".feedbackPage h2" ).html(`You have ${score} correct` );
    console.log(score);
}


function showResults() {
	showView();
    $( ".finalPage h2" ).html(`You have ${score} correct` );

	console.log('show results')
}

function showView(){
	$('.startPage').hide()
    $('.questionsPage').hide()
    $('.feedbackPage').hide()
    $('.finalPage').hide()
	console.log('show', state.view);

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
    console.log(ques)
    
    console.log("loop working")

   
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
		console.log("nextButton")
		nextQuestion()
	})

	$('.resetButton').on('click', function(event) {
		event.preventDefault();
		resetGame()
	})
})






















