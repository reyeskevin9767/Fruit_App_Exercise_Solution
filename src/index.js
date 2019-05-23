// import {choice, remove} from './helpers';
// import fruits from './foods';

// var randomFruit = choice(fruits);
// var fruitLeft = remove(fruits, randomFruit);


// console.log("I would like one " + randomFruit, ", please");
// console.log("Here you go: " + randomFruit);
// console.log("Delicious! May I have another?");
// console.log("I'm sorry, we're all out. We have " + fruitLeft+ " left.");



import foods from './foods';
import {choice, remove} from './helpers';

let fruit = choice(foods);

console.log(`I would like one " + ${fruit}, please`);
console.log(`Here you go: " + ${fruit} `);
console.log("Delicious! May I have another?");

let remaining = remove(foods, fruit);
console.log(`I'm sorry, we're all out. We have ${remaining.length} other foods left.`);