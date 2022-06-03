
//  Массивы

// ## Example 1 - Базовые операции с массивом

// 1. Создайте массив `genres` с элементами «Jazz» и «Blues».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Выведите в консоль первый элемент массива.
// 4. Выведите в консоль последний элемент массива. Код должен работать для массива
//    произвольной длины.
// 5. Удалите первый элемент и выведите его в консоль.
// 6. Вставьте «Country» и «Reggy» в начало массива.

// const genres = ["Jazz", "Blues"];
// genres.push("«Рок-н-ролл»");
// console.log(genres);
// console.log(genres[0]);
// const lastElement = genres.length - 1;
// console.log(genres[lastElement]);
// const element = genres.splice(0, 1);
// console.log(element);
// genres.splice(0, 0, "Country", "Reggy");
// console.log(genres);


// ## Example 2 - Массивы и строки

// Напиши скрипт который выводит в консоль все слова строки кроме первого и
// последнего. Результирующая строка не должна начинаться или заканчиваться
// пробельным символом. Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const arrString = string.split(" ");
// console.log(arrString);
// console.log(arrString.slice(1, arrString.length - 1));

// ## Example 3 - Массивы и строки

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит
// ее в консоль.

// const string = 'Welcome to the future';
// const array = string.split(" ");
// console.log(array.reverse());


// // ```js
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// // ```
// console.log(langs.reverse());

// ## Example 4 - Поиск элемента

// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для
// любого массива чисел. Используй цикл для решения задачи.

// ```js
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (let number of numbers) {
// if (number < min) {
//     min = number;
//     }
// }

// console.log(min);

// ```
// 2 вариант
// let min = Math.min(...numbers);
// console.log(min);

// 