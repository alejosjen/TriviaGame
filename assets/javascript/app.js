var triviaQuestions = [{
    question: "Which is not one of Santa's names?",
    choices: ["Sinter Klaas", "St. Nicholas", "Sint Nikolaas", "Santa Clause"],
    correctAnswer: 3
}, {
    question: "In 1822, Clement Clarke Moore, wrote a Christmas poem that characterized Santa as we know him today. What was the title of his poem?",
    choices: ["'The One About Christmas Eve'", "'A Visit from St. Nicholas'", "\'Twas the Night Before Christmas'", "'The Red Nosed Reindeer'"],
    correctAnswer: 1
}, {
    question: "Which is the snowiest major city on earth?",
    choices: ["Anchorage, Alaska, US", "Moscow, Russia", "Aomori City, Japan", "Ushuaia, Tierra del Fuego, Argentina"],
    correctAnswer: 2
}];

//Turn questions & counters off at start of game 
$('.col-2').toggle(false);
$('.col-3').toggle(false);
// Start button to toggle quiz-area on, start interval countdown, and create questions
$('.start').click(function () {
    $('.start').toggle(false);
    $('.col-2').toggle();
    game.decrement();
    game.createQuestions();
});

var game = {
    correctAnswerCounter: 0,
    incorrectAnswerCounter: 0,

    decrement: function () {
        var counter = 120;
        gameCountdown = setInterval(function () {
            console.log(counter);
            counter--;
            $("#interval").text(counter);
            if (counter === 0) {
                clearInterval(gameCountdown);
                $('.col-2').css("display", "none");
                $('.col-3').toggle();
                game.countScore();
            }
        }, 1000);
    },

    createQuestions: function () {
        for (var i = 0; i < triviaQuestions.length; i++) {
            $("#quiz-area").append("<p id='question'>" + triviaQuestions[i].question) + "</p>";
            for (var j = 0; j < triviaQuestions[i].choices.length; j++) {
                $("#quiz-area").append("<div><input type='radio' id='radio-choice' name=question-" + i +
                    " value='" + triviaQuestions[i].choices[j] + "''>" + triviaQuestions[i].choices[j] + "</div>");
            }
        }
    },

    countScore: function () {
        //Need to figure out why counters are not working right

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === triviaQuestions[0].correctAnswer) {
                game.correctAnswerCounter++;
            } else {
                game.incorrectAnswerCounter++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === triviaQuestions[1].correctAnswer) {
                game.correctAnswerCounter++;
            } else {
                game.incorrectAnswerCounter++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === triviaQuestions[2].correctAnswer) {
                game.correctAnswerCounter++;
            } else {
                game.incorrectAnswerCounter++;
            }
        });        

        this.score();
    },

    score: function () {
        $(".correct").text(this.correctAnswerCounter);
        $(".incorrect").text(this.incorrectAnswerCounter);
    }

}; // End of game variable

// Reset button at end of game, no reloading page
$('.try-again').click(function () {
    $('.start').toggle(false);
    $('.col-2').toggle();
    $('.col-3').toggle(false);
    correctAnswerCounter = 0,
    incorrectAnswerCounter = 0,
    game.decrement();
});