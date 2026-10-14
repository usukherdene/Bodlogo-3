// const student = {
// firstName: "Usukh-Erdene",
// age: 20,
// isStudent: true,
// }
//
// console.log(student);

// const fruits=["Алим", "Банана", "Жүрж"]
// console.log(fruits);

// const person = {
//     name: "Ану",
//     age: 20
// }
// console.log(person.name);

// const colors = ["Улаан", "Ногоон", "Цэнхэр"]
// console.log(colors[0]);

// const product = {
//     name: "Дэвтэр",
//     price: 2500
// }
// console.log(product["price"]);

// students = ["Бат", "Ану", "Болд"]
// console.log(students[1]);

// const person = {
//     name: "Бат",
//     age: 18
// }
// console.log(`${person.name} ${person.age} настай.`);

// const animals = ["Нохой", "Муур", "Туулай", "Морь"]
// console.log(animals.length);

// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers[4]);

// const student = {
//     name: "Сараа",
//     age: 16,
//     grade: 10
// }
// const key = student.grade
// console.log(key);

// const fruits = ["Алим", "Банана", "Жүрж"]
// const key = fruits
// key[1] = "Усан үзэм"
// console.log(key);

// const person = {
//     name: "Болд",
//     age: 17
// }
// const adult = {
//     isAdult: false
// }
// if (person.age >= 18) {
//     adult.isAdult = true
//     console.log(Object.assign(person, adult));
// }else {
//     console.log(Object.assign(person, adult));
// }

// const books = ["Математик", "Англи хэл"]
// books.push("Программчлал")
// console.log(books);

// const student = {
//   name: "Ану",
//   age: 15,
// }
// student.grade = 9;
// console.log(student);

// const player = { 
//     name: "Тэмүүлэн", 
//     score: 100 
// }
// if (player.score >= 100) {
//     console.log(player.score + 50);
// }else {
//     console.log(player.score + 10);
// }

// const items = ["Дэвтэр", "Бал", "Баллуур"]
// const removedItem = items.pop(-1)
// console.log(items, removedItem);

// const queue = ["Бат", "Ану"]
// queue.unshift("Болд")
// console.log(queue);

// const lamp = { 
//     isOn: false
// }
// if (lamp.isOn == true) {
//     lamp.isOn = false
//     console.log("Гэрлийг унтраалаа");
// }else {
//     lamp.isOn = true
//     console.log("Гэрлийг асаалаа");
// }

// const queue = ["Болд", "Бат", "Ану"]
// const firstPerson = queue.shift(0)
// console.log(queue, firstPerson);

// const user = { 
//     name: "Бат", 
//     isVerified: true, 
//     temporaryCode: "ABC123" 
// }
// if (user.isVerified == true) {
//     delete user.temporaryCode
//     console.log(user);
// }else {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу");
// }

// const product = { 
//     name: "Дэвтэр", 
//     price: 2500, 
//     quantity: 4 
// }
// console.log(product.price * product.quantity);

// const rectangle = { 
//     width: 5, 
//     height: 8 
// }
// rectangle.area = rectangle.width * rectangle.height
// console.log(rectangle);

// const scores = { 
//     math: 80, 
//     english: 90, 
//     programming: 100 
// }
// console.log((scores.math + scores.english + scores.programming) / 3);

// const product = { 
//     price: 50000, 
//     discountPercent: 20
// }
// if (product.discountPercent > 0) {
//     const finalPrice = product.price - product.price / 100 * product.discountPercent
//     console.log(finalPrice);
// }else {
//     const finalPrice = product.price
//     console.log(finalPrice);
// }

// const account = { 
//     owner: "Болд", 
//     balance: 50000 
// }
// const withdrawAmount = 60000
// if (account.balance >= withdrawAmount) {
//     account.balance - withdrawAmount
//     console.log("Гүйлгээ амжилттай");
// }else {
//     console.log("Үлдэгдэл хүрэлцэхгүй ", account.balance);
// }

// const product = { 
//     name: "Бал", 
//     stock: 0 
// }
// product.stock > 0 ? console.log("Бэлэн байна") : console.log("Дууссан");

// const numbers = [15, 25, 10]
// console.log(numbers[0] + numbers[1] + numbers[2]);

// const scores = [80, 90, 100]
// console.log((scores[0] + scores[1] + scores[2]) / 3);

// const customer = { money: 10000 }
// const product = { price: 8000, stock: 3 }
// customer.money >= product.price && product.stock > 0 ? console.log("Авч болно") : console.log("Авч болохгүй");

// const student = { 
//     name: "Сараа", 
//     score: 85 
// }
// if (student.score >= 90) {
//     console.log("Маш сайн");

// }else if (student.score >= 60 && student.score < 90) {
//     console.log("Тэнцсэн");
    
// }else {
//     console.log("Тэнцээгүй");
    
// }

// const student = { 
//     name: "Бат", 
//     age: 16 
// }
// console.log("age" in student, "email" in student);

// const student = { 
//     name: "Болд", 
//     address: { 
//         city: "Улаанбаатар", 
//         district: "Хан-Уул" 
//     } 
// }
// console.log(student.address.city);

// const person = { 
//     name: "Ану", 
//     address: { 
//         city: "Улаанбаатар", 
//         district: "Баянзүрх" 
//     } 
// }
// person.address.city == "Улаанбаатар" ? console.log(person.address.district) : console.log("Орон нутгийн оршин суугч");

// const student = { 
//     name: "Бат", 
//     scores: { 
//         math: 70, 
//         english: 80 
//     } 
// }
// student.scores.math < 80 ? console.log(student.scores.math + 10) : console.log("Нэмэлт оноо шаардлагагүй", student.scores.math);

const names = ["Бат", "Ану"]
const a = names[0]
const b = names[0]