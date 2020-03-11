#game {
    margin-top: 3em;
    margin-top: 2em;
    z-index: 1;
    text-align: left;
}
@@ -53,27 +53,26 @@ img {
/* Creates the speech bubble */



.footer,

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
    var checkDouble = guessedLetters.includes(userGuess);
    // console.log(checkDouble);
    if (checkDouble === true){
        console.log("double letter");
        alert("That letter has already been guessed, would you try again?");
        return false;
    }
    else if (check === false) {
        ouch.play();
        alert("That was not a valid guess, try again?");
        return false;
@@ -83,8 +89,10 @@ document.onkeyup = function(event) {

        }
        return false;
    } else {
        } 
    else {
        alert("Oops, we have an error");
    }


}; 