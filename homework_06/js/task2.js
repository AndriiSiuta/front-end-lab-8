let amounts = [];
for(let i = 0; i < 2; i++) {
    amounts.push(parseFloat(prompt('Amount:')));
}

[EURO, USD] = amounts;
if(Number.isNaN(EURO) || Number.isNaN(USD)) {
    console.warn('Incorrect data');
}

/*
* @param {Number} Euro
* @param {Number} Dollar
* @return {String} Result of products
*/
function convert(euro, usd) {
   let euroCourse = 34.5116;
   let usdCourse = 27.74240;
   let euroToUah = euro * euroCourse;
   let usdToUah = usd * usdCourse;
   let euroToUsd = euroCourse / usdCourse;
   usdToUah = Number.isInteger(usdToUah) ? usdToUah : usdToUah.toFixed(2);
   euroToUah = Number.isInteger(euroToUah) ? euroToUah : euroToUah.toFixed(2);
   euroToUsd = Number.isInteger(euroToUsd) ? euroToUsd : euroToUsd.toFixed(2);
   console.log(`${euro} euros are equal ${(euroToUah)}UAH,${usd} dollars are equal ${usdToUah}UAH, one euro is equal ${euroToUsd} dollar`);
}

convert(EURO, USD);
