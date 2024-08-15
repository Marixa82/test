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



// // Task11 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const string1 = 'zorro';
//     if(string1.length > 1){
//         console.log('the last symbol:', string1.at(-1))
//     }

// Task 12 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки

let string = 'around';

for(let i = string.length-1; i>= 0; i-- ){
console.log(string[i]);
}