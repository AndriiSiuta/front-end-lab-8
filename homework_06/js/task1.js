const sides = [];
for (let i = 0; i < 3; i++) {
    sides.push(parseFloat(prompt(`Side ${i}`)));
}
[a, b, c] = sides;

/*
* @param {Number} a - firstSide
* @param {Number} b - secondSide
* @param {Number} c - thirdSide
* @return {String} log of result
*/
function checkTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c))  console.log('Incorrect Data');
    else {
        return a === b && b === c
            ? square('Equilateral')
            : a === b || a === c || b === c
                ? square('Isosceles')
                : (a !== b && a !== c && b !== c) && (c ** 2 !== b ** 2 + a ** 2) && (a ** 2 !== b ** 2 + c ** 2)
                && (b ** 2 !== c ** 2 + a ** 2)
                    ? square('Scalene')
                    : (a > b && a > c && (a ** 2 === c ** 2 + b ** 2)) || (b > c && b > a && b ** 2 === c ** 2 + a ** 2)
                    || (c > a && c > b && c ** 2 === a ** 2 + b ** 2)
                        ? square('Right')
                        : square('!!!');
    }
}

/*
* @param {String} type of triangle from upper func
* @return {String} log of result square and type
*/
function square(kindTriangle) {
    let square;
    let halfOfPerimetr = (a + b + c) / 2;
    square = Math.sqrt(halfOfPerimetr * (halfOfPerimetr - a) * (halfOfPerimetr - b) * (halfOfPerimetr - c));
    square = Number.isInteger(square) ? square : square.toFixed(2);
    if(square === 0 || Number.isNaN(square)) console.log('Incorrect data');
    else console.log(`Type of triangle is ${kindTriangle} triangle and square is ${square}`);
}

checkTriangle(a, b, c);
