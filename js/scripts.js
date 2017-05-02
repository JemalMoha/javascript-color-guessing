var targetIndex;
var guessInputText;
var guessInput;
var target;
var finnished = false;
var guesses = 0;

var colors = [
    'green', 'blue', 'cyan', 'gold', 'gray', 'magenta', 'yellow', 'white', 'pink', 'black'
]

function doGame() {

    var randonNumber = Math.random() * (colors.length -1);
    var randonNumberInteger = Math.floor(randonNumber);
    targetIndex = randonNumberInteger;
    var sortedColors = colors.sort();

    while (!finished) {
        guessInputText = prompt("I am thinking one of these colors: \n\n" +
                                sortedColors + "\n\n" + 
                                "What color am i thinking of?");

        guessInput = guessInputText;
        target = sortedColors[targetIndex];
        guesses++;
        finished = checkGuess();
        alert("Congratualtions! You have guessed the color!\n\n" +
              "It took you "+ guesses + " guesses to finnish the game! \n\n" +
             "You can see the color guessed in the background!");

    }
}

function checkGuess() {

    if(sortedColors.indexOf(guessInput) === -1) {
        alert("Sorry, I don't recognize your color.\n\n"+
              'Please try again.');
        return false;
    }
    if(guessInput > target) {
        alert("sorry, your guess is not correct!\n\n" + 
              "Hint: your color is alphabetically higher than mine.\n\n" +
              "Please try again.");
        return false;
    }
    if(guessInput < target) {
       alert("sorry, your guess is not correct!\n\n" + 
              "Hint: your color is alphabetically lower than mine.\n\n" +
              "Please try again.");
        return false;
    }
    if(guessInput == target) {
        var myBody = document.getElementsByTagName("body")[0];
        myBody.style.background = target;
        return true;
    }
}