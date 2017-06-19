console.log("works")

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
			  
			   questions: [{ text: "What won the 2017 NBA championship?" , 
			   				 choices: ["A. Cavs", "B. Warriors", "C. Knicks", "D. Spurs"],
			   				 answer: 1},
			   			  
			   			   { text: "How many championships does Tim Duncan have?",
			   				 choices: ["A. 3", "B. 4", "C. 5", "D. 6"],
			   				 answer: 2},

			   				 ],

			   	currentQuestion: 0,

			   	currentScore: 0,

			   	// answerSelection: [{responseCorrect:"You got it right!"}, 
			   	// 				   {responseIncorrect: "Go back to the gym"}]

}

//------------- Modify functions Section 2 ------------------->
//advance page function

function advancePage(state, view){
	state.view = view;
} 
 

function answerQuestion(state, questions){
    
    state.questions = state.questions[currentQuestion]
    
    if (state.questions.choice === state.question.answer) {
    //if correct, add 1 to score
     state.currentScore++
    console.log(state.currentScore)
    }
}

function startGame(state, view){
    state.view = "questionsPage";
}

function resetGame(state, view){
    state.view = "startPage";
}

//------------- Render functions Section 3 ------------------->
let renderList = function(state, element){
      return (
        `<div class=${view}>`
        );
      
    element.html(itemsHTML);
    };


//------------- Event listeners Section 4 ------------------->

$(document).ready(function() {

$('.start').on('click', '', function(event){
    console.log("starting the page")
  // 1. Change state with state mod function
  // 2. Invoke render function
  
  });

$('.answerButtons').on('submit', '', function(event){
    event.preventDefault();

    });

})
