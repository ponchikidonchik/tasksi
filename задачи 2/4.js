// Описание:
// Нужно заменить в тексте все цифры на знаки восклицания.

// Ввод:
// Текст с числами.

// Вывод:
// Текст со знаками "!".

// Пример:
// Текст с числами 2 и 3 до 5. => Текст с числами ! и ! до !.

// Тесты:
// getResult('Текст с числами 2 и 3 до 5.') == Текст с числами ! и ! до !.
let red = /2/gi;
let rel = /3/gi;
let re = /5/gi;
let text = 'Текст с числами 2 и 3 до 5.'
var newstr = text.replace(re, '!')
var newstr1 = newstr.replace(rel, '!')
var newstr2 = newstr1.replace(red, '!')
console.log(newstr2)
