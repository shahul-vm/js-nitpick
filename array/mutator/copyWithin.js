//arr.copyWithin(target[, start[, end]])
// -ve  ===> array.length - negative value
/***********************************/

let baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array1 = Array.from(baseArray);
array1.copyWithin(1, 3, 6);
console.log(array1);

let array2 = Array.from(baseArray);
array2.copyWithin(6);
console.log(array2);

let array3 = Array.from(baseArray);
array3.copyWithin(-6);
console.log(array3);


let array4 = Array.from(baseArray);
array4.copyWithin(0, 4);
console.log(array4);

let array5 = Array.from(baseArray);
array5.copyWithin(0, -4);
console.log(array5);