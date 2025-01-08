import {hashMap} from "./hashmap.js";

const test = hashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.keys())
console.log(test.length())
console.log(test.value());
console.log(test.loadlevel())

test.set('moon', 'silver');

console.log(test.get('moon'))
console.log(test.entries());