// function reverseNumber () {
//     let result = [];
//     do {
//         if((arguments[0] % 10 === 0 || arguments[0] % 10 === -0) && result.length === 0) {
//             console.log(`0 can't be pushed!`)
//         } else result.push(arguments[0] % 10);
//         arguments[0] = parseInt(arguments[0] / 10);
//         console.log(arguments[0])
//     } while (arguments[0]);
//     return result.join('');
// }
//

reverseNumber = (N) => {
    return parseInt(N.toString().split('').reverse().join('')) * Math.sign(N)
};

console.log(reverseNumber(-500500500));
