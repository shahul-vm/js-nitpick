// shift
let arr = [1,2,3,4];
console.log(arr.shift(), arr);

console.log(arr.unshift(4,5,6,0), arr);


////
let a = ['a1', 'a2'];
let b = ['b1', 'b2'];
Array.prototype.unshift.apply(a, b);
console.log(a, b);


//Object trick
let obj = {
    length: 0,
    addElem: function addElem(elem) {
        [].unshift.call(this, elem);
    }
};
obj.addElem('a1');
obj.addElem('a2');
console.log(obj, obj.length);
