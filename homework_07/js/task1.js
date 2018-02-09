let N = parseInt(prompt('Enter natural number N (0 < N <=20):'));
pyramid = (N) => {
    [SPACE_COUNT, PYRAMID, elemCount] = [N - 1, '', 1];
    for(let i = 0; i < N; i++) {
        if(i != N - 1) {
            PYRAMID += ' '.repeat(SPACE_COUNT * 3);
        }
        PYRAMID += '[~]'.repeat(elemCount);
        PYRAMID += '\n';
        SPACE_COUNT--;
        elemCount += 2;
    }

    console.log(PYRAMID);
};

N = (Number.isInteger(N) && !Number.isNaN(N) && (N > 0 && N <= 20)) ? pyramid(N) : console.warn('Incorrect!');
