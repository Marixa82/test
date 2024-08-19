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
// function getRandomInt () {
//     const min = 117;
//     const max = 132;
//     let randomDigit = Math.floor(min + Math.random() * (max + 1 - min));
//     // console.log(randomDigit)
// let element = document.querySelector('.out-1');
// element.textContent = randomDigit;
// return randomDigit;

// }
// function getRandomInt2 () {
//     let getRand = getRandomInt();
//     let el2 = document.querySelector('.out-2')
//     el2.textContent = getRand;
// }
// getRandomInt2();

// Cтрілкові функції

const getRandomInt = () => {
    const min = 117;
    const max = 132;
    let randomDigit = Math.floor(min + Math.random() * (max + 1 - min));
    // console.log(randomDigit)
let element = document.querySelector('.out-1');
element.textContent = randomDigit;
return randomDigit;

}
const getRandomInt2 = () => {
    let getRand = getRandomInt();
    let el2 = document.querySelector('.out-2')
    el2.textContent = getRand;
}
getRandomInt2();


// Task 03
// Не забываем, что функции можно вызывать внутри другой функции. Напишите функцию t3, которая срабатывает при клике по кнопке .b-3, и запускает фукнции hello, и f2021. Если все сделано верно, то внутри .out-3 вы увидите текст hello 2021.

// function t3 () {
    
//     function hello() {
//         let hello1 = 'Hello'
// return hello1
//     }
   
//     function f2021(){
// let year = '2021'
// return year
//     }
  
//    document.querySelector('.b-3').addEventListener('click', function(){
//     let result = hello() + ' ' + f2021();
//     document.querySelector('.out').innerHTML = result;
//    })
   
// }
// t3()

// Cтрілкові функції

const t3 = () => {
    
    const hello = () => {
        let hello1 = 'Hello'
return hello1
    }
   
    const f2021 = () => {
let year = '2021'
return year
    }
  
   document.querySelector('.b-3').addEventListener('click', () => {
    let result = hello() + ' ' + f2021();
    document.querySelector('.out').innerHTML = result;
   })
   
}
t3()

// Напишите функцию t1, которая принимает два аргумента и выводит в .out-3 случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

// function t1(x, y){
    
//     document.querySelector('.b-1').addEventListener('click', function(){
//         let randomDigit = Math.floor(x + Math.random() * (y + 1 - x));
//         document.querySelector('.out-3').innerHTML = randomDigit
// })
// }
// t1(100, 250);

// Cтрілкові функції
const t1 = (x, y) =>{
    
    document.querySelector('.b-1').addEventListener('click', ()=>{
        let randomDigit = Math.floor(x + Math.random() * (y + 1 - x));
        document.querySelector('.out-3').innerHTML = randomDigit
})
}
t1(100, 250);


// Напишите функцию t2, которая принимает три аргумента (число от, число до и блок, в который нужно вывести данные) и выводит в указанный блок случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-2. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

// function t2(x, y, elem){
    
//     document.querySelector('.b-2').addEventListener('click', function(){
//         let randomDigit = Math.floor(x + Math.random() * (y + 1 - x));
//     elem = document.querySelector('.out-4').innerHTML = randomDigit
// })
// }
// t2(300, 500);

// Cтрілкові функції
const t2 = (x, y, elem) =>{
    
    document.querySelector('.b-2').addEventListener('click', ()=>{
        let randomDigit = Math.floor(x + Math.random() * (y + 1 - x));
    elem = document.querySelector('.out-4').innerHTML = randomDigit
})
}
t2(300, 500);
// Напишите функцию t3, которая принимает два аргумента (число от, число до ) и выводит в блок .out-5 случайное целое число от первого аргумента(включительно) до второго(включительно). Задайте значение по умолчанию для min число 0 для max число 100. Функция запускается по кнопке .b-4. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

// function t4(x1 = 0, y1 = 100){
//     document.querySelector('.b-4').addEventListener('click', function(){
//         let randomDigit = Math.floor(x1 + Math.random() * (y1 + 1 - x1));
//         document.querySelector('.out-5').innerHTML = randomDigit
//     })

// }
// t4(15, 200);

// Cтрілкові функції

const t4 = (x1 = 0, y1 = 100) =>{
    document.querySelector('.b-4').addEventListener('click', ()=>{
        let randomDigit = Math.floor(x1 + Math.random() * (y1 + 1 - x1));
        document.querySelector('.out-5').innerHTML = randomDigit
    })

}
t4(15, 200);

// Напишите функцию t5, которая возвращает сумму переданных ей аргументов a и b.

const t5 = (a, b) => {
    return a + b;
}
console.log(t5(2, 8));

// Напишите функцию t6, которая принимает 2 аргумента и возвращает больший из них.

const t6 = (a, b) =>{

return Math.max(a, b);
}
console.log(t6(10,5)) 

// // На странице есть checkbox .ch-3. Напишите функцию, которая возвращает его value если он выбран и false если не выбран.
const getCheckboxValue = () =>{
    const checkbox = document.querySelector('.ch-3');
    checkbox.addEventListener('change', ()=>{
let checked = checkbox.checked
if (checked) {
        return console.log(checkbox.value) ;
    } else {
        return console.log(false);
    }
    })
    
}
getCheckboxValue()
