function getResult(arr1, arr2){
    ret= [];

    for (var i = 0, len = arr1.length; i < len; i++) {
        ret.push(arr1[i] * arr1[i]);
    }
    if(ret.every(r => arr2.includes(r))){
        return true
      }else{
        return false
      }
}
console.log(getResult([2, 3, 2],[4, 4, 9, 5]))
console.log(getResult([1, 3, 2],[4, 9]))