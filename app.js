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
                            { text: "What won the 2017 NBA championship?" , 
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

function advancePage(view){
	state.view = view

    //var currentPage = document.getElementById('startPage')
} 
 

function answerQuestion(event, chosenButton){

var correctAnswer = state.questions[state.currentQuestion].choices[state.questions[state.currentQuestion].answer]

var currentQuestionText = state.questions[state.currentQuestion].text
console.log(currentQuestionText)
console.log(state.questions[state.currentQuestion].choices[chosenButton])


    if (state.questions[state.currentQuestion].choices[chosenButton] === correctAnswer) {
    //if correct, add 1 to score
     state.currentScore++
        
        console.log("correct")
        //console.log(state.currentScore)
        nextQuestion()
    } else {
        console.log("wrong")
        console.log(state.currentScore)
        nextQuestion()
    }
}

function startGame(view){
    state.view = "questionsPage";
    $('.startPage').hide()
    $('.feedbackPage').hide()
    $('.finalPage').hide()
}

function resetGame(view){
    state.view = "startPage";
    currentScore = 0
}

function nextQuestion(view, currentScore) {
    state.currentQuestion++
    console.log(state.currentScore)
     for (var i = 0; i < state.questions.length; i++){
        console.log("loop working")
        state.view = "feedbackPage";
            $('.startPage').hide()
           // $('.questionsPage').hide()
            $('.finalPage').hide()
     }
}

//------------- Render functions Section 3 ------------------->
let renderList = function(element){
  //loop thru choices and put names where they should be
  
    };


//------------- Event listeners Section 4 ------------------->

$(document).ready(function() {

$('.start').on('click', '', function(event){
   
  // 1. Change state with state mod function

    startGame(state)

  // 2. Invoke render function
//   const itemIndex = $(event.currentTarget).closest('li').data('item-index');
  });

$('.btn').on('click', '', function(event){
    event.preventDefault();
    var chosenButton = $(this).attr('id')
    answerQuestion(event, chosenButton)

   

    });

})
