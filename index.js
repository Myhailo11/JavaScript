// ключове слово імя змінної = значення
// let, const , var - ключові слова.
// const varName = "var name";
// const varname = "sd";

// const currentYear = 2023;
// console.log("Рік:", currentYear);

// const num = 10; //- тип даних number
// const str = "string"; // - тип даних string
// const bool = true; // - тип даних Boolean
// const selectedProduct = null; // - тип даних Null
// let username;
// console.log(username); // - тип даних undefined

// console.log("тип даних:", typeof selectedProduct);

// console.log()
// alert()

// alert("Ми викликали алерт!");

// const isYear = confirm("Зараз 2020 рік ?");
// console.log(isYear);

// const isYear = prompt("Зараз 2020 рік ?");
// console.log(typeof isYear, isYear);

// const x = "10.23px";
// const y = 10;

// console.log(x !== y);

// Додавання +
// Віднімання -
// Множення *
// Ділення /
// Остача від ділення %
// a>b i a<b - більше або меньше
// a>=b i a<=b - більше або дорівнює та  меньше або дорівнює
// a == b - рівність
// a === b - строга рівність
// a != b -  нерівність
// a !== b - строга нерівність

// let value = 9;
// value += 10; //Аналогічно запису value = value + 10
// console.log(value);

// NUMBER --------->
// Number.parseInt(x) - Парсить з рядка ціле число. 10
// Number.parseInt(x) - Парсить з рядка дробове число. 10.23
// console.log(Number.isNaN(y));

// const invalidNuber = Number("wewewe");
// console.log(Number.isNaN(invalidNuber));

// console.log(Math.floor(2.7)); //-2
// console.log(Math.ceil(1.2)); //-2
// console.log(Math.round(1.5)); повертає значення яке заокруглене до найближчого цілого .. 2
// console.log(Math.max(21, 22, 23, 24)); повертає найбільше число
// console.log(Math.min(11, 22, 33)); повертає найменьше число
// console.log(Math.pow(2, 4)); піднесення до степеня
// console.log(Math.random()); повертає рандомне число від 0 до 1
// console.log(Math.round(Math.random() * (10 - 1) + 1));

// STRING --------->
// const strr = "JavaScript";

// const message = "Banana " + "is" + " happy";
// // console.log(1 + +"20");
// ${вираз}

// const fruit = "Banana";
// const color = "yellow";
// const file = "index.js";

// const banana = ${fruit} is ${color};
// console.log(fruit.toLowerCase());
// console.log(file.endsWith(".js"));

// fruit.length - повертає нам кількість символі в рядкові //6
// fruit.toUpperCase() - переводить рядок у верхній регістр
// fruit.toLowerCase() - переводить рядок у нижній регістр
// banana.indexOf("is") - повертає позицію (індекс) якщо не знаходить тоді -1
// banana.includes("is") - перевіряє чи міститься в рядку підрядок
//

// ЛОГІЧНІ ОПЕРАТОРИ && || !

// вираз && вираз
// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// console.log(age > 20 && age < 30); // false

// вираз || вираз
// console.log(age < 40  age > 30); // true  false -> true

// !вираз
// const isOnline = true;
// const isOffline = !isOnline;
// console.log(!true); //-> false
// console.log(isOffline); //-> false

//Розгалуження

// if (умова) {}
// тіло
// }


//const isAge = 10
//if(isAge == 10) {
//   console.log('age = 10');
//}


//const isAge = 10
//if(isAge == 10) {
//    console.log('age = 10');
//} else {
//    console.log('age = ${isAge}');
//}

//const isAge = 10
//if(isAge == 10) {
//   console.log('age = 10');
//} else if {
//    console.log('age = ${isAge}');
//}

 //Вираз якщо умова правдива: вираз якщо умова хибна
//isAge === 10 ? console.log('age = 10') : console.log('age = ${isAge}');

// switch (значення) {
//     case значення:
//         інструкції
//         break;

//         case значення:
//         інструкції
//         break;

//     default:
//         break;
// }

// let cost 
// const subsciption = 'premium'

// switch (subsciption) {
//     case 'free':
//         cost = 0
//         break;

//         case 'pro':
//         cost = 100
//         break;

//         case 'premium':
//         cost = 500
//         break;

//     default: 
//     console.log(' Не вірний тип підписки! ')
//         break;
// }

// console.log("cost" ,cost)

//Область видимості змінних (varisble scope)

