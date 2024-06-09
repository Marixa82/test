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

// //   Task2

// // const string = "lflflflf"
// // console.log("Length of string is:", string.length);

// // Task3 Дана строка. Выведите в консоль последний символ строки.
// const string = "lflflflf55";
//  console.log('The end of string is:', string.slice(9, string.length));
//  console.log(string.at(-1)) 
// // const endSymbol = string.slice(9, string.length);
// // alert(`The end of string is: ${endSymbol} `);
// // clearInterval;

// // Task4 Дано число. Проверьте, четное оно или нет.

// function isNumber(number){
//     if (number % 2){
//       console.log(false)
//   }  else{
//       console.log(true)
//   }
//   }
// isNumber(10)
// isNumber(11)

// // Task5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const word1 = 'Ajaks';
// const word2 = 'apple';
// function compareFirstWord(word1, word2){
//    if(word1.charAt(0) === word2.charAt(0)){
//     console.log('The first letters are the same')
// }else{
//     console.log('The first letters are not the same')
// } 
// }
// compareFirstWord(word1, word2)

// // Task6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// const word3 = 'MangoQ';
// function getLastWordLetter(word3){
//     if(word3.at(-1) !== 'Q'){
//     console.log(word3.at(-1))
//     }
// else{
//    console.log(word3.at(-2)) 
// }
// }

// getLastWordLetter(word3)

// // Task7 Дано число. Выведите в консоль первую цифру этого числа.

// let number2 = 152
// let number2Str = number2.toString()
// console.log(number2Str.at(0))

// // Task8 Дано число. Выведите в консоль последнюю цифру этого числа.

// let number3 = 152556
// let number3Str = number3.toString()
// console.log(number3Str.at(-1))

// // Task9 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// let number4 = 152556

// let num4Str = number4.toString()

// console.log(parseInt(num4Str.at(0)) + parseInt(num4Str.at(-1)))

// // Task10 Дано число. Выведите количество цифр в этом числе.

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

// // Task11 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const string1 = 'zorro';
//     if(string1.length > 1){
//         console.log('the last symbol:', string1.at(-1))
//     }

// // Task12 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
// let numb1 = 12;
// let numb2 = 7;
// if(numb1 % numb2 === 0){
// console.log(numb1 + 'is divisible by' + numb2 + 'without of remainder')
// } else{
//     console.log(numb1 + 'not is divisible by' + numb2 + 'without of remainder')
// }
// Выведите в консоль все целые числа от 1 до 100.
// for(let i=1; i <= 100; i++ ){
//     console.log(i);
// }
// Выведите в консоль все целые числа от -100 до 0.

// for(let i = -100; i<= 0; i++){
//     console.log(i);
// }

// Выведите в консоль все целые числа от 100 до 1

// for(let i = 100; i>= 1; i--){
//     console.log(i);
// }
// Выведите в консоль все четные числа из промежутка от 1 до 100
for(let i =0; i>=100; i++){
    console.log(i);
}