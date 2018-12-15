// pop
let arr = [1,2,3,4];
console.log(arr.pop(), arr);

let arr1 = [];
console.log(arr1.pop(), arr1);

/*****************/

//push
console.log(arr.push(4,5,6,0), arr);

//merging 2 array

let a = ['a1', 'a2'];
let b = ['b1', 'b2'];
Array.prototype.push.apply(a, b);
console.log(a, b);

//Object trick
let obj = {
    length: 0,
    addElem: function addElem(elem) {
        [].push.call(this, elem);
    }
};
obj.addElem({});
obj.addElem({});
console.log(obj, obj.length);