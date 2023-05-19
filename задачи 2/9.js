function canMakeString(s1, s2) {
    m1 = s1.split('')
    m2 = s2.split('')
    const i1 = m2.filter(element => m1.includes(element))
    let i2 = i1.join('')
    if (i2.length == s2.length) {
        return true
    } else{
        return false
    }
}
console.log(canMakeString('refrigerator','tear'))
console.log(canMakeString('drive','read'))