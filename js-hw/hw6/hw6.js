// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
//
// console.log(str1.length)
// console.log(str2.length)
// console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
//
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD'
// let str2 = 'LOREM IPSUM'
// let str3 = 'JAVASCRIPT IS COOL'
//
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())
// console.log(str1.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
//
// console.log(str.replace(`  `,  ``).replace(` ` , ``))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//  let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let separator = ` `
// let stringToArray = (str, separator)=>{
//
//     let srtArray = str.split(separator)
//
//     return srtArray
//
// }
// console.log(stringToArray(str,separator))


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let  nums = [10,8,-7,55,987,-1011,0,1050,0];
//
// let numsToStrings =nums.map((num)=>num.toString())
// console.log(numsToStrings)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = (array,value)=>{
//     if (value ==='descending'){
//         console.log(array.sort((a,b)=>{
//             return a-b
//         }))
//     }
//     if (value==='ascending'){
//         console.log(array.sort((a, b)=>{
//             return b-a
//         }))
//     }
// }
//
// sortNums(nums,'ascending')       // [3,11,21]
// sortNums(nums,'descending')      // [21,11,3]

// ==========================


// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// -- відсортувати його за спаданням за monthDuration

// let sorteredArray = coursesAndDurationArray.sort((a, b)=>{
//     return b.monthDuration - a.monthDuration
// })
// console.log(sorteredArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filteredArray = coursesAndDurationArray.filter(item => item.monthDuration > 5)
// console.log(filteredArray)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let mappedArray = coursesAndDurationArray.map((value, index)=>{
//     return {id :index+1, title: value.title,monthDuration: value.monthDuration }
// })
// console.log(mappedArray)

// =========================


//     описати колоду карт (від 6 до туза без джокерів)

// let cards = [
//     {
//         cardSuit: 'spade',
//         value: '6',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '7',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '8',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '9',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: '10',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black',
//     },
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: '6',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: '7',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: '8',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: '9',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: '10',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: 'jack',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: 'queen',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: 'king',
//         color: 'black',
//     },
//     {
//         cardSuit: 'club',
//         value: 'ace',
//         color: 'black',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '6',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '7',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '8',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '9',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: '10',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red',
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '6',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '7',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '8',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '9',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: '10',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red',
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red',
//     },
// ]

// - знайти піковий туз

// console.log(cards.find(value => value.value === `ace` && value.cardSuit === `spade`))

// - всі шістки

// перший спосіб

// let allSix = cards.filter(value => value.value === `6`)
// console.log(allSix)

// другий спосіб

// for (let card of cards) {
//     if (card.value === `6`){
//         console.log(card)
//     }
// }

// - всі червоні карти

// перший спосіб

// let allRed = cards.filter(value => value.color === `red`)
// console.log(allRed)

// другий спосіб

// for (let card of cards) {
//     if (card.color === `red`){
//         console.log(card)
//     }
// }

// - всі буби

// перший спосіб

// let allDiamonds = cards.filter(value => value.cardSuit === `diamond`)
// console.log(allDiamonds)

// другий спосіб

// for (let card of cards) {
//     if (card.cardSuit === `diamond`){
//         console.log(card)
//     }
// }

// - всі трефи від 9 та більше

// let clubsFromNine = cards.filter( card => {
//         if (card.cardSuit ===`clubs` && card.value !==`6` && card.value !==`7` && card.value !==`8`){
//         return 1
//
//         }
//
// })
// console.log(clubsFromNine)


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//


// =========================


//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт


// let cardSort = cards.reduce((accumulator, card) => {
//     if (card.cardSuit === `spade`) {
//         accumulator.spades.push(card)
//     }
//     if (card.cardSuit === `diamond`) {
//         accumulator.diamonds.push(card)
//     }
//     if (card.cardSuit === `heart`) {
//         accumulator.hearts.push(card)
//     }
//     if (card.cardSuit === `club`) {
//         accumulator.clubs.push(card)
//     }
// return accumulator
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
// console.log(cardSort.clubs)
// console.log(cardSort.spades)
// console.log(cardSort.diamonds)
// console.log(cardSort.hearts)



// =========================


//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let sass = coursesArray.filter((course)=>{
    return course.modules && course.modules.includes(`sass`)
})
console.log(sass)


// --написати пошук всіх об'єктів, в який в modules є docker

let docker = coursesArray.filter((course)=>{
    return course.modules && course.modules.includes(`docker`)
})
console.log(docker)