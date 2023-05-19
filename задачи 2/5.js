// Задание:
// Дан целочисленный массив. Определите, может ли он быть палиндромом, если переставить элементы массива местами. Массив считается палиндромом, когда первый элементы равен последнему, второй предпоследнему и т.д.
// Например, [1, 2, 1], [2, 4, 4, 2] - палиндромы, [1, 2, 3] - нет.

// Ввод:
// [x, y, ...] - целочисленный массив.

// Вывод:
// Boolean - может ли массив в результате перестановки элементов стать палиндромом или нет.

// Пример:
// [2, 1, 1] = true

// Тесты:
// getResult([2, 15, 15, 32, 2]) => true
// getResult([5, 5, 6, 6, 7, 7]) => true
// getResult([4, 4, 4]) => true
// getResult([4, 5, 8, 22]) => false

function lol(a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        if (a.length % 2 == 1) {
            if (a[i] == a[i + 1]) {
                sum += 1
            } else if (a[i] == a[a.length - 1]) {
                sum += 1
            }

            if (sum == a.length % 2) {
                return true
            } else {
                return false
            }
        }
    }

    for (let j = 0; j < a.length; j++) {
        if (a.length % 2 == 0) {
            if (a[j] == a[j + 1]) {
                sum += 1
            } else if (a[j] == a[a.length - 1]) {
                sum += 1
            }

            if (sum == a.length / 2) {
                return true
            } else {
                return false
            }
        }
    }
}

console.log(lol([1, 2, 1]))
console.log(lol([1, 3]))
console.log(lol([2, 15, 15, 32, 2]))
console.log(lol([4, 4, 4]))
console.log(lol([4, 5, 8, 22]))
