var answerA;

var answerB;

var answerC;

var answerD;

var userPick;

var correctAnswer;

var incorrectAnswer;

var unAnswer;

var images;

var count=30;

// var disneyQuestion = new Array ( );

// disneyQuestion [0] = new Array("In Aladdin, what is the name of Jasmine’s pet tiger?", "Rajah");

// disneyQuestion [1] = new Array ("In Peter Pan, Captain Hook had a hook on which one of his hands?", "His Left Hand");

// disneyQuestion [2] = new Array ("In the Lion King, where does Mufasa and his family live?", "Pride Rock");

// disneyQuestion [3] = new Array ("In Beauty and the Beast, how many eggs does Gaston eat for breakfast?", "5 Dozen");

// disneyQuestion [4] = new Array ("In Alice in Wonderland, what is the name of Alice’s kitten?", "Dinah");

// disneyQuestion [5] = new Array ("After being on earth, where did Hercules first meet his father Zeus?", "In the Temple of Zeus");

// disneyQuestion [6] = new Array ("During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?", "Gold");

// disneyQuestion [7] = new Array ("In Bambi, what word does the owl use to describe falling in love?", "Twitterpatted");


// questions = [{
//  question: "Which is a fruit?", 
// choices: ["rock", "paper", "pineapple", "scissors"]
// answer: 2, }, 
// {
//  question: "Which is a colour?",
//  choices: ["ennui", "green", "umami", "cold"]
//  answer: 1, 
//  } ]

var disneyQuestion = [{
    question: "In Aladdin, what is the name of Jasmine's pet tiger?",
    choices: ["Rajah", "Bo", "Iago", "Jack" ],
    images:  ["../images/Rajah.gif"],
    validAnswer: 0
  }, {
    question:"In Peter Pan, Captain Hook had a hook on which part of his body?",
    choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
    validAnswer: 1

  }, {
    question:"In the Lion King, where does Mufasa and his family live?",
    choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
    validAnswer: 3

  }, {
    question:"In Beauty and the Beast, how many eggs does Gaston eat for breakfast?",
    choices: ["2 Dozen", "5 Dozen", "5000", "0"],
    validAnswer: 1

  }, {
    question:"In Alice in Wonderland, what is the name of Alice’s kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    validAnswer: 0

  }, {
    question:"After being on earth, where did Hercules first meet his father Zeus?",
    choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian Fields"],
    validAnswer: 2

  }, {
    question:"During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?",
    choices: ["Yellow", "Blue", "Gold", "White"],
    validAnswer: 2

  }, {
    question:"In Bambi, what word does the owl use to describe falling in love?",
    choices: ["Whimsical", "Miserable", "Joyful", "Twitterpatted"],
    validAnswer: 3

  }

];

$("#start_button").click(function(){
    $(this).hide();
    counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    displayTrivia();
}); 


function timer(){
  count--;
  if (count <= 0) {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  $("#timer").html("Time remaining: " + "00:" + count + " secs");
}

  
  function displayTrivia() {
    $("#question_div").html(disneyQuestion[0].question);
    // $("#question_div").append("<p>" + disneyQuestion[0].choices + "</p>");
  
      var choicesArr = disneyQuestion[0].choices;
      var buttonsArr = [];

      for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $('#choices_div').append(button);

        // buttonsArr.push(button);

        // var newDiv = $("<div>");
        // newDiv.attr("class", "buttons_div");
        // newDiv.append(button);
       //  newDiv.append(button);
       // $("#question_div").append(newDiv);
      }

  } // closes displayTrivia

$('#choices_div').on('click', 'button', function(e){
  console.log('clicked answer btn');
  userPick = $(this).data("id");
  // console.log(userPick);
  disneyQuestion[0].validAnswer;
  if(userPick != disneyQuestion[0].validAnswer) {
    // console.log("Wrong");
    $('#choices_div').text("Wrong Answer! The correct answer is Rajah.");
    // $("#choices_div").html("<img src=" + disneyQuestion[0].images);
  } else if (userPick === disneyQuestion[0].validAnswer) {
    $('#choices_div').text("Correct!!! The pet tiger name is Rajah");


  }
  // for (var i = 0; i < choicesArr.length; i++) {
  //   if(userPick != choicesArr[0]) {
  //     console.log("wrong!!!");
  //   }
  // }

});
    //Grab question #1 from the object and append it to the game_div section//
    //Give the uer 30 seconds for the question//
    //Have the options as a button for user to choose//
    //If correct answer move on to the result screen, 
    // (result screen for correct choice will display correct, the images and time left)//
    //wait for a few seconds later//
    //Move on to question #2//
    //If in-correct answer move on to the result screen, wait then move to question #2//
    // (result screen for in-correct choice will display In-correct, the correct answer, the images and time left)//

    //Time remaining will be 30 seconds and it will refresh everytime the user is on a new screen//

    //When reaches the last question, user scores will display with corect answers, in-correct and un-pick answer, a message, and replay button//
  

//Press start to start the game

// One question is show at a time with a time ticking down for just one question

// User click the answer and check to see if the answer is correct (if not display the correct answer anyway)
// (give each answer the same amount of times of 30 seconds.)

// With no user input, the game will move on to the next question automatically.

// When the user take too long to answer show "time up and display the correct answer" move on to the next question

// The timer will stop.

// At the end show the correct and incorrect answer and answer that the user didn't guess. 


// When user press start over, the game will reset not restart. 
