game = (limit, startPrize, userPrize) => {
    let winNumber = Math.floor(Math.random() * limit);
    let userChoice;
    console.log(winNumber)
    let win = false;
    let gamePrize = startPrize;
    for (let i = 3; i > 0; i--) {
        userChoice = prompt(`Choose a number in range [0: ${limit - 1}]
                              Attempts left: ${i}
                              totalPrize: ${userPrize}$
                              Possible prize on current attempt: ${startPrize}$`);
        if(!userChoice) {
            break;
        } else userChoice = +userChoice;
        if (userChoice === winNumber && i > 0) {
            userPrize += startPrize;
            win = true;
            break;
        }
        win = false;
        startPrize = Math.floor(startPrize / 2);
    }

    if(win) {
        let keepPlay = confirm(`Do u want to continue a game`);
        limit = (limit * 2) - 1;
        gamePrize *= 3;
        keepPlay = keepPlay
            ? game(limit, gamePrize, userPrize)
            : console.log(`Thank you for a game. Your prize is ${userPrize}$`);
    } else {
        console.log(`Thank you for a game. Your prize is ${userPrize}$`);
        play();
    }
};

play = () => {
    let startPlay = confirm('Do u want to play a game?');
    if (startPlay) {
        let limit = 6;
        let userPrize = 0;
        let startPrize = 10;
        game(limit, startPrize, userPrize);
    } else console.log('U did not become a millionaire');
};

play();

