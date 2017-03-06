$(document).ready(function(){ 

var questionsA = [{
    
      question: "How does Lori die?",
      options: ["giving birth", "she was shot",  "walkers ate her", "she drowned"],
      correctAnswer: "giving birth",
      image: "assets/images/lori.jpg", 
    }
    ];


var questionsB = [{ 
     question: "Who saves Andrea after she is separated from the group?",
     options: ["Michonne", "Daryl", "The Governor", "Merle"],
     correctAnswer: "Michonne.",
     image: "assets/images/andrea.jpg",
  }

   ];

var questionsC = [{
   
      
      question: "At the end of season 3, after the governor attacked Rick and the group at the prison, it was unclear if Baby Judith survived. Who took her?",
      options: ["Tyreese", "Carol", "Beth", "Daryl"],
      correctAnswer: "Tyreese",
      image: "assets/images/tyreese.jpg",

   },
   ];

var questionsD = [{


      question: "What was the name of the father and son that Rick met upon waking up from his coma?",
      options: ["Michael and Dennis", "Matthew and Derrick", "Mitchell and Doug", "Morgan and Duane"],
      correctAnswer: "Morgan and Duane",
      image: "assets/images/morgan.jpg",

   }
 ];

var correctAnswers = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
var timeExpired = 0;
var number = 10;
var intervalId;
var gameOver = false;
var question;
var questionDiv;
var optionList;
var numOptions;
var time = 0;
var count;
var interval;


   
  


/*Functions
==============================================================*/

  function showQuestion (){
      

      timer();    
    for ( var i = 0; i < questionsA.length; i++){
      $(".question").append("<h2>" + questionsA[i].question + "</h2>");
      for ( var j = 0; j < questionsA[i].options.length; j++){
        $(".question").append("<button type='button' class='list-group-item' name='question-" + i + "' value= '" + questionsA[i].options[j] + " '</button>'" + questionsA[i].options[j]);
       }
    }
    

    $('.list-group-item').on('click', '.list-group-item', function(e) {
      var value = $(this).index('.list-group-item');
      console.log(value);

      if (value === 1){
          console.log("Thats Correct!"); 
                             
        }
        else {
            console.log("That is Wrong!");
           
        }
    })

      $(".question").append("<button id='done'>Done</button>");
          if ($('#done').on('click',function(){
            $(".question").remove();
              nextQuestion();
          }));

  }

    function nextQuestion (){
      

for ( var i = 0; i < questionsB.length; i++){
      $(".question2").append("<h2>" + questionsB[i].question + "</h2>");
      for ( var j = 0; j < questionsB[i].options.length; j++){
        $(".question2").append("<button type='button' class='list-group-item' name='question-" + i + "' value= '" + questionsB[i].options[j] + " '</button>'" + questionsB[i].options[j]);
      }
      
    }        
    $(".question2").append("<button id='done'>Done</button>");
    if ($('#done').on('click',function(){
      thirdQuestion();
        $(".question2").remove();
        
  }));
  }

  function thirdQuestion (){

      for ( var i = 0; i < questionsC.length; i++){
      $(".answer").append("<h2>" + questionsC[i].question + "</h2>");
      for ( var j = 0; j < questionsC[i].options.length; j++){
        $(".answer").append("<button type='button' class='list-group-item' name='question-" + i + "' value= '" + questionsC[i].options[j] + " '</button>'" + questionsC[i].options[j]);
      }
      
    }        
    $(".answer").append("<button id='done'>Done</button>");
    if ($('#done').on('click',function(){

        $(".answer").remove();
        
    }));  

  }

  // function fourthQuestion (){
  //   for ( var i = 0; i < questionsD.length; i++){
  //     $(".grade").append("<h2>" + questionsD[i].question + "</h2>");
  //     for ( var j = 0; j < questionsD[i].options.length; j++){
  //       $(".grade").append("<button type='button' class='list-group-item' name='question-" + i + "' value= '" + questionsD[i].options[j] + " '</button>'" + questionsD[i].options[j]);
  //     }
      
  //   }        
  //   $(".grade").append("<button id='done'>Done</button>");
  //   if ($('#done').on('click',function(){
  //       $(".grade").remove();
        
  // }));
  // }

/*  //When the player is done answering questions
function done(){
    $.each($("button[name='questionA-0']:clicked"), function() {
          if ($(this).val() === questionsA[0].correctAnswer) {
          rightAnswers++;
          }
          else {
          wrongAnswers++;
        }


        $(".grade").append(rightAnswers);
        $(".grade").append(wrongAnswers);
        console.log(rightAnswers);
        console.log(wrongAnswers);

    });

    $.each($("input[name='questionA-1']:checked"), function() {
        if ($(this).val() === questionsA[1].correctAnswer) {
        rightAnswers++;
        }
        else {
        wrongAnswers++;
        }
    });

  $.each($("input[name='questionA-2']:checked"), function() {
        if ($(this).val() === questionsA[2].correctAnswer) {
        rightAnswers++;
        }
        else {
        wrongAnswers++;
        }
  });

  $.each($("input[name='questionB-3']:checked"), function() {
      if ($(this).val() === questionsB[0].correctAnswer) {
      rightAnswers++;
      }
      else {
      wrongAnswers++;
      }
  });
         
    $.each($("input[name='questionB-4']:checked"), function() {
        if ($(this).val() === questionsB[1].correctAnswer) {
        rightAnswers++;
        }
        else {
        wrongAnswers++;
        }
        console.log("Right Answers = ", correctAnswer);
    });   
  
  }//end of done function // */

function result (){
    clearInterval(timer);

    $(".question2").remove();

    question.html("<h2>All Done!</h2>");
    question.append("<h3>Correct Answers: " + this.correct + "</h3>");
    question.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    question.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  

}

  //Sets a timer
  function timer(){
      time = 30;
      interval = setInterval(decrement,3000);
  }
  //Actually does the counting
  function decrement(){
      time--;
      /*console.log(time);*/
      if(time === 0)
      {
        // console.log('stops');
        clearInterval(interval);
        setTimeout(timer,3000);
      }
  }


/*Click Functions
==============================================================*/

$('#start').on('click',function(){
    $('#start').remove();
  console.log("startclicked");
  // timer();
  showQuestion();
});

   $('#done').on('click',function(){
       /* done();*/

      
   });

});