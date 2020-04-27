"use strict";
// interface HashTable {
//   [index: string]: string | number;
// }
const homer = {
    name: "Homer Simpson",
};
console.log(homer.phrase);
const prop = "phrase";
homer[prop] = "Moe, me vê uma Duff Beer.";
console.log(homer);
for (let key in homer) {
    const value = homer[key];
    console.log(key, ": ", value);
}
