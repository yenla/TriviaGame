var answerA;

var answerB;

var answerC;

var answerD;

var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;

var images;

var count = 30;


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
    question:"In Alice in Wonderland, what is the name of Alice's kitten?",
    choices: ["Dinah", "Sammie", "Kat", "Luna"],
    validAnswer: 0
 
  }, {
    question:"After being on earth, where did Hercules first meet his father Zeus?",
    choices: ["Mount Olympus", "Greece", "In the Temple of Zeus", "Elysian Fields"],
    validAnswer: 2

  }, {
    question:"During the ballroom scene of Beauty & the Beast, what color is Belle's Gown?",
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
    displayTrivia();
    counter = setInterval(timer, 1000); //1000 will  run it every 1 second
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

setTimeout(function(){ 

  $("#question_div").html(disneyQuestion[1].question);
  question++;
  // $("#question_div").append("<p>" + disneyQuestion[0].choices + "</p>");

    var choicesArr = disneyQuestion[1].choices;
    var buttonsArr = [];

    $('#choices_div').empty();

    for (let i = 0; i < choicesArr.length; i++) {
      var button = $('<button>');
      button.text(choicesArr[i]);
      button.attr('data-id', i);
      $('#choices_div').append(button);
    }

    $('#choices_div').on('click', 'button', function(e){
  // console.log('clicked answer btn');
      userPick = $(this).data("id");
      // console.log(userPick);
      if(userPick != disneyQuestion[1].validAnswer) {

        $('#choices_div').text("Wrong Answer! The correct answer is Left Hand.");
        incorrectAnswer++;
        // $("#choices_div").html("<img src=" + disneyQuestion[0].images);
      } else if (userPick === disneyQuestion[1].validAnswer) {
          $('#choices_div').text("Correct!!! The answer is Left Hand.");
          correctAnswer++;
      }

    });  


}, 1000 * 10);


setTimeout(function(){ 

  $("#question_div").html(disneyQuestion[2].question);
  question++;

    var choicesArr = disneyQuestion[2].choices;
    var buttonsArr = [];

    $('#choices_div').empty();

    for (let i = 0; i < choicesArr.length; i++) {
      var button = $('<button>');
      button.text(choicesArr[i]);
      button.attr('data-id', i);
      $('#choices_div').append(button);
    } 

    $('#choices_div').on('click', 'button', function(e){
      userPick = $(this).data("id");

      if(userPick != disneyQuestion[2].validAnswer) {

        $('#choices_div').text("Wrong Answer! The correct answer is Pride Rock.");
        incorrectAnswer++;

      } else if (userPick === disneyQuestion[2].validAnswer) {
        $('#choices_div').text("Correct!!! The answer is Pride Rock.");
        correctAnswer++;
      }

    });
}, 2000 * 10);

setTimeout(function(){ 

  $("#question_div").html(disneyQuestion[3].question);
  question++;

    var choicesArr = disneyQuestion[3].choices;
    var buttonsArr = [];

    $('#choices_div').empty();

    for (let i = 0; i < choicesArr.length; i++) {
      var button = $('<button>');
      button.text(choicesArr[i]);
      button.attr('data-id', i);
      $('#choices_div').append(button);
    } 

    $('#choices_div').on('click', 'button', function(e){
      userPick = $(this).data("id");

      if(userPick != disneyQuestion[3].validAnswer) {

        $('#choices_div').text("Wrong Answer! The correct answer is 5 Dozen Eggs.");
        incorrectAnswer++;

      } else if (userPick === disneyQuestion[3].validAnswer) {
        $('#choices_div').text("Correct!!! The answer is 5 Dozen Eggs.");
        correctAnswer++;
      }

    });
}, 3000 * 10);

setTimeout(function(){ 

  $("#question_div").html(disneyQuestion[4].question);
  question++;

    var choicesArr = disneyQuestion[4].choices;
    var buttonsArr = [];

    $('#choices_div').empty();

    for (let i = 0; i < choicesArr.length; i++) {
      var button = $('<button>');
      button.text(choicesArr[i]);
      button.attr('data-id', i);
      $('#choices_div').append(button);
    } 

    $('#choices_div').on('click', 'button', function(e){
      userPick = $(this).data("id");

      if(userPick != disneyQuestion[4].validAnswer) {

        $('#choices_div').text("Wrong Answer! The correct answer is Dinah.");
        incorrectAnswer++;

      } else if (userPick === disneyQuestion[4].validAnswer) {
        $('#choices_div').text("Correct!!! Her kitten name is Dinah.");
        correctAnswer++;
      }

    });
}, 4000 * 10);

setTimeout(function(){ 

  $("#question_div").html(disneyQuestion[5].question);
  question++;

    var choicesArr = disneyQuestion[5].choices;
    var buttonsArr = [];

    $('#choices_div').empty();

    for (let i = 0; i < choicesArr.length; i++) {
      var button = $('<button>');
      button.text(choicesArr[i]);
      button.attr('data-id', i);
      $('#choices_div').append(button);
    } 

    $('#choices_div').on('click', 'button', function(e){
      userPick = $(this).data("id");

      if(userPick != disneyQuestion[5].validAnswer) {

        $('#choices_div').text("Wrong Answer! The correct answer is The Temple of Zeus.");
        incorrectAnswer++;
      } else if (userPick === disneyQuestion[5].validAnswer) {
        $('#choices_div').text("Correct!!! The correct answer is The Temple of Zeus.");
        correctAnswer++;
      }

    });
}, 5000 * 10);
setTimeout(function(){ 

  $("#question_div").html(disneyQuestion[6].question);
  question++;
     
    var choicesArr = disneyQuestion[6].choices;
    var buttonsArr = [];

    $('#choices_div').empty();

    for (let i = 0; i < choicesArr.length; i++) {
      var button = $('<button>');
      button.text(choicesArr[i]);
      button.attr('data-id', i);
      $('#choices_div').append(button);
    } 

    $('#choices_div').on('click', 'button', function(e){
      userPick = $(this).data("id");

      if(userPick != disneyQuestion[6].validAnswer) {

        $('#choices_div').text("Wrong Answer! The correct answer is Gold.");
        incorrectAnswer++;

      } else if (userPick === disneyQuestion[6].validAnswer) {
        $('#choices_div').text("Correct!!! The correct answer is Gold.");
        correctAnswer++;
      }

    });
}, 6000 * 10);

setTimeout(function(){ 

  $("#question_div").html(disneyQuestion[7].question);
  question++;
    
    var choicesArr = disneyQuestion[7].choices;
    var buttonsArr = [];

    $('#choices_div').empty();

    for (let i = 0; i < choicesArr.length; i++) {
      var button = $('<button>');
      button.text(choicesArr[i]);
      button.attr('data-id', i);
      $('#choices_div').append(button);
    } 

    $('#choices_div').on('click', 'button', function(e){
      userPick = $(this).data("id");

      if(userPick != disneyQuestion[7].validAnswer) {

        $('#choices_div').text("Wrong Answer! The correct answer is Twitterpatted.");
        incorrectAnswer++;
      } else if (userPick === disneyQuestion[7].validAnswer) {
        $('#choices_div').text("Correct!!! The correct answer is Twitterpatted.");
        correctAnswer++;
      }

    });
}, 7000 * 10);

// setTimeout(function(){ 

//   $('#choices_div').text("Correct Answer: " + correctAnswer);

  
// }, 8000 * 10);
