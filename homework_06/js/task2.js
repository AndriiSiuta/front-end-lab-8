let amounts = [];
for(let i = 0; i < 2; i++) {
    amounts.push(parseInt(prompt('Amount:')));
}

[EURO, USD] = amounts;

/*
* @param {Number} Euro
* @param {Number} Dollar
* @return {String} Result of products
*/
function convert(euro, usd) {
   let euroCourse = 34.5116;
   let usdCourse = 27.74240;
   console.log(`${euro} euros are equal ${(euro * euroCourse).toFixed(2)}UAH,${usd} dollars are equal
   ${(usd * usdCourse).toFixed(2)}UAH, one euro is equal ${(euroCourse/usdCourse).toFixed(2)} dollar`);
}

convert(EURO, USD);
