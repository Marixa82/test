// // Task1
// function isPositiveNumber(number){
//     if (number > 0){
//       console.log('Number isPositive')
//   }  else{
//       console.log('Number is not a positive')
//   }
//   }
  
//   isPositiveNumber(-1);
//   isPositiveNumber(5);



// // Task2 Дано число. Проверьте, четное оно или нет.

// function isNumber(number){
//     if (number % 2){
//       console.log(false)
//   }  else{
//       console.log(true)
//   }
//   }
// isNumber(10)
// isNumber(11)





// // Task3 Дано число. Выведите в консоль первую цифру этого числа.

// let number2 = 152
// let number2Str = number2.toString()
// console.log(number2Str.at(0))

// // Task4 Дано число. Выведите в консоль последнюю цифру этого числа.

// let number3 = 152556
// let number3Str = number3.toString()
// console.log(number3Str.at(-1))

// // Task5 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// let number4 = 152556

// let num4Str = number4.toString()

// console.log(parseInt(num4Str.at(0)) + parseInt(num4Str.at(-1)))

// // Task6 Дано число. Выведите количество цифр в этом числе.

// let numLength = 15478300;
// let numLengthStr = numLength.toString();
// console.log(numLengthStr.length)

// // Task 10 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// let num1 = 456
// let num2 = 587

// let firstNum = num1.toString();
// let lastNum = num2.toString();

// if(firstNum.at(0) === lastNum.at(0)){
//     console.log('the fist digits are the same')
// } else {
//     console.log('the fist digits are not the same')
// }



// // Task7 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// let numb1 = 12;
// let numb2 = 7;
// if(numb1 % numb2 === 0){
// console.log(numb1 + 'is divisible by' + numb2 + 'without of remainder')
// } else{
//     console.log(numb1 + 'not is divisible by' + numb2 + 'without of remainder')
// }
// Task8 Выведите в консоль все целые числа от 1 до 100.
// for(let i=1; i <= 100; i++ ){
//     console.log(i);
// }
// Task9 Выведите в консоль все целые числа от -100 до 0.

// for(let i = -100; i<= 0; i++){
//     console.log(i);
// }

// Task10 Выведите в консоль все целые числа от 100 до 1

// for(let i = 100; i>= 1; i--){
//     console.log(i);
// }
// Task11 Выведите в консоль все четные числа из промежутка от 1 до 100
// for(let i =1; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
    
// }
// Task12 Выведите в консоль все числа кратные трем в промежутке от 1 до 100

// for(let i = 1; i<= 100; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }
// // Task13 Найдите сумму всех целых чисел от 1 до 100.
// let sum = 0;
// for(let i=1; i<=100; i++){
//     console.log(sum+=i);

// }

// Task14 Найдите сумму всех целых четных чисел в промежутке от 1 до 100
// let sum1 = 0;
// for(let i=1; i<=100; i++){
//     if(i % 2 === 0){
//         console.log(sum1 +=i) ;
//     }
// }
// Task15 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100
// let sum2 = 0;
// for(let i=1; i<=100; i++){
//     if(i % 2 !== 0){
//         console.log(sum2 +=i) ;
//     }
// }

// Task16 Даны два целых числа. Найдите остаток от деления первого числа на второе.
// v1
// let num1 = 12;
// let num2 = 6;
// console.log(num1 % num2);
// v2
//  function restDigit (a, b){
//     return a % b;
//  }
//  alert (`12 % 4 = ${restDigit(12, 4)}`)

// Створіть функцію для підрахунку вартості товару з урахуванням знижки.
// Функція має приймати 2 параметри, а саме: вартість товару без знижки (number) та відсоток знижки (number).
// // Функція має повертати вартість товару зі знижкою. Якщо відсоток знижки в функцію не передано - має використовуватись стандартне значення в 10%.
const discount=(cost, persent = 0.1)=>{
return cost - (cost * persent);
}
console.log(discount(5, 0.2)) ;
console.log(discount(5, 0.15));
console.log(discount(5));

// Створіть функцію для визначення, чи є число додатним (більше 0).
// Функція має приймати як параметр число, і повертати true(bool), якщо число додатне, або false(bool) - якщо від'ємне, або 0.
const number =(a)=>{
    if(a>0){
        return true;
    }
    return false;
};
console.log(number(1));
console.log(number(-2));

// Створіть функцію для визначення, чи є число парним.
// Функція має приймати як вхідний параметр число, і повертати true(bool), якщо число парне, або false(bool) - якщо непарне.

const numberPare=(num)=>{
    if(num % 2){
        return false
    }
    return true
};
console.log(numberPare(3));
console.log(numberPare(4)) ;