// const value = 5

// if(true) {
// console.log ("Блочна область видимості", value);
// let blockVar = 10;
// console.log ("Глобальна область видимості blockVar", blockvar);
// }

// console.log ("Глобальна область видимості blockvar", blockvar);

// console.log ("Глобальна область видимості", value);

// Цикли !

//  while(умова){
//  код циклу
// }

// let couter = 10

// while (couter < 10) {
//     console.log("counter:", couter)
//     couter += 1;
// }

// do {
//     console.log("counter:", couter)
//  couter += 1;
// } while (couter < 10);

// for (ініціалізація; умова; крок) {
//     тіло циклу 
// }

// for (let i = 0; i <= 20; i += 5) {
//     console.log(1);
//     if (i === 10) {
//         console.log('знайшли число 10, перериваємо виконання циклу' )
//         break;
// }


// for (let i = 1; i <= 100; i += 1) {
//        console.log(i);
//        if (i === 50){
//         console.log('знайшли число 50, перериваємо виконання циклу' )
        
//        break;
// }
// }

// МАСИВИ 
// const arr = ["Taras", "Anton", "Maks"]
// console.log(arr);
// arr[1] = "Olga";
// const lastIndex = arr.length - 1;
// console.log(lastIndex);
// //console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// for (const  i of arr) {
//     console.log(i);
// }


//


// let a = 5
// let b = a
// console.log(a);
// console.log(b);

// a = 10
// console.log(a);
// console.log(b);

// let a = ["mango"]
// let b = a

// console.log(a);
// console.log(b);

// a.push("Banana")

// console.log(a);
// console.log(b);

//Методи
//split перетворює рядок в масив розбиваючи його роздільником
//const fruit = "Mango"
//console.log(fruit.split(""));
// const massage = "Js - це цікаво"
// console.log(massage.split(""));
//join обєднує елементи масиву в рядок
//const massage = ["js","це цікаво"]
// includes(value) - перевіряє чи містить масив елемент зі значенням value
// console.log(message.includes("це"))

//push()-додає 1 або дек. елементів в кінеть масиву 
//pop()- видаляє 1 або дек. елементів в кінець масиву
// const numbers = [];
// console.log(numbers);
// numbers.push(1)
// console.log(numbers);
// numbers.push("push")
// console.log(numbers);
// numbers.push(3,4)
// console.log(numbers);
// numbers.pop()
// console.log(numbers);
// numbers.pop()
// console.log(numbers);


//slice(begin,end)-

// const clients = ["Taras", "Anton", "Maks", "Olga"]

// console.log(clients.slice(1,4))

// const newClients = clients.slice(1,4)
// console.log(clients);
// console.log(newClients);

// //splice(position, num)

// const scores = [1, 2, 3, 4, 5]
// const deletedScores =scores.splice(0,3)
// console.log(scores);
// console.log(deletedScores);

// const colors = ["red", "green"]
// colors.splice(2, 0, "yellow")
// console.log(colors);

// //concat

// const oldArr = [1,2,3]
// const newArr = [4,5,6]
// const arr = oldArr.concat(newArr)
// console.log(arr);

// function

// function name(params) {
//     тіло функції
// }

// function sayHello() {
//     console.log("hello World");
// }

// sayHello();    //виклик функції

// function calc (x, y, i) {
//     console.log('Результат множення x y i = ${x*y*i}');
// }


// function newCalc (x,y,i){
//     console.log('Код до ретьорн виконається звичним чином');
//     return x * y * i
//     console.log('Цей лог ніколи не викогається');
// }

// let result = newCalc(32, 33, 10);
// console.log(result);

//Object

// const book = {
//     title:'Oblivion',
//     author:'Bernard',
//     pages:5000,
//     stats: {
//         rating: 9.9,
//         popular:2.2
//     }
// }

// console.log(book.title);
// console.log(book.stats);
// console.log(book.arr);

// function age (x) {
// if (x < 18) {
//     console.log("Ви неповнолітній")
// } else {
//     console.log("Ви повнолітній");
// }
// }

// age(17);// ключове слово імя змінної = значення
// let, const , var - ключові слова.
// const varName = "var name";
// const varname = "sd";

// const currentYear = 2023;
// console.log("Рік:", currentYear);

// const num = 10; //- тип даних number
// const str = "string"; // - тип даних string
// const bool = true; // - тип даних Boolean
// const selectedProduct = null; // - тип даних Null
// let username;
// console.log(username); // - тип даних undefined

