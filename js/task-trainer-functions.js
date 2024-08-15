// Task 01
// Создайте функцию getRandomInt, которая выводит в блок .out-1 случайное целое число от 117 до 132. Все переменные должны быть внутри функции. Запустите эту функцию.

function getRandomInt () {
    const min = 117;
    const max = 132;
    let randomDigit = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(randomDigit)
let element = document.querySelector('.out-1');
element.textContent = randomDigit;

}
getRandomInt();