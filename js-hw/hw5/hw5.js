// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let s =  (a, b) => a * b
// console.log(s(2,3))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let s = (r)=>{
//     let pi = 3.14;
//     return pi*Math.pow(r,2)
//
// }
// console.log(s(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// let s =(h, r)=>{
//     let pi = 3.14
//     return 2*pi*h*r
// }
// console.log(s(2,4))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let list = [true, false, `111`, `helo okten`, 154, -254]
//
// let listLog = (array)=>{
//     for (let item of array) {
//         console.log(item)
//     }
// }
// lisLog(list)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let writer = (txt,count)=>{
//     for (let i = 0; i < count; i++) {
//     document.write(`<p>${txt}</p>`)
//     }
// }
//     writer(`lorem`,5)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listWriter=(txt)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`<li>${txt}</li>`)
//     document.write(`</ul>`)
// }
// listWriter(`lorem`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let superListWriter = (txt, count) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// superListWriter(`lorem`, 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let list = [true, false, `111`, `helo okten`, 154, -254]
// let listCreator = (array)=>{
//     document.write(`<ul>`)
//     for (let item of array) {
//     document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// listCreator(list)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let users = [
//     {name: 'vasya', age: 31, id: 2},
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
// let userListWriter = (array) => {
//     for (let object of array) {
//         document.write(`<div>
//        <ul>
//           <li> name: ${object.name}</li>
//           <li> age: ${object.age}</li>
//           <li> id: ${object.id}</li>
//        </ul>
// </div>`)
//     }
// }
// userListWriter(users)

// - створити функцію яка повертає найменьше число з масиву

// let array = [1, -10, 11]
// let minNumChecker =(numbers)=>{
//     let min = numbers[0]
//     for (let number of numbers) {
//         if (min > number){
//             min=number
//             return number
//         }
//     }
// }
// console.log(minNumChecker(array))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

// let numbers =[1,2,10]
// let sumArray = (arr)=>{
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//          sum += arr[i];
//     }
//     console.log(sum)
// }
// sumArray(numbers)

// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let numbers =[1,2,10]
// let swap = (arr, index1, index2)=>{
//     let num1 = arr[index1]
//     let num2 = arr[index2]
//
//     arr[index1] = num2
//     arr[index2] = num1
//     console.log(numbers)
// }
// swap(numbers, 2,0)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


// let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
//
//     for (let currencyValue of currencyValues) {
//         if (currencyValue.currency === exchangeCurrency){
//
//             return  sumUAH / currencyValue.value
//
//
//         }
//     }
//
// }
// console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))



















