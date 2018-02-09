callToStart = () => {
    let startPlay = confirm('Do u want to play a game?');
    if (startPlay) {
        startGame();
    } else {
        console.log('U did not become a millionaire');
    }
};

continueGame = (startPrize, startPrizes, attempts, limit) => {
    let userApprove = confirm('Do u want to continue a game?');
    if(userApprove) {
        startGame(startPrize, startPrizes, attempts, limit);
    } else {
        console.log(`Your prize is: ${startPrize}`)
    }
};

class User {
    constructor() {

    }
    setNewPrize(prize) {
        this.userPrize = prize;
    }
    getPrize() {
        return this.userPrize;
    }
    getUserChoice(limit) {
        return this.userChoice = +prompt(`Choose number in range [0, ${limit - 1}]`)
    }
}

class GameController {
    constructor(prizes, attempts, limit, winNumber) {
        this.prizes = prizes;
        this.attempts = attempts;
        this.limit = limit;
        this.winNumber = winNumber;
    }
    setNewPrizes(multiplier) {
        this.prizes.forEach((prize) => prize * multiplier);
    }
    getNewPrizes(i) {
        return this.prizes[i];
    }
    resetAttempts() {
        return this.attempts = 3;
    }
    generateWinNumber() {
        return this.winNumber = Math.floor(Math.random() * this.limit);
    }
    setNewLimit(limit) {
        this.limit = limit * 2;
    }
    getLimit() {
        return this.limit;
    }
    tryAgain(prize) {
        console.log(`Your prize is: ${prize}`);
        callToStart();
    }
}

startGame = (startPrize = 0, startPrizes = [10, 5, 2], attempts = 3, limit = 6) => {
    let User = new User();
    let Game = new GameController(startPrizes, attempts);
    let winNumber = Game.generateWinNumber();

    for(let i = Game.resetAttempts(); i > 0; i++) {
        if(User.getUserChoice(Game.getLimit()) === winNumber && i > 0) {
            User.setNewPrize(Game.getNewPrizes(i));
            continueGame(User.getPrize(), Game.setNewPrizes(3), Game.resetAttempts(),
                Game.setNewLimit(limit));

        } else {
            Game.tryAgain(User.getPrize());
        }
    }
};

callToStart();

