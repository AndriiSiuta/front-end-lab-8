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
    console.log(userApprove);
    if (userApprove) {
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
        return +prompt(`Choose number in range [0, ${limit - 1}]`)
    }
}

class GameController {
    constructor(prizes, limit) {
        this.prizes = prizes;
        this.limit = limit;
    }

    setNewPrizes(multiplier) {
        this.prizes.forEach((prize) => prize * multiplier);
    }

    getNewPrizes(i) {
        return this.prizes[i];
    }

    resetAttempts() {
        return 3;
    }

    generateWinNumber() {
        return Math.floor(Math.random() * this.limit);
    }

    setNewLimit(limit) {
        this.limit = limit * 2;
        console.log(this.limit);
    }

    getLimit() {
        return this.limit;
    }

    tryAgain(prize) {
        console.log(`Your prize is: ${prize}`);
        callToStart();
    }
}


function startGame(startPrize = 0, startPrizes = [10, 5, 2], attempts = 3, limit = 6) {
    let userProfile = new User();
    let Game = new GameController(startPrizes, limit);
    let winNumber = Game.generateWinNumber();
    console.log(winNumber);

    for (let i = 3; i > 0; i--) {
        if (userProfile.getUserChoice(Game.getLimit()) === winNumber && i > 0) {
            userProfile.setNewPrize(Game.getNewPrizes(i));
            Game.setNewLimit(limit);
            continueGame(userProfile.getPrize(), Game.setNewPrizes(3), Game.resetAttempts(),
                Game.getLimit());
        }
        prompt(`Attempts left${i}
                PossiblePrize${Game.getNewPrizes(i)}`)
    }
    Game.tryAgain(userProfile.getPrize());
};

callToStart();

