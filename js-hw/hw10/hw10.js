// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let userForm = document.forms.userForm
//
// userForm.onsubmit = function (eo){
//     eo.preventDefault()
//     let userDiv = document.createElement(`div`)
//     userDiv.innerHTML = `<p>Name: ${userForm.username.value}</p>
//                          <p>Surname: ${userForm.surname.value}</p>
//                          <p>Age:${userForm.age.value}</p>
// `
//     document.body.appendChild(userDiv)
// }


// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let block = document.getElementById(`block`)
block.addEventListener(`click`,function (){
     block.innerText++

})


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// let date = new Date()
// let sessions = []
//
// sessions.push(date.toString())
// localStorage.setItem(`date`, JSON.stringify(sessions))


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let objects = []
// let startIndex = 0
// let objectsContainer = document.getElementById(`objects`)
//
// for (let i = 0; i < 100; i++) {
//     objects.push({
//         id: i + 1,
//         name: `Object ${i + 1}`
//     })
// }
//
// function renderObjects() {
//     objectsContainer.innerHTML = ``
//     for (let i = startIndex; i < startIndex + 10 && i < objects.length; i++) {
//         let object = objects[i];
//         let objectsDiv = document.createElement(`div`)
//         objectsDiv.innerHTML = `ID: ${object.id} Name:${object.name}`
//         objectsContainer.appendChild(objectsDiv)
//     }
//
//
// }
//
// renderObjects()
//
// let nextBtn = document.getElementById(`next`)
// nextBtn.addEventListener(`click`, function (eo) {
//     eo.preventDefault()
//     if (startIndex += 10< objects.length){
//         startIndex += 10
//         renderObjects()
//     }
//
//         })
// let prevBtn = document.getElementById(`prev`)
// prevBtn.addEventListener(`click`,function (eo){
//     eo.preventDefault()
//     if (startIndex -= 10< objects.length){
//         startIndex-=10
//         renderObjects()
//     }
//
// })