// console.log("тип даних:", typeof selectedProduct);

// console.log()
// alert()

// alert("Ми викликали алерт!");

// const isYear = confirm("Зараз 2020 рік ?");
// console.log(isYear);

// const isYear = prompt("Зараз 2020 рік ?");
// console.log(typeof isYear, isYear);

// const x = "10.23px";
// const y = 10;

// console.log(x !== y);

// Додавання +
// Віднімання -
// Множення *
// Ділення /
// Остача від ділення %
// a>b i a<b - більше або меньше
// a>=b i a<=b - більше або дорівнює та  меньше або дорівнює
// a == b - рівність
// a === b - строга рівність
// a != b -  нерівність
// a !== b - строга нерівність

// let value = 9;
// value += 10; //Аналогічно запису value = value + 10
// console.log(value);

// NUMBER --------->
// Number.parseInt(x) - Парсить з рядка ціле число. 10
// Number.parseInt(x) - Парсить з рядка дробове число. 10.23
// console.log(Number.isNaN(y));

// const invalidNuber = Number("wewewe");
// console.log(Number.isNaN(invalidNuber));

// console.log(Math.floor(2.7)); //-2
// console.log(Math.ceil(1.2)); //-2
// console.log(Math.round(1.5)); повертає значення яке заокруглене до найближчого цілого .. 2
// console.log(Math.max(21, 22, 23, 24)); повертає найбільше число
// console.log(Math.min(11, 22, 33)); повертає найменьше число
// console.log(Math.pow(2, 4)); піднесення до степеня
// console.log(Math.random()); повертає рандомне число від 0 до 1
// console.log(Math.round(Math.random() * (10 - 1) + 1));

// STRING --------->
// const strr = "JavaScript";

// const message = "Banana " + "is" + " happy";
// // console.log(1 + +"20");
// ${вираз}

// const fruit = "Banana";
// const color = "yellow";
// const file = "index.js";

// const banana = ${fruit} is ${color};
// console.log(fruit.toLowerCase());
// console.log(file.endsWith(".js"));

// fruit.length - повертає нам кількість символі в рядкові //6
// fruit.toUpperCase() - переводить рядок у верхній регістр
// fruit.toLowerCase() - переводить рядок у нижній регістр
// banana.indexOf("is") - повертає позицію (індекс) якщо не знаходить тоді -1
// banana.includes("is") - перевіряє чи міститься в рядку підрядок
//

// ЛОГІЧНІ ОПЕРАТОРИ && || !

// вираз && вираз
// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// console.log(age > 20 && age < 30); // false

// вираз || вираз
// console.log(age < 40  age > 30); // true  false -> true

// !вираз
// const isOnline = true;
// const isOffline = !isOnline;
// console.log(!true); //-> false
// console.log(isOffline); //-> false

//Розгалуження

// if (умова) {}
// тіло
// }


//const isAge = 10
//if(isAge == 10) {
//   console.log('age = 10');
//}


//const isAge = 10
//if(isAge == 10) {
//    console.log('age = 10');
//} else {
//    console.log('age = ${isAge}');
//}

//const isAge = 10
//if(isAge == 10) {
//   console.log('age = 10');
//} else if {
//    console.log('age = ${isAge}');
//}

 //Вираз якщо умова правдива: вираз якщо умова хибна
//isAge === 10 ? console.log('age = 10') : console.log('age = ${isAge}');

// switch (значення) {
//     case значення:
//         інструкції
//         break;

//         case значення:
//         інструкції
//         break;

//     default:
//         break;
// }

// let cost 
// const subsciption = 'premium'

// switch (subsciption) {
//     case 'free':
//         cost = 0
//         break;

//         case 'pro':
//         cost = 100
//         break;

//         case 'premium':
//         cost = 500
//         break;

//     default: 
//     console.log(' Не вірний тип підписки! ')
//         break;
// }

// console.log("cost" ,cost)

//Область видимості змінних (varisble scope)

// const value = 5

// if(true) {
// console.log ("Блочна область видимості", value);
// let blockVar = 10;
// console.log ("Глобальна область видимості blockVar", blockvar);
// }

// console.log ("Глобальна область видимості blockvar", blockvar);

// console.log ("Глобальна область видимості", value);

// Цикли !

//  while(умова){
//  код циклу
// }

// let couter = 10

// while (couter < 10) {
//     console.log("counter:", couter)
//     couter += 1;
// }

