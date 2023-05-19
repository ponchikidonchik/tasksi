// Задание:
// Строительной бригаде нужно посчитать сколько дней уйдет на выравнивание участка под строительство дома. Если выравнивание одного квадрата участка на один уровень уходит один деть.Площадь участка по высоте дана в массиве целых чисел.
// Например, [2, 1, 3, 2] для выравнивания такого участка нужно затратить 2 дня. То есть сначала поднять 1 до 2, а потом 3 опустить до 2 и получим участок [2, 2, 2, 2] за 2 дня.

// Ввод:
// [x, y, ...] - целочисленный массив.

// Вывод:
// Number - число дней.

// Пример:
// [1, 2, 1, 2] = 2

// Тесты:
// getResult([2, 1, 4, 1]) => 4
// getResult([4, 2, 4, 5]) => 3
// getResult([2, 2, 4, 1]) => 3
// getResult([2, 2, 4, 1, 3]) => 4

function getResult(a){
    average = 0
    sum = 0
    for (let i = 0; i < a.length; i++) {
        average += a[i] / a.length;
    }

    for (let j = 0; j < a.length; j++) {
        if (a[j]<average) {
            sum = sum + (average - a[j])
        } else if (a[j] > average) {
            sum = sum + (a[j] - average)
        }else{
            sum +=0
        }
        
    }
    return Math.floor(sum)
}

console.log(getResult([2, 1, 4, 1]) )
console.log(getResult([4, 2, 4, 5]) )
console.log(getResult([2, 2, 4, 1]) )
console.log(getResult([2, 2, 4, 1, 3])) 