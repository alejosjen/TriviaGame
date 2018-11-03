
// Things we need to count
// Correct answers
var correctAnswerCounter = 0;
var correctArray = [];
// Incorrect answers
var incorrectAnswerCounter = 0;
var incorrectArray = [];
// Didn't answer
var noAttemptCounter = 0;
var noAttemptArray = [];
var percentageCorrect = 0;

//Turn questions & counters off at start of game 
$('.col-1').toggle(false);
$('.row-3').toggle(false);

// Start button
$(document).ready(function(){
    $('.start').click(function () {
    $('.start').toggle(false);
    $('.col-1').toggle(true);
    var number = 3;
    intervalID = setInterval(decrement, 1000);
    function decrement() {
        number--;
        $("#interval").html(number);
     if (number === 0) {
         clearInterval(intervalID);
         $('.col-1').css("display", "none");
         $('.row-3').toggle();
     }}
});
})

//start interval{}


// Slide1 appears after start button clicked


// Count down in 4 minutes
// Convert milliseconds to seconds to minutes


// Assign objects from HTML to correct, incorrect, no attempt Arrays
// Count items in array to list.length the amount of correct, incorrect, no attempts
// Present counters after time out
// Present percentage correct
// Count total possible and divide by amount correct.length for percentage
function gameTotal() {

}

// Reset button at end of game, no reloading page
$('.try-again').click(function () {
    $('.start').toggle(false);
    $('.col-1').toggle(true);
    var number = 3;
    intervalID = setInterval(decrement, 1000);
    function decrement() {
        number--;
        $("#interval").html(number);
     if (number === 0) {
         clearInterval(intervalID);
         $('.col-1').toggle(false);
         $('.row-3').toggle(true);
     }};
    });