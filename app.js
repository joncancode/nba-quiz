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

var mockState = {
	views: [],questions: [{}, {}],
}
 //--------- Section 1 --------------->


let state = {view: ["startPage", "questionsPage", "feedbackPage", "finalPage"],
			  
			   questions: [{ text: "What won the 2017 NBA championship?" , 
			   				 choices: ["A. Cavs", "B. Warriors", "C. Knicks", "D. Spurs"],
			   				 answer: 1},
			   			  
			   			   { text: "How many championships does Tim Duncan have?",
			   				 choices: ["A. 3", "B. 4", "C. 5", "D. 6"],
			   				 answer: 2},

			   				 ],

			   	currentQuestion: 0,

			   	currentScore: 0,

			   	answerSelection: [{responseCorrect:"You got it right!"}, 
			   					   {responseIncorrect: "Go back to the gym"}]

}




//------------- Modify functions Section 2 ------------------->
//advance page function

// function submitButton (){}
function advancePage(state, view){
	state.view = startPage;
	console.log(advancePage);
	console.log(state.currentScore);
	console.log(state.currentQuestion);
} 

//results page / if (true){ "you got it right" } else {"go back to the gym"}
//On this page, hide the other pages unless you are on the last page it will return you to the start  
// function displayScore(){}

// current: questions.text[0]

//------------- Render functions Section 3 ------------------->
let renderList = function (state, element){
	return 
}


//------------- Event listeners Section 4 ------------------->
// function submitButton (){}




//------------- Initialize Section 5 ------------------->



    
