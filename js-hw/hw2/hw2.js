// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


// let arr=[`vasya`, 123 , -312, true, false, `3111`, `asdw`, 0]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])
// console.log(arr[6])
// console.log(arr[7])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 ={
//     title: `title`,
//     pageCount: 111,
//     genre: `genre`
// }
// console.log(book1)
//
// let book2 ={
//     title: `title2`,
//     pageCount: 222,
//     genre: `genre2`
// }
// console.log(book2)
//
// let book3 ={
//     title: `title3`,
//     pageCount: 333,
//     genre: `genre3`
// }
// console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

// let book1 ={
//     title: `title`,
//     pageCount: 111,
//     genre: `genre`,
//     authors: [
//        {
//         name: `vasya`,
//         age: 123
//         }
//     ]
// }
// console.log(book1)
//
// let book2 ={
//     title: `title2`,
//     pageCount: 222,
//     genre: `genre2`,
//     authors: [
//         {
//             name: `olya`,
//             age: 234
//         }
//     ]
// }
// console.log(book2)
//
// let book3 ={
//     title: `title3`,
//     pageCount: 333,
//     genre: `genre3`,
//     authors: [
//        {
//             name: `olya`,
//             age: 345
//         }
//     ]
// }
// console.log(book3)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let users;
// users = [
//     {
//         name: `vasya`,
//         username: `vasya228`,
//         password: `vasya1987`
//
//     },
//     {
//         name: `olya`,
//         username: `olya228`,
//         password: `olya1987`
//
//     }, {
//         name: `kolya`,
//         username: `kolya228`,
//         password: `kolya1987`
//
//     }, {
//         name: `nazar`,
//         username: `nazar228`,
//         password: `nazar1987`
//
//     }, {
//         name: `yura`,
//         username: `yura228`,
//         password: `yura1987`
//
//     }, {
//         name: `marta`,
//         username: `marta228`,
//         password: `marta1987`
//
//     }, {
//         name: `petro`,
//         username: `petro_rat`,
//         password: `petro2006`
//
//     }, {
//         name: `eugen`,
//         username: `eugen228`,
//         password: `eugen1987`
//
//     }, {
//         name: `ivan`,
//         username: `ivan228`,
//         password: `ivan1987`
//
//     }, {
//         name: `mary`,
//         username: `mary228`,
//         password: `mary1987`
//
//     },
// ]
// console.log(users[0].password)
// console.log(users[1].password)
// console.log(users[2].password)
// console.log(users[3].password)
// console.log(users[4].password)
// console.log(users[5].password)
// console.log(users[6].password)
// console.log(users[7].password)
// console.log(users[8].password)
// console.log(users[9].password)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt(`Enter number`);
//
// if (x !== 0) {
//     console.log(`correct`)
// }else{
//     console.log(`incorrect`)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt(`enter time`);
// if (time < 15){
//     console.log(`first part`)
// }else if (time > 14 && time < 30){
//     console.log(`second part`)
// }else if (time > 29 && time < 45){
//     console.log(`third part`)
// }else if (time > 44 && time < 60){
//     console.log(`fourth part`)
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let  day = +prompt(`Enter day`);
// if (day <= 11) {
//     console.log(`first decade`)
// } else if (day > 11 && day <= 21) {
//     console.log(`second decade`)
// } else if (day > 11 && day <= 31) {
//     console.log(`third decade`)
// }


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let weekday = +prompt(`enter weekday`)
// switch (weekday){
//     case  1:
//         document.write(`monday`);
//         break;
//
//         case 2:
//         document.write(`tuesday`);
//         break;
//
//     case  3:
//         document.write(`wednesday`);
//         break;
//
//     case  4:
//         document.write(`thursday`);
//         break;
//
//     case  5:
//         document.write(`friday`);
//         break;
//
//     case  6:
//         document.write(`saturday`);
//         break;
//
//     case 7:
//         document.write(`sunday`);
//         break;
// default:
//     document.write(`you have not entered a day of the week`)
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt(`enter first number`)
// let number2 = +prompt(`enter second number`)
//
// if (number1 === number2){
//     console.log(`числа рівні`)
// }else if (number1 < number2){
//     console.log(number2)
// }else if (number1 > number2){
//     console.log(number1)
// }



//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)




//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5){
//     console.log(`super`)
// }else {
//     console.log(`not super`)
// }
// if (coursesAndDurationArray[1].monthDuration > 5){
//     console.log(`super`)
// }else {
//     console.log(`not super`)
// }
// if (coursesAndDurationArray[2].monthDuration > 5){
//     console.log(`super`)
// }else {
//     console.log(`not super`)
// }
// if (coursesAndDurationArray[3].monthDuration > 5){
//     console.log(`super`)
// }else {
//     console.log(`not super`)
// }
// if (coursesAndDurationArray[4].monthDuration > 5){
//     console.log(`super`)
// }else {
//     console.log(`not super`)
// }
// if (coursesAndDurationArray[5].monthDuration > 5){
//     console.log(`super`)
// }else {
//     console.log(`not super`)
// }