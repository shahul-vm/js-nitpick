//arr.fill(value[, start[, end]])
// -ve  ===> array.length - negative value
/***********************************/

let baseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array1 = Array.from(baseArray);
array1.fill(1, 3, 6);
console.log(array1);

let array2 = Array.from(baseArray);
array2.fill(6);
console.log(array2);

let array3 = Array.from(baseArray);
array3.fill("a", 3);
console.log(array3);

let array4 = Array.from(baseArray);
array4.fill("a", -3);
console.log(array4);

let array5 = Array.from(baseArray);
array5.fill(0, 1, -2);
console.log(array5);

/*********************************
 *  Reference
 *******************************/
let array6 = Array.from(baseArray);
array6.fill({});
console.log(array6);
array6[0].test = 123;
console.log(array6);
