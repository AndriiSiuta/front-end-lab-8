let N = parseInt(prompt('Enter natural number N (0 < N <=20):'));

pyramid = (N) => {
    let SPACE_COUNT = N - 1;
    let PYRAMID = '';
    let elemCount = 1;
    for(let i = 0; i < N; i++) {
        if(i != N - 1) {
            PYRAMID += ' '.repeat(SPACE_COUNT * 3);

        }
        PYRAMID += '[~]'.repeat(elemCount);
        PYRAMID += '\n';
        SPACE_COUNT--;
        elemCount +=2;
    }

    console.log(PYRAMID);
};

N = (Number.isInteger(N) && !Number.isNaN(N) && (N > 0 && N <= 20)) ? pyramid(N) : console.warn('Incorrect!');

