// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
//
// let users = [
//     new User(1, `vasya`, `pupkin`, `vasya@gmail.com`, 9191919),
//     new User(2, `olya`, `pupkin`, `olya@gmail.com`, 99373839),
//     new User(3, `kolya`, `kdfsjnf`, `kolya@gmail.com`, 838348738),
//     new User(4, `nazar`, `kuhta`, `nazar@gmail.com`, 83429387493),
//     new User(5, `max`, `qweqwe`, `max@gmail.com`, 23748923),
//     new User(6, `nataly`, `asdqwe`, `nataly@gmail.com`, 3248974),
//     new User(7, `petya`, `abrikos`, `petya@gmail.com`, 72347219),
// ]
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredUsers = users.filter(value => value.id % 2 === 0);
// console.log(filteredUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// --------зробив за спаданням, в масиві id йдуть по-порядку------

// let sortedUsers = users.sort((a, b) => {
//     return b.id - a.id   //щоб зробити за зростанням потрібно поміняти місцями а і б
// })
// console.log(sortedUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clientArray = [
    new Client(1,`client1`,`client_surname1`, `email1@gmail.com`,1111111,[`item1`,`item1`,`item1`,`item1`]),
    new Client(2,`client2`,`client_surname2`, `email2@gmail.com`,2222222,[`item1`,`item1`]),
    new Client(3,`client3`,`client_surname3`, `email3@gmail.com`,3333333,[`item1`,`item1`,`item1`,`item1`,`item1`]),
    new Client(4,`client4`,`client_surname4`, `email4@gmail.com`,4444444,[`item1`,`item1`]),
    new Client(5,`client5`,`client_surname5`, `email5@gmail.com`,5555555,[`item1`,`item1`,`item1`])
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clientArray.sort((a,b)=>{
    return a.order.length-b.order.length
})
console.log(sortedClients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model
//     this.manufacturer = manufacturer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.engineVolume = engineVolume
// }
//
// let car = new Car(`model1`, `adswer`,111, 34131, 1,4)

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// Car.prototype.drive = function (){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
// car.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// Car.prototype.info = function (){
//     console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maxSpeed ${this.maxSpeed}, engineVolume ${this.engineVolume}`)
// }
// car.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// Car.prototype.increaseMaxSpeed = function (newSpeed){
//     return this.maxSpeed = newSpeed
// }
//
// car.increaseMaxSpeed(100500)
// console.log(car)

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// Car.prototype.changeYear = function (newValue){
//     return this.year = newValue
// }
// car.changeYear(2345)
// console.log(car)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// Car.prototype.addDriver = function (driver){
//     this.driver = driver
// }

// function Driver(id,name,age,experience){
//     this.id = id
//     this.name =name
//     this.age = age
//     this.experience = experience
// }
//
//
// car.addDriver(new Driver(1,`vasya`,21,2))
// console.log(car)

// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineVolume) {
//         this.model = model
//         this.manufacturer = manufacturer
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engineVolume = engineVolume
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info(){
//         console.log(`model: ${this.model}, manufacturer: ${this.manufacturer}, year: ${this.year}, maxSpeed ${this.maxSpeed}, engineVolume ${this.engineVolume}`)
//     }
//     increaseMaxSpeed(newSpeed){
//         return this.maxSpeed = newSpeed
//     }
//     changeYear(newValue){
//         return this.year = newValue
//     }
//     addDriver(driver){
//         this.driver = driver
//     }
// }

// let car1 = new Car(`model1`, `adswer`,111, 34131, 1,4);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// car1.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// car1.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// car1.increaseMaxSpeed(100500)
// console.log(car1)

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// car1.changeYear(123)
// console.log(car1)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// car1.addDriver({name:`vasya`,age:21,experience:2})
// console.log(car1)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// class Cinderella{
//     constructor(name, age, size) {
//         this.name = name
//         this.age = age
//         this.size = size
//     }

    // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

//     prince =
//    {
//         name : `prince1`,
//         age: 25,
//         size: 34
//     }
// }
//
//
// let cinderellaArray =[
//     new Cinderella(`sinderella1`,21,31),
//     new Cinderella(`sinderella2`,22,32),
//     new Cinderella(`sinderella3`,23,33),
//     new Cinderella(`sinderella4`,24,34),
//     new Cinderella(`sinderella5`,25,35),
//     new Cinderella(`sinderella6`,26,36),
//     new Cinderella(`sinderella7`,27,37)
// ]
//
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//
// for (let cinderella of cinderellaArray) {
//     if (cinderella.size===cinderella.prince.size){
//         console.log(cinderella)
//     }
// }
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// let trueCinderella = cinderellaArray.find((cinderella)=>{
//     return cinderella.size === cinderella.prince.size
// })
//
// console.log(trueCinderella)