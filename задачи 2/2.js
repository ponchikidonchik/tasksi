// Описание:
// Дан массив целых чисел, нужно найти его сумму.

// Ввод:
// [2, 3, 5, -1]

// Вывод:
// Число

// Пример:
// [1, 2, -3] => 0

// Тесты:
// getResult([1, 2, 3, 4, 5]) == 15
// getResult([-1, -2, -3, -4, -5]) == -15
// getResult([-2, -2, 0, 4]) == 0

const number = [2, 3, 5, -1];
sum = 0;
for (let index = 0; index < number.length; index++) {
    sum += number[index]; 
}
console.log(sum)