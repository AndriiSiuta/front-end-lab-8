const sides = [];
for (let i = 0; i < 3; i++) {
    sides.push(parseInt(prompt(`Side ${i}`)));
}

[a, b, c] = sides;

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
            console.log(`Type of triangle is ${kindTriangle} triangle and square is ${square}`);
            break;
        case 'Equilateral':
            square = a ** 2 * (Math.sqrt(3)) / (4);
            console.log(`Type of triangle is ${kindTriangle} triangle and square is ${square}`);
            break;
        case 'Isosceles':
            return a === b
                ? console.log(`Type of triangle is ${kindTriangle} triangle
            and square is ${1 / 2 * c * Math.sqrt((a + 1 / 2 * c) * (a - 1 / 2 * c))}`)
                : b === c
                    ? console.log(`Type of triangle is ${kindTriangle} triangle
            and square is ${1 / 2 * a * Math.sqrt((b + 1 / 2 * a) * (b - 1 / 2 * a))}`)
                    : a === c
                        ? console.log(`Type of triangle is ${kindTriangle} triangle
            and square is ${1 / 2 * b * Math.sqrt((a + 1 / 2 * b) * (a - 1 / 2 * b))}`)
                        : '';
        case 'Scalene':
            const p = (a + b + c) / 2;
            console.log(`Type of triangle is ${kindTriangle} triangle and square is ${Math.sqrt(p * (p - a) * (p - b) * (p - c))}`);
            break;
    }
}

checkTriangle(a, b, c);
