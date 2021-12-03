import { shoppingItem } from './shoppingItem.js';
let shoppingItems = [];

for (let item = 0; item < 15; item++) {
    shoppingItems.push(new shoppingItem(`article ${item}`, (Math.random() * 10), `discription ${item}`, "Koeltas.jpg", "Promo Materiaal"));
}
console.log(shoppingItems);