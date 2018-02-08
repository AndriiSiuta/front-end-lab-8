const elem = '[~]';
const SPACE = ' ';

const N = parseInt(prompt('Enter Value'));
const Cells = 2 * N - 1;
let SPACE_COUNT = (Cells - 1) / 2;

const PYRAMID = [];
let end = Cells - 1;
console.log('SPACE_COUNT:', SPACE_COUNT)

// for(let i = 0; i < N; i++) {
//     PYRAMID[i] = [];
//     for(let j = 0; j < Cells; j++) {
//         PYRAMID[i][j] = 0;
//     }
// }
for(let i = 0; i < N; i++) {
    PYRAMID[i] = [];
    for(let j = 0; j < Cells; j++) {
        for(let k = 0; k < SPACE_COUNT; k++) {
            if(i !== N - 1) {
                PYRAMID[i][k] = SPACE;
                PYRAMID[i][end - k] = SPACE;
            }
        }
        if(PYRAMID[i][j] !== ' ' || i == N - 1) {
            console.log('START')
            console.log('--------------')
            console.log(i,j)
            console.log('--------------')
            console.log('END')
            PYRAMID[i][j] = elem;
        }
    }
}

console.table(PYRAMID)
// console.log(PYRAMID.join('\n'))

