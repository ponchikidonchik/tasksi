// Задание:
// Напишите функцию, которая будет возвращать сумму чисел принятого массива.

// Ввод:
// [x, y, ...] - массив с целыми положительными и отрицательными числами.

// Вывод:
// Сумма чисел массива.

// Пример:
// [2, -2, 0] = 0

// Тесты:
// getResult([1, 3, 5]) => 9
// getResult([-4, 27, -5]) => 18
// getResult([-3, -8, -17]) => -28

function getResult(array) {
    sum = 0 
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
        
    }
return sum
}

console.log(getResult([3 , 7 , 9, -4, 2]))
console.log(getResult([5 , 9 , 1, -4, -5]))
console.log(getResult([2 , 6 , 8, -3, 0]))