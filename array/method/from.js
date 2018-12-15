//Array.from(arrayLike[, mapFn[, thisArg]])
let array1 = [1, 2, 3];
let newArray1 = Array.from(array1, item => {
    return item;
});
array1.push(4);
console.log("shallow copy", array1 === newArray1);

/******************************************************************/
console.log("String", Array.from('foo'));

let setItem = new Set(['foo', {}]);
console.log("Set example", Array.from(setItem));

let mapItem = new Map([[1,2],[3,4]]);
console.log("Map example", Array.from(mapItem), Array.from(mapItem.keys()), Array.from(mapItem.values()));

function f() {
    return Array.from(arguments);
}
console.log("Function argument", f(1, 2, 3));

let x = Array.from({length: 5}, (v, i) => i);
console.log("Object with length", x);

/******************************************************************/

let objectItem = {
    name: 'shahul',
    job: 'dev'
};

console.log(Array.from(objectItem));

