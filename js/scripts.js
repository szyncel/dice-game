

function Game() {
    this.totalPoints = document.querySelectorAll('#totalPoints');
    this.actualPoints = document.querySelectorAll('.point');
    this.buttons = document.querySelectorAll('.lead');
    this.playersName = document.querySelectorAll('.name');
    this.boneImg = document.querySelector('.rounded');
    this.newGameButton = this.buttons[0];
    this.rollDiceButton = this.buttons[1];
    this.saveButton = this.buttons[2];

    this.actualTurn = 1;
    this.isActive = true;
    this.diceNumber;


    this.player1Results = {
        total: 0,
        actual: 0
    };
    this.player2Results = {
        total: 0,
        actual: 0
    };

    this.newGameButton.onclick = function () {
        this.reset();

    }.bind(this);

    this.rollDiceButton.onclick = function () {
        // if (this.player1Results.actual !== 0 || this.player2Results.actual !== 0) {
        if (this.isActive) {
            if (this.actualTurn === 1) this.player1Results.actual = this.diceNumber = randomNum(1, 6);
            else this.player2Results.actual = this.diceNumber = randomNum(1, 6);
            this.animateDice();

            this.updateActualPoints();
            // }
        }
    }.bind(this);



    this.saveButton.onclick = function () {
        if (this.player1Results.actual !== 0 || this.player2Results.actual !== 0) {

            if (this.actualTurn === 1) {
                this.updateTotalPoints();

                this.actualTurn = 2;
                this.playersName[0].classList.remove('actualTurn');
                this.playersName[1].classList.add('actualTurn');
            } else {
                this.updateTotalPoints();

                this.actualTurn = 1;
                this.playersName[1].classList.remove('actualTurn');
                this.playersName[0].classList.add('actualTurn');
            }
        }

        this.isActive = true;

    }.bind(this);
}



Game.prototype.animateDice = function () {

    document.querySelector('.rounded').src = "img/" + this.diceNumber + ".png";

}


Game.prototype.updateActualPoints = function () {

    if (this.actualTurn === 1) this.actualPoints[0].innerHTML = this.player1Results.actual;
    else this.actualPoints[1].innerHTML = this.player2Results.actual;
    this.buttons[2].classList.remove('disabled');
    this.buttons[1].classList.add('disabled');
    this.isActive = false;
}

Game.prototype.updateTotalPoints = function () {
    this.buttons[2].classList.add('disabled');
    this.buttons[1].classList.remove('disabled');

    if (this.actualTurn === 1) {
        this.player1Results.total += this.player1Results.actual;
        this.totalPoints[0].innerHTML = this.player1Results.total;
        this.player1Results.actual = 0;
        this.actualPoints[0].innerHTML = this.player1Results.actual;
    }
    else {
        this.player2Results.total += this.player2Results.actual;
        this.totalPoints[1].innerHTML = this.player2Results.total;
        this.player2Results.actual = 0;
        this.actualPoints[1].innerHTML = this.player2Results.actual;

    }

}


Game.prototype.reset = function () {
    this.actualTurn = 1;
    this.player1Results = {
        total: 0,
        actual: 0
    };
    this.player2Results = {
        total: 0,
        actual: 0
    };

    this.actualPoints[0].innerHTML = this.player1Results.actual
    this.actualPoints[1].innerHTML = this.player2Results.actual
    this.totalPoints[0].innerHTML = this.player1Results.total;
    this.totalPoints[1].innerHTML = this.player2Results.total;


}



function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var game = new Game();