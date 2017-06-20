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

<<<<<<< HEAD
var currentScoreIndex = state.currentScore
var currentQuestionText = state.questions[state.currentQuestion].text
=======

>>>>>>> df17103077b0297b5d82ff165cba7423bfafebd9
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
//need checkState function

function startGame(view){
	renderList();
    state.view = "questionsPage";
    $('.startPage').hide()
    $('.questionsPage').show()
    $('.feedbackPage').hide()
    $('.finalPage').hide()
    renderQuestion()
}

function resetGame(view){
    state.view = "startPage";
    currentScore = 0
}

function nextQuestion(view, currentScore, currentQuestionText) {
    state.currentQuestion++
    console.log(state.currentScore)
     for (var i = 0; i < state.questions.length; i++){
        
        console.log("loop working")
            $('.startPage').hide()
           // $('.questionsPage').hide()
            $('.finalPage').hide()
     }
}

//------------- Render functions Section 3 ------------------->
<<<<<<< HEAD
let renderList = function(element, chosenButton){
  //loop thru choices and put names where they should be
  return (
        `<div class ='answerButtons'>
            <form action="">
                <fieldset> 
                    <legend>Select the correct answer</legend>
                    <button class="btn btn1" id="0" type="submit">${state.questions[state.currentQuestion].choices[chosenButton]}</button>
                    <button class="btn btn2" id="1" type="submit">${state.questions[state.currentQuestion].choices[chosenButton]}</button>
                    <button class="btn btn3" id="2" type="submit">${state.questions[state.currentQuestion].choices[chosenButton]}</button>
                    <button class="btn btn4" id="3" type="submit">${state.questions[state.currentQuestion].choices[chosenButton]}</button>
                </fieldset>
            </form>
        </div>`
            )
    }
 /*let renderList = function (appState, element){
    let itemsHTML = appState.items.map(function(item, i){
      let checkedClass =  item.checked ? 'shopping-item__checked': '';
      return (
        `<li data-item-index="${i}">
          <span class="shopping-item ${checkedClass}">${item.name}
          </span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
        );
      })
    element.html(itemsHTML);
    };*/
=======
function renderQuestion(){
    const curQues = state.currentQuestion
    const ques = state.questions[curQues]

    $("#questionAsk").text(ques.text);
    $(".answerButtons .btn1").text(ques.choices[0]);
    $(".answerButtons .btn2").text(ques.choices[1]);
    $(".answerButtons .btn3").text(ques.choices[2]);
    $(".answerButtons .btn4").text(ques.choices[3]);
    console.log(ques)
>>>>>>> df17103077b0297b5d82ff165cba7423bfafebd9

}

//------------- Event listeners Section 4 ------------------->

$(document).ready(function() {

$('.start').on('click', '', function(event){
   
  // 1. Change state with state mod function

    startGame(state)

  // 2. Invoke render function
//   const itemIndex = $(event.currentTarget).closest('li').data('item-index');
  });

$('.btn').on('click', '', function(event, currentScore){
    event.preventDefault();
    var chosenButton = $(this).val()
    answerQuestion(event, chosenButton)
$( ".feedbackPage h2" ).html(`You have ${currentScore} correct` );
   

    });


})
