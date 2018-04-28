var Letter = require("./Letter.js");
function Word(word) {
    //use word as an arguement
    this.word = word;
    //An array of new Letter objects representing the letters of the underlying word
    this.newLetters = [];
    this.letterObjects = [];
    this.printedWord = '';
    //A function that returns a string representing the word. 
    this.makeLetters = function () {
        let wordArr = this.word.split("");
        for (let i = 0; i < wordArr.length; i++) {
            
            //create newLetter objects for each letter in the word
            let newLetter = new Letter(wordArr[i]);
            //push the newLetter objs
            this.letterObjects.push(newLetter);
           
            this.newLetters.push(newLetter.showLetter());
        }
        //this is the word to print
        this.printedWord = this.newLetters.join(" ");
        // console.log('newLetters looks like this: ' + this.newLetters);
        console.log(this.printedWord);
        // console.log('printedWord looks like this: ' + this.printedWord);
        return this.printedWord;
    };
    
    // A function that takes a character as an argument and calls the guess function on each letter object
    this.testGuess = function (guess) {
        var wordArr = '';
        //uses guess and checks it as an arguement in each Letter object using Letter.checkLetter()
        this.letterObjects.forEach(function (letter) {
            letter.checkLetter(guess);
            wordArr += letter.showLetter() + ' ';
            
        })
        console.log(wordArr);
    }
};
var newWord = new Word("zebra");
newWord.makeLetters();
newWord.testGuess('a');
newWord.testGuess('b');