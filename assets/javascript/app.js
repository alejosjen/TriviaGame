
// Things we need to count
// Correct answers


// Incorrect answers



var triviaQuestions = [{
    question: "Which is not one of Santa's names?",
    choices: ["Sinter Klaas", "St. Nicholas", "Sint Nikolaas", "Santa Clause"],
    correctAnswer: 3
}, {
    question: "In 1822, Clement Clarke Moore, wrote a Christmas poem that characterized Santa as we know him today. What was the title of his poem?",
    choices: ["The One About Christmas Eve", "A Visit from St. Nicholas", "'Twas the Night Before Christmas", "The Red Nosed Reindeer"],
    correctAnswer: 1
}, {
    question: "Which is the snowiest major city on earth?",
    choices: ["Anchorage, Alaska, US", "Moscow, Russia", "Aomori City, Japan", "Ushuaia, Tierra del Fuego, Argentina"],
    correctAnser: 2
}];

//Turn questions & counters off at start of game 
$('.col-2').toggle(false);
$('.col-3').toggle(false);
clearButtons();

$('.start').click(function () {
    $('.start').toggle(false);
    $('.col-2').toggle();
    game.decrement();
    game.createQuestions();
});

var game = {
    /* correctAnswerCounter = 0,
    incorrectAnswerCounter = 0, */


    decrement: function () {
        var counter = 11;
        gameCountdown = setInterval(function () {
            console.log(counter);
            counter--;
            if (counter === 0) {
                clearInterval(gameCountdown);
                $('.col-2').css("display", "none");
                $('.col-3').toggle();
            }
        }, 1000);
    },


createQuestions: function () {
    for (var i = 0; i < triviaQuestions.length; i++) {
        $(".question").text(triviaQuestions[i].question);
        for (var j = 0; j < triviaQuestions[i].choices.length; j++) {
            $("#radioChoices").append("<input type='radio' name=question-" + i +
                " value='" + triviaQuestions[i].choices[j] + "'>" + triviaQuestions[i].choices[j]);
        }
    }
},





} // End of game variable



function populateQuestions() {
    for (var i = 0; i < triviaQuestions.length; i++) {
        $(".question").text(triviaQuestions[i].question);
        for (var j = 0; j < triviaQuestions[i].choices.length; j++) {
            $("#radioChoices").append("<input type='radio' name=question-" + i +
                " value='" + triviaQuestions[i].choices[j] + "'>" + triviaQuestions[i].choices[j]);
        }
    }
}


// Assign objects from HTML to correct, incorrect, no attempt Arrays?
// Count items in array to list.length the amount of correct, incorrect, no attempts
// Present counters after time out
// Present percentage correct
// Count total possible and divide by amount correct.length for percentage



/* function gameTotal() {
    $('.start').click(function () {
        var targetButton = $('#radio-c');
        targetButton.click(function () {
            ["radio-c"].forEach(function () {
                $('id').checked = true;
                correctAnswerCounter++;
            });
        });
          if ($('radio-c').checked = true) {
              correctAnswerCounter++;
              $(".correct").text(correctAnswerCounter);
          } else {
              $('radio-c').checked = false;
              incorrectAnswerCounter++;
              $(".incorrect").text(incorrectAnswerCounter);
          };  
    });
} */

function clearButtons() {
    $('.try-again').click(function () {
        ["radio-a", "radio-b", "radio-c"].forEach(function () {
            $('id').checked = false;
        });
        return false;
    })
}

// Reset button at end of game, no reloading page
$('.try-again').click(function () {
    $('.start').toggle(false);
    $('.col-2').toggle();
    $('.col-3').toggle(false);
    clearButtons();
    var number = 3;
    intervalID = setInterval(decrement, 1000);
    function decrement() {
        number--;
        $("#interval").html(number);
        if (number === 0) {
            clearInterval(intervalID);
            $('.col-2').toggle(false);
            $('.col-3').toggle();
        }
    };
});