// do {
//     console.log("counter:", couter)
//  couter += 1;
// } while (couter < 10);

// for (ініціалізація; умова; крок) {
//     тіло циклу 
// }

// for (let i = 0; i <= 20; i += 5) {
//     console.log(1);
//     if (i === 10) {
//         console.log('знайшли число 10, перериваємо виконання циклу' )
//         break;
// }


// for (let i = 1; i <= 100; i += 1) {
//        console.log(i);
//        if (i === 50){
//         console.log('знайшли число 50, перериваємо виконання циклу' )
        
//        break;
// }
// }

// МАСИВИ 
// const arr = ["Taras", "Anton", "Maks"]
// console.log(arr);
// arr[1] = "Olga";
// const lastIndex = arr.length - 1;
// console.log(lastIndex);
// //console.log(arr);


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

// for (const  i of arr) {
//     console.log(i);
// }


//


// let a = 5
// let b = a
// console.log(a);
// console.log(b);

// a = 10
// console.log(a);
// console.log(b);

// let a = ["mango"]
// let b = a

// console.log(a);
// console.log(b);

// a.push("Banana")

// console.log(a);
// console.log(b);

//Методи
//split перетворює рядок в масив розбиваючи його роздільником

//const fruit = "Mango"
//console.log(fruit.split(""));
// const massage = "Js - це цікаво"
// console.log(massage.split(""));
//join обєднує елементи масиву в рядок

//const massage = ["js","це цікаво"]
// includes(value) - перевіряє чи містить масив елемент зі значенням value

// console.log(message.includes("це"))

//push()-додає 1 або дек. елементів в кінеть масиву 
//pop()- видаляє 1 або дек. елементів в кінець масиву
// const numbers = [];
// console.log(numbers);
// numbers.push(1)
// console.log(numbers);
// numbers.push("push")
// console.log(numbers);
// numbers.push(3,4)
// console.log(numbers);
// numbers.pop()
// console.log(numbers);
// numbers.pop()
// console.log(numbers);


//slice(begin,end)-

// const clients = ["Taras", "Anton", "Maks", "Olga"]

// console.log(clients.slice(1,4))

// const newClients = clients.slice(1,4)
// console.log(clients);
// console.log(newClients);

// //splice(position, num)

// const scores = [1, 2, 3, 4, 5]
// const deletedScores =scores.splice(0,3)
// console.log(scores);
// console.log(deletedScores);

// const colors = ["red", "green"]
// colors.splice(2, 0, "yellow")
// console.log(colors);

// //concat

// const oldArr = [1,2,3]
// const newArr = [4,5,6]
// const arr = oldArr.concat(newArr)
// console.log(arr);

// function

// function name(params) {
//     тіло функції
// }

// function sayHello() {
//     console.log("hello World");
// }

// sayHello();    //виклик функції

// function calc (x, y, i) {
//     console.log('Результат множення x y i = ${x*y*i}');
// }


// function newCalc (x,y,i){
//     console.log('Код до ретьорн виконається звичним чином');
//     return x * y * i
//     console.log('Цей лог ніколи не викогається');
// }

// let result = newCalc(32, 33, 10);
// console.log(result);

//Object

// const book = {
//     title:'Oblivion',
//     author:'Bernard',
//     pages:5000,
//     stats: {
//         rating: 9.9,
//         popular:2.2
//     }
// }

// console.log(book.title);
// console.log(book.stats);
// console.log(book.arr);

// function age (x) {
// if (x < 18) {
//     console.log("Ви неповнолітній")
// } else {
//     console.log("Ви повнолітній");
// }
// }

// age(17);


//  const car = "yellow"
//  if (car ==="yellow"){
//     console.log("авто жовтого колору");
//  } else {
//     console.log("авто іншого колору") 
    
//  }

//  const {id,user,location} =  car
// console.log(id,user,location)


// let counter = 1000;

// while(counter > 0){
// console.log(counter);
// counter =counter-100;

// }

//  for (let i = 0; i < 3500; i=i+200) {
//     console.log(i)
//  if(i==2000){
//     break
//  }
   
//  }


// const egd =[200, 255, 100,];
// const [,,blue] =rgb;

// const cars = [
//     {
//         name:"Audi",
//         color:"red",
//         year:2020,
//     },
//     {
//         name:"Bmw",
//         color:"yellow",
//         year:2022,   
//     },
//     {
//         name:"Renauti",
//         color:"black",
//         year:2000, 
//     }
// ]

