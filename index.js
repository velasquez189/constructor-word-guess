var Word = require('./Words.js');
var words = ["hello", "world", "FudgeFace", "Turtle"];
var ranWord = "";
var inquirer = require('inquirer');



function startGame() {
    ranWord = words[Math.floor(Math.random() * words.length)];
    wordArray = Array.from(ranWord);
    inquirer.prompt([
{
name: "Letter",
message: "Guess a letter"
},
    ]).then(function(answers){

    });
};