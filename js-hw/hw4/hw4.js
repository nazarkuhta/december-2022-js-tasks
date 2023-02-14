// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc(a, b){
//     return a * b
// }
//
// console.log(calc(2,3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calc(r) {
//     return r * 3.14
// }
// console.log(calc(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calc(h, r) {
//     return 2 * 3.14 * r * h
// }
//
// console.log(calc(2, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// function arrayWriter(array) {
//     for (let arrayElement of array) {
//         console.log(arrayElement)
//     }
// }
//
// arrayWriter(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function writer(text) {
//     document.write(`<p>${text}</p>`)
// }
// writer(`ggggggg`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listWriter(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// listWriter(`lorem`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function writer(text) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`)
// }
//
// writer(`helo okten`)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [1 , `okten`, true]
//
//
// function listWriter(array) {
//     document.write(`<ul>`)
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
//
// listWriter(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31, id:2 },
//     {name: 'petya', age: 30, id: 21},
//     {name: 'kolya', age: 29, id: 32},
//     {name: 'olya', age: 28, id: 23},
//     {name: 'max', age: 30, id: 6},
//     {name: 'anya', age: 31, id: 75},
//     {name: 'oleg', age: 28, id: 34},
//     {name: 'andrey', age: 29, id: 222},
//     {name: 'masha', age: 30, id: 98},
//     {name: 'olya', age: 31, id: 11},
//     {name: 'max', age: 31, id: 13}
// ];
//
// function userListWriter(users, id, name, age) {
//     for (let user of users) {
//         document.write(`<div>
// <ul>
// <li>id ${user.id}</li>
// <li>name ${user.name}</li>
// <li>age ${user.age}</li>
// </ul>
// </div>`)
//     }
// }
// userListWriter(users)

// - створити функцію яка повертає найменьше число з масиву

// function minNum(numbers){
//     let min = numbers[0]
//     for (let number of numbers) {
//         if (min > number){
//             min = number
//         }
//     }
//     return min
// }
// console.log(minNum([-1,1,-10,23]))




// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let numbers = [1,10,54]
//
// function sumArray(array) {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//          sum += array[i];
//     }
//     console.log(sum)
// }
// sumArray(numbers)


// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// function swap(arr, index1, index2) {
//     let n1 = arr[index1]
//     let n2 = arr[index2]
//
//     arr[index1] = n2
//     arr[index2] = n1
// }


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250




// function exchange(sumUAH,currencyValues,exchangeCurrency){
//
//     for (let currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency){
//             return sumUAH/ currencyValue.value
//         }
//     }
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))