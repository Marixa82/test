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

// Task 03
// Не забываем, что функции можно вызывать внутри другой функции. Напишите функцию t3, которая срабатывает при клике по кнопке .b-3, и запускает фукнции hello, и f2021. Если все сделано верно, то внутри .out-3 вы увидите текст hello 2021.

function t3 () {
    
    function hello() {
        let hello1 = 'Hello'
return hello1
    }
   
    function f2021(){
let year = '2021'
return year
    }
  
   document.querySelector('.b-3').addEventListener('click', function(){
    let result = hello() + ' ' + f2021();
    document.querySelector('.b-3').textContent = result;
   })
}
t3()

// Напишите функцию t1, которая принимает два аргумента и выводит в .out-1 случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t1(x, y, elem){
    
    document.querySelector('.b-1').addEventListener('click', function(){
        let randomDigit = Math.floor(x + Math.random() * (y + 1 - x));
    elem = document.querySelector('.out-3').textContent = randomDigit
       
       })
}
t1(100, 250);