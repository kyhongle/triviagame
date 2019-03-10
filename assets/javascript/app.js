//doc ready function, allows doc to fully load before running javascript
$(document).ready(function() {
  // start button onclick
  $("#start-button").on("click", function() {
    console.log("clicked");
    // hides start button function
    $(this).hide();

    // timer counts for 90mins
    var timeCount = 60;
    // decrement by 1 sec
    var intervalId = setInterval(timer, 1000);
    function stop() {
      clearInterval(intervalId);
    }
    function timer() {
      timeCount--;
      $("#timer").html("TIME REMAINING: " + timeCount);
      //   when timeCount hits 0, stops

      if (timeCount === 0) {
        stop();
        endquiz();
        checkAnswer();
      }
    }

    //end of onclick

    var questionObject = [
      {
        question: "1. Define: typography?",
        answers: [
          "The art and technique of designing with type",
          "The use of a typewriter",
          "The quality of type",
          "The original text of an author's work"
        ],
        correctAnswer: "The art and technique of designing with type"
      },
      {
        question:
          "2. Claude Garamond produced the typeface Garamond between what years?",
        answers: ["1730-1745", "1930-1945", "1430-1445", "1530-1545"],
        correctAnswer: "1530-1545"
      },
      {
        question:
          "3. Another name for a regular typeface is which of the following?",
        answers: ["italic", "black", "roman", "light"],
        correctAnswer: "roman"
      },
      {
        question: "4. Who printed the first book in Europe?",
        answers: ["Cavada", "Gutenberg", "Garamond", "Licko"],
        correctAnswer: "Gutenberg"
      },
      {
        question: "5. To add contrast to a typeface you can use the following?",
        answers: ["bold", "italic", "condensed", "all of the above"],
        correctAnswer: "all of the above"
      },
      {
        question:
          "6. How many different typefaces should you use in one design?",
        answers: ["two", "three", "four", "five"],
        correctAnswer: "two"
      },
      {
        question: "7. The Bauhaus are from what country?",
        answers: ["USA", "Germany", "Switzerland", "Canada"],
        correctAnswer: "Germany"
      },
      {
        question: "8. Which one of these isn't a typeface style?",
        answers: ["Oldstyle", "Futura", "Modern", "Grotesque"],
        correctAnswer: "Futura"
      }
    ];

    //questionDiv.append(questionObject.question);

    for (var i = 0; i < questionObject.length; i++) {
      var questionDiv = $("<div>");
      questionDiv.addClass("question");
      questionDiv.text(questionObject[i].question);
      $("#quiz").append(questionDiv);

      createRadio(i);
    }

    var submitButton = $("<button>");
    submitButton.addClass("submit-button");
    submitButton.text("SUBMIT!");

    // function to hide quiz and stop timer
    function endquiz() {
      submitButton.hide();
      $("#quiz").hide();
      $("#timer").hide();
      stop();
    }

    submitButton.on("click", function() {
      checkAnswer();
      endquiz();
    });

    $("#submit").append(submitButton);

    function createRadio(index) {
      for (var i = 0; i < questionObject[index].answers.length; i++) {
        var answerDiv = $("<div>");
        answerDiv.addClass("answer-select");
        var selectInput = $("<input>");
        selectInput.attr("type", "radio");
        selectInput.attr("name", index);
        selectInput.attr("data-answerIndex", i);
        answerDiv.append(selectInput);
        answerDiv.append(questionObject[index].answers[i]);

        $("#quiz").append(answerDiv);
      }
    }

    var correct = 0;
    var incorrect = 0;
    var unanswer = 0;

    function checkAnswer() {
      var answers = $("input[type='radio']:checked");

      for (var i = 0; i < answers.length; i++) {
        // html radio button
        var questionDom = answers[i];

        //index of the question object within the array
        var questionIndex = $(questionDom).attr("name");

        // answer index within our answer array within our question
        var answerIndex = $(questionDom).attr("data-answerIndex");

        // question object within the array
        var question = questionObject[questionIndex];

        if (question.correctAnswer === question.answers[answerIndex]) {
          correct++;

          $("#correct-answers").text("Correct Answers: " + correct);

          console.log(correct);
        } else if (question.correctAnswer !== question.answers[answerIndex]) {
          incorrect++;
          //   var incorrectDiv = $("<div>");
          $("#incorrect-answers").text("Incorrect Answers: " + incorrect);

          console.log(incorrect);
          // } else if (!answers) {
          //   console.log(!answers);
          //   unanswer++;
          //   $("#unanswer-answers").text("Unanswer Answers: " + unanswer);
          // }
        }
        $("#quiz").html();
      }
    }
  });
  //end of doc ready
});
