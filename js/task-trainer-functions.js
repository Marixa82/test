// Task 01
// Создайте функцию getRandomInt, которая выводит в блок .out-1 случайное целое число от 117 до 132. Все переменные должны быть внутри функции. Запустите эту функцию.

// function getRandomInt () {
//     const min = 117;
//     const max = 132;
//     let randomDigit = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(randomDigit)
// let element = document.querySelector('.out-1');
// element.textContent = randomDigit;
// }
// getRandomInt()

// 2 Напишите функцию getRandomInt2, которая на основе min, max генерирует случайное целое число в этом диапазоне и выводит в out-2. Запустите эту функцию.
function getRandomInt () {
    const min = 117;
    const max = 132;
    let randomDigit = Math.floor(min + Math.random() * (max + 1 - min));
    // console.log(randomDigit)
let element = document.querySelector('.out-1');
element.textContent = randomDigit;
return randomDigit;

}
function getRandomInt2 () {
    let getRand = getRandomInt();
    let el2 = document.querySelector('.out-2')
    el2.textContent = getRand;
}
getRandomInt2();