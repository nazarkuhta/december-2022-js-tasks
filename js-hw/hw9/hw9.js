// // - створити блок,
//
// let block =document.createElement(`div`)
// let blockTxt = document.createElement(`p`)
// blockTxt.innerText = `Hello Okten`
//
//
// //     - додати йому класи wrap, collapse, alpha, beta
//
// block.classList.add(`wrap`,`collapse`)
// blockTxt.classList.add(`alpha`,`beta`)
//
// // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//
// block.style.background = `silver`
// blockTxt.style.color = `cornflowerblue`
//
// // - додати цей блок в body.
//
// block.appendChild(blockTxt)
// document.body.appendChild(block)
//
// // - клонувати його повністю, та додати клон в body.
//
// let blockClone = block.cloneNode(true)
// document.body.appendChild(blockClone)

// // - Є масив:
// let array = ['Main', 'Products', 'About us', 'Contacts']
// // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//
// let list = document.createElement(`ul`)
//
// for (let item of array) {
//     let itemOfList = document.createElement(`li`)
//     itemOfList.innerText = item
//     list.appendChild(itemOfList)
// }
// document.body.appendChild(list)

// // - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // Завдання робити через цикли.
//
// let courseHolder = document.createElement(`div`)
//
// for (let object of coursesAndDurationArray) {
//     let courseBlock = document.createElement(`div`)
//     let courseTitle = document.createElement(`h2`)
//     courseTitle.innerText = object.title
//     courseBlock.appendChild(courseTitle)
//     let courseMonthDuration = document.createElement(`p`)
//     courseMonthDuration.innerText = `month duration: ${object.monthDuration}`
//     courseBlock.appendChild(courseMonthDuration)
//     courseHolder.appendChild(courseBlock)
// }
// document.body.appendChild(courseHolder)

// =========================
//
// //     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // //
// // //
// // // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// // //     Завдання робити через цикли.
// //
// let courseHolder = document.createElement(`div`)
// courseHolder.classList.add(`holder`)
//
// for (let object of coursesAndDurationArray) {
//     let courseBlock = document.createElement(`div`)
//     courseBlock.classList.add(`item`)
//     let courseTitle = document.createElement(`h2`)
//     courseTitle.innerText = object.title
//     courseTitle.classList.add(`heading`)
//     courseBlock.appendChild(courseTitle)
//     let courseMonthDuration = document.createElement(`p`)
//     courseMonthDuration.innerText = `month duration: ${object.monthDuration}`
//     courseMonthDuration.classList.add(`description`)
//     courseBlock.appendChild(courseMonthDuration)
//     courseHolder.appendChild(courseBlock)
// }
// document.body.appendChild(courseHolder)

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];


// let simpsonsBlocks = document.createElement(`div`)
//
// for (let simpson of simpsons) {
//     let member = document.createElement(`div`)
//     member.classList.add(`member`)
//     let memberTitle = document.createElement(`h2`)
//     memberTitle.innerText = `${simpson.name} ${simpson.surname}`
//     member.appendChild(memberTitle)
//     let memberSubtitle = document.createElement(`h3`)
//     memberSubtitle.innerText = `Age ${simpson.age} years old`
//     member.appendChild(memberSubtitle)
//     let memberInfo = document.createElement(`p`)
//     memberInfo.innerText = simpson.info
//     member.appendChild(memberInfo)
//     let memberPhoto = document.createElement(`img`)
//     memberPhoto.src = simpson.photo
//     member.appendChild(memberPhoto)
// simpsonsBlocks.appendChild(member)
// }
// document.body.appendChild(simpsonsBlocks)

// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// let courseHolder = document.createElement(`div`)
//
// for (let item of coursesArray) {
//     let courseBlock = document.createElement(`div`)
//     let courseTitle = document.createElement(`h2`)
//     courseTitle.innerText = item.title
//     courseBlock.appendChild(courseTitle)
//     let courseDuration = document.createElement(`h3`)
//     courseDuration.style.display = `flex`
//     courseDuration.innerText = `Month duration:${item.monthDuration}  Hour duration: ${item.hourDuration}`
//     courseBlock.appendChild(courseDuration)
//     let modulesListBlock = document.createElement(`div`)
//     courseBlock.appendChild(modulesListBlock)
//     let modulesList = document.createElement(`ul`)
//     modulesListBlock.appendChild(modulesList)
//     for (let module of item.modules) {
//         let modulesListItem = document.createElement(`li`)
//         modulesListItem.innerText = module
//         modulesList.appendChild(modulesListItem)
//     }
//
//     courseHolder.appendChild(courseBlock)
// }
//
// document.body.appendChild(courseHolder)

// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let txt = document.createElement(`h1`)
txt.innerText = `Hello okten`
let btn = document.createElement(`button`)
btn.innerText = `CLICK ME`
btn.onclick =()=>{
       txt.style.display = `none`

}
document.body.appendChild(txt)
document.body.appendChild(btn)



//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)