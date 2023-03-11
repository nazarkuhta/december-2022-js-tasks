// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)



let users = new URL(`https://jsonplaceholder.typicode.com/users`)
fetch(users)
    .then(value => value.json())
    .then(value => {
        let container = document.createElement(`div`)
        container.classList.add(`container`)
        for (let user of value) {
            let userDiv = document.createElement(`div`)
            userDiv.classList.add(`user`)
            let userTittle = document.createElement(`h2`)
            userDiv.appendChild(userTittle)
            userTittle.innerText = `ID:${user.id} `
            let details = document.createElement(`a`)
            details.innerText = user.name
            details.href = `details.html?id=${user.id}`
            userDiv.appendChild(details)
            container.appendChild(userDiv)
        }
        document.body.appendChild(container)
    })


