// ## Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать:
// `"Какое официальное название JavaScript?"`. Если пользователь вводит
// `ECMAScript`, то показывай alert со строкой `"Верно!"`, в противном случае -
// `"Не знаете? ECMAScript!"`

// 1) Cтворити змінну для питання.
// 2) Привести відповідь до нижнього регістру.
// 3) Використати if..else і prompt.

// const test = prompt("Какое официальное название JavaScript?");


// if(test === "ECMAScript".toLowerCase()) {
//     alert("Верно!");
// } else {
//     alert("Не знаете? ECMAScript!");
// }
// console.log(test);

// ## Example 2 - Ветвеления

// Напиши скрипт, который выводит в консоль строку `"Это положительное число"`,
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи
// в консоль строку `"Это ноль"`. Если передали отрицательное число, в консоли
// должна быть строка `"Это отрицательное число"`.

// const userInput = prompt('Введите число');

// if(userInput > 0) {
//     console.log(`${userInput} - это положительное число`);
// } else if(Number(userInput) === 0) {
//     console.log(`${userInput} - это ноль`);
// } else  {
//     console.log(`${userInput} - это отрицательное число`);
// }
