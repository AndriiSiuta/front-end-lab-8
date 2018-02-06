const sides = [];
for (let i = 0; i < 3; i++) {
    sides.push(parseInt(prompt(`Side ${i}`)));
}

[a, b, c] = sides;

/*
* @param {Number} a
* @param {Number} b
* @param {Number} c
* @return {String} log of result
* */
function checkTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 'Incorrect Data';
    else {
        return a === b && a === c && b === c
            ? square('Equilateral')
            : a === b || a === c || b === c
                ? square('Isosceles')
                : (a !== b && a !== c && b !== c) && (c ** 2 !== b ** 2 + a ** 2) && (a ** 2 !== b ** 2 + c ** 2)
                && (b ** 2 !== c ** 2 + a ** 2)
                    ? square('Scalene')
                    : (a > b && a > c && (a ** 2 === c ** 2 + b ** 2)) || (b > c && b > a && b ** 2 === c ** 2 + a ** 2)
                    || (c > a && c > b && c ** 2 === a ** 2 + b ** 2)
                        ? square('Right')
                        : square('');
    }
}

function square(kindTriangle) {
    let square;
    switch (kindTriangle) {
        case 'Right':
            square = (a > b && a > c)
                ? 1 / 2 * c * b
                : (b > c && b > a)
                    ? 1 / 2 * c * a
                    : (c > a && c > b)
                        ? 1 / 2 * a * b
                        : '';
            square = Number.isInteger(square) ? square : square.toFixed(2);
            console.log(`Type of triangle is ${kindTriangle} triangle and square is ${square}`);
            break;
        case 'Equilateral':
            square = a ** 2 * (Math.sqrt(3)) / (4);
            square = Number.isInteger(square) ? square : square.toFixed(2);
            console.log(`Type of triangle is ${kindTriangle} triangle and square is ${square}`);
            break;
        case 'Isosceles':
            if (a === b) {
                square = 1 / 2 * c * Math.sqrt((a + 1 / 2 * c) * (a - 1 / 2 * c));
                square = Number.isInteger(square) ? square : square.toFixed(2);
                console.log(`Type of triangle is ${kindTriangle} triangle
            and square is ${square}`)
            }

            if (b === c) {
                square = 1 / 2 * a * Math.sqrt((b + 1 / 2 * a) * (b - 1 / 2 * a));
                square = Number.isInteger(square) ? square : square.toFixed(2);
                console.log(`Type of triangle is ${kindTriangle} triangle
            and square is ${square}`)
            }

            if (a === c) {
                square = 1 / 2 * b * Math.sqrt((a + 1 / 2 * b) * (a - 1 / 2 * b));
                square = Number.isInteger(square) ? square : square.toFixed(2);
                console.log(`Type of triangle is ${kindTriangle} triangle and square is ${square}`)
            }
            break;
        case 'Scalene':
            const p = (a + b + c) / 2;
            square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
            square = Number.isInteger(square) ? square : square.toFixed(2);
            console.log(`Type of triangle is ${kindTriangle} triangle and square is ${square}`);
            break;
    }
}

checkTriangle(a, b, c);
