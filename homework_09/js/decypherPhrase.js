decypherPhrase = (obj, str) => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
       newObj[obj[key]] = key;
    });
    return cypherPhrase(newObj, str);
};

let map = {a: `o`, c: `d`, t: `g`}
console.log(decypherPhrase(map, `kiggy dog`)); // -> “kitty cat”
