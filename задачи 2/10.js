function lol(a) {
    a = a.split("")
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

console.log(lol('aabcc'))
console.log(lol('aabcbd'))


 