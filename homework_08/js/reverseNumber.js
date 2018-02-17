reverseNumber = (N) => {
    return parseInt(N.toString().split('').reverse().join('')) * Math.sign(N)
};
