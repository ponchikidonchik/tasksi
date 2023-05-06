// Описание:
// Устанавливать первый символ строки в верхний регистр.

// Ввод:
// Текст.

// Вывод:
// Текст, но первая буква будет верхнего регистра.

// Пример:
// привет мир! => Привет мир!

// Тесты:
// getResult('имя') == Имя
let text = 'вася!!'
let newStr = text[0].toUpperCase() + text.slice(1);
console.log(newStr)