// const cars2 = [
//     {
//         name:"Audi",
//         color:"red",
//         year:2020,
//     },
//     {
//         name:"Bmw",
//         color:"yellow",
//         year:2022,   
//     },
//     {
//         name:"Renauti",
//         color:"black",
//         year:2000, 
//     }
// ]
// const combine = [...cars, ...cars2];

// const audi ={
//     name:"augi",
//     color:"black",
//     year:2020

// }
// const mers ={
//     name:"mers",
//     color:"black",
//     year:2000
// }
// const fiat ={
//     name:"fiat",
//     color:"black",
//     year:2028

// }
// const favoritecars =[
//     fiat,
//     mers,
//     audi,
//     fiat

// ];
// console.log (favoritecars)

// for (let i = 0; i < favoritecars.length; i++) {
//     const element = favoritecars[i];
//     let sum = 0
//      sam=sam + element.year
//     console.log(sam)
    
// }



// function foo(name) {
//     return (`ласкаво просимоч  ${name}`);
// }

// // Функція зворотного виклику (callback, колбек) - це функція, яка передається
// //  іншій функції як аргумент,
// //  а та, в свою чергу, викликає передану функцію.
// // console.log(foo("IVAN"));

// // console.log(foo)


// function highFoo(name, callback) {
//  console.log(`рееструемо гостя ${name}`); 
//  callback(name);  
// }
// highFoo("IVAN",foo);


// // Функція вищого порядку (higher order function) - функція,
// // яка приймає у якості параметрів інші функції або повертає функцію у якості результату.


// highFoo("Bernar", function notify(name) {
//     console.log(Шановни ${name},30)
// }

// якшо колбек-функія - маленка і потрібна для передачі аргументів
// іі можна оголосити безпосередно на момент виклику  в яку передаемо колбек
// така функія буде  доступна тілки у якості значення параметра і білше ніде в коді

// const cars = [
//          {
//              name:"Audi",
//             color:"red",
//              year:2020,
//         },
//          {
//             name:"Bmw",
//             color:"yellow",
//              year:2022,   
//         },
//    {
//              name:"Renauti",
//             color:"black",
//              year:2000, 
//          }
//         ]
    
 
// array.forEach(element => {
//   // тіло функі  
// });

// const NUMBER = [2, 3, 4, 5, 6, 7];

// for (let i = 0; i < NUMBER.length; i++) {
//     console.log("індеx" ${i}, значення${namber}  );
// }
//  namber.log(`forEach інде  ${index}, значення${namber}`);
 
 //forEach - поелементно переберае масив 
 //виклика колбек-функі для кожного елемента масиву 
 //нічого не повертае


//  const names = [
//     "вася",
//     "степан",
//     "кіт",
//     "собака",
//     "тузик"
//  ];
//  names.forEach(function(element,index){
//     console.log(` привіт, мене звати   ${element} !`);
//  })

//  function classic(){
//     return a * b * c
//  };

//  const arrow =(a, b, c) => {
//     return a * b * c
//  };
//  const add = (a) => {
//     return a + 5;
//  }

//  const logMessage = (item, item) => {
//     console.log(`forEach індекс ${ingex}, значення${item}`);
//  };
 
//  namber.forEach(logMessage);


// const planats = ["Земля", "марс", "меркурии"]

// const planatsUpp = planats.map((item) => item.toUpperCase());
// console.log(planatsUpp);
// console.log(planats):

//Array.mep((item)) => {} )
//поелементно перебирае масив
//не зміне оригиналнии масив
//резултат записуе в новии масив
//повертае новии масив однаковоі дожини


const name = studenst.map((stugents) => studenst.name);
console.log(names)


const studenst = [
   { name: polli, score: 0 },
   { name: polli, score: 23 },
   { name: polli, score: 23 },
   { name: polli, score: 12 },
]

const studensMep = stugents.map((students) => students.courses);
console.log("використовуемо метод мап",stugentsMap);
const studentsFletMap = stugents.fletMap((student) => students.courses);
console.log("використовуемо метод меп", studentsFletMap);


const velute = [51, -3, 27, 21, -68, 42, -37];
conts positive = velues.filter((velue)  => value >= 0);
console.log(positive);
const negative = valute.filter((velue) => velue <= 0 )
console.log(negative)

// arr.filter(callbeck)
//не змін
//
//
//
//
//
//



















