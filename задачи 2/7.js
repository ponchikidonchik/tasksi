// function search_largest_substr(){
//       let str_min = arguments[0];
//       const list = [];
//       for(let n=1; n<arguments.length; n++){
//         if(str_min.length<arguments[n].length){
//           list.push(arguments[n]);
//           continue;
//         }
//         list.push(str_min);
//         str_min = arguments[n];
//       }
//       for(let l=str_min.length; l>0; l--){
//         for(let p=0; p<=str_min.length-l; p++){
//           const substr = str_min.slice(p, p+l);
//           let isFound = true;
//           for(let i=0; i<list.length; i++){
//             if(	list[i].indexOf(substr) >= 0)
//               continue;
//             isFound=false;
//             break;
//           }
//           if( isFound )
//             return substr;
//         }
//       }

//       return "";
//   }


//   // Исползуем функцию поиска так:

//   console.log(search_largest_substr("123445", "12654", "123768"));

function lol(arr1, arr2, arr3) {
  const commonElements = arr1.filter(value => arr2.includes(value) && arr3.includes(value));
  const sum = commonElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum
}


console.log(lol([1, 1, 2, 2, 3], [3, 4, 1, 2, 2, 1], [4, 3, 6, 1, 1, 2, 2]));