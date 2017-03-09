# TriviaGame


HW - Trivia Game


Live Link 

https://yenla.github.io/TriviaGame/


Summary

• In this homework assignment, I have to create a time trivia game. I choose a Disney theme because I love disney and its also a simple topic for the user to answer. The requirement for this homework is to have a timer, each question will have the same amount of time. User will need to choose an answer to move on to the next question. If the time run out and the user haven't pick an answer yet, the trivia will still automatically move on to the next question.


Code Explaination

I use an on click event to start of the game follow by the question and the answers to displaying on the screen. The choices will display in a form of button which the user can click to move on to the next question.

For example:

	function displayTrivia() {

    $("#question_div").html(disneyQuestion[0].question);
    question++;
    var choicesArr = disneyQuestion[0].choices;

    var buttonsArr = [];

      for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $('#choices_div').append(button);
      }
  }

    $('#choices_div').on('click', 'button', function(e){
    userPick = $(this).data("id");

     if(userPick != disneyQuestion[0].validAnswer) {
        $('#choices_div').text("Wrong Answer! The correct answer is Rajah.");
        incorrectAnswer++;
      } else if (userPick === disneyQuestion[0].validAnswer) {
        $('#choices_div').text("Correct!!! The pet tiger name is Rajah.");
        correctAnswer++;
      }
  });
