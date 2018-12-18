let s1 = ['x', 'y', 'a', 'b', 'ab', 'ac'];
s1.sort();
console.log(s1);



function compare(a, b) {
    return b-a;
}
let n1 = [25, 1, 30, 4, 222, 0];
n1.sort(compare);
console.log(n1);

