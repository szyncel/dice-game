

function Game() {
    this.totalPoints = document.querySelectorAll('#totalPoints');
    this.actualPoints = document.querySelectorAll('.point');
    this.buttons = document.querySelectorAll('.lead');
    this.newGameButton = this.buttons[0];
    this.rollDiceButton = this.buttons[1];
    this.saveButton = this.buttons[2];
    this.boneImgs;

    this.player1Results = {
        all: 0,
        actual: 0
    };
    this.player2Results = {
        all: 0,
        actual: 0
    };

    this.newGameButton.onclick = function () {

    }

    this.rollDiceButton.onclick = function () {
        var number = randomNum(1, 6);

        console.log(number);

    }

    this.saveButton.onclick = function () {

    }



}


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var game = new Game();