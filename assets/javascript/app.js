$(document).ready(function(){ 

var questions = [{
    
      question: "How does Lori die?",
      choices: ["giving birth", "she was shot",  "walkers ate her", "she drowned"],
      correct: 0,
      image: "assets/images/lori.jpg",  
  }, { 
     question: "Who saves Andrea after she is separated from the group?",
     choices: ["Michonne", "Daryl", "The Governor", "Merle"],
     correct: 0,
     image: "assets/images/andrea.jpg",
  },  {        
      question: "At the end of season 3, after the governor attacked Rick and the group at the prison, it was unclear if Baby Judith survived. Who took her?",
      choices: ["Tyreese", "Carol", "Beth", "Daryl"],
      correct: 0,
      image: "assets/images/tyreese.jpg",
   },  {
      question: "What was the name of the father and son that Rick met upon waking up from his coma?",
      choices: ["Michael and Dennis", "Matthew and Derrick", "Mitchell and Doug", "Morgan and Duane"],
      correct: 3,
      image: "assets/images/morgan.jpg",
    },  {
      question: "What is Daryl's nickname for Baby Judith?",
      choices: ["Little Ass-Kicker", "Sweet Pea", "Little Lori", "Peanut"],
      correct: 0,
      image: "assets/images/ass-kicker.jpg",

   }];

    var currentQuestion = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var outOfTimeQuestions = 0;
    var number = 15;
    var intervalId;
    var question;
    var questionClass;
    var choiceList;
    var numChoices;
    var audio = new Audio("assets/audio/walking_dead.mp3");
    
  

    

    
    
    
    $(".playAgain").hide();

   
  $("#start").click(function() {
    $("#start").hide();
    $(".question").html("<img src='assets/images/glen.gif'/>");
    audio.play();
    setTimeout (function(){
        reset();
    }, 9000);
});
   
  


/*Functions
==============================================================*/
  function game() {
      $(".list-group-item").click(function() {
                audio.play();
                var value = $(".list-group-item").index(this);
                console.log(value);
                if (value === questions[currentQuestion].correct) {
                    stop();
                    console.log("clicked right answer!");
                    correctAnswers++;
                    breakTimeCorrect();
                }
                else {
                    stop();
                    console.log("clicked wrong answer");
                    incorrectAnswers++;
                    breakTimeIncorrect();
                };


     });
  }

   function breakTimeCorrect() {
        
        $(".timeLeft").html("Correct!");
        $(".question").html("<img src='" + questions[currentQuestion].image + "'/>");
        $(".choiceList").hide();
        setTimeout(function() {
            $(".timeLeft").empty();
            $(".result").hide();
            $(".choiceList").show();
            nextQuestion();
        }, 8000);

    }

     function breakTimeIncorrect() {
        
        var j = questions[currentQuestion].correct;
        $(".timeLeft").html("Sorry, the correct answer was " + questions[currentQuestion].choices[j]);
        $(".question").html("<img src='" + questions[currentQuestion].image + "'/>");
        $(".choiceList").hide();
        setTimeout(function() {
            $(".timeLeft").empty();
            $(".result").hide();
            $(".choiceList").show();
            nextQuestion();
        }, 8000);
    }

      //are there any questions left? if yes, display next, if no, display score
    function nextQuestion() {
        $(".result").unbind();
        currentQuestion++;
        //if no questions left, display score
        if (currentQuestion < 5) {
            displayQuestion();
        }
        else {
            displayScore();
        };
    };

     function displayScore() {
        $(".timeLeft").empty();
        $(".question").html("<img src='assets/images/walking-dead.gif'/>");
        $(".choiceList").hide();
        $(".playAgain").show().click(function() {
            audio.play();
            reset();
            });
        $(".result").html("Correct answers: " + correctAnswers + "<br> Incorrect answers: " + incorrectAnswers + "<br>Unanswered Questions: " + outOfTimeQuestions);
        $(".result").show();
    };

     function reset() {
        //shuffles questions
        questions.sort(function() { return 0.5 - Math.random() });
        currentQuestion = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        outOfTimeQuestions = 0;
        number = 15;
        $(".choiceList").show();
        $(".timeLeft").show();
        $(".result").hide();
        $(".playAgain").hide();
        displayQuestion();
    }


  function displayQuestion (){
       $("#start").hide();
        // starts 30s timer
        timer();
        question = questions[currentQuestion].question;
        console.log("current question: " + question);
        questionClass = $(".quizContainer").find(".question");
        choiceList = $(".quizContainer").find(".choiceList");
        numChoices = questions[currentQuestion].choices.length;
        console.log("current answer index: " + questions[currentQuestion].correct);

        // Set the questionClass to the current question //
        $(questionClass).html(question);

        // Remove all current <li> elements (if any)
        $(choiceList).find(".list-group-item").remove();

        var choice;
        for (i = 0; i < numChoices; i++) {
            choice = questions[currentQuestion].choices[i];
            $("<button type='button' class='list-group-item'>" + choice + "</button>").appendTo(choiceList);
        };
        game();
  }

  // sets interval that runs decrement function 1x per second //
    function timer() {
        intervalId = setInterval(decrement, 1000);

    };

    function decrement() {
        $(".timeLeft").html("<h3>" + number + "</h3>");
        number--;
        if (number === 0) {
            stop();
            number = 15;
            outOfTimeQuestions++;
            console.log("out of time");
            breakTimeIncorrect();
        };
    };

    function stop() {
        clearInterval(intervalId);
        number = 15;
    };






  

});