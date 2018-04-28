// Constructor function for creating letter objects.
function Letter(charVal) {
    this.charVal = charVal;
    this.guessed = false;

    // Function returning underlying character when letter has been guessed.    
    this.showLetter = function () {
        if (this.guessed) {
            // console.log(this.charVal);

            return this.charVal;
        } else {
            // console.log("_");
            return "_";
        };
    };

    // Function that takes a letter as an argument and checks against underlying character.
    this.checkLetter = function (letter) {
        if (letter === this.charVal) {
            this.guessed = true;
        }
    };
}

module.exports = Letter;

// function test() {
//     var newLetter = new Letter("a");
//     var andreasLetter = new Letter('v');
//     andreasLetter.showLetter();
//     andreasLetter.checkLetter('d');
//     andreasLetter.showLetter();
//     andreasLetter.checkLetter('v');
//     andreasLetter.showLetter()
// }
// test();

