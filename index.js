let a = 40000;
let b = 22000;

alert (a + b);

let c = 'Владивосток';
let d = '2000';
console.log (`${ c } ${ d }`);
console.log (c + ' ' + d);

let hours = (128 + 254 + 137 + 201) / 60;
console.log((128 + 254 + 137 + 201) / 60);
console.log (`number of hours: ${ hours }`);

let e = 2;
let f = 5;
console.log (Math.pow(e,f));

console.log ("Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!");

const greetings = 'Привет, ';
const name = 'Кот!';
let message = greetings + name; 
console.log (message);

let time = 34;
console.log ('Старт поездки. Осталось минут: ' + time);
time = time - 15;
console.log ('Немного сториз в соцсетях. Осталось минут: ' + time);
time = time - 10;
console.log ( 'Немного не новостей, но событий. Осталось минут: ' + time);
time = 0;
console.log ('Вы приехали. Добро пожаловать в Москву.');

let fahrenheit = 451;
let celcius = (fahrenheit - 32) / 1.8;
console.log (`${fahrenheit} градуса по Фаренгейту - это ${celcius} градуса по Цельсию.`);