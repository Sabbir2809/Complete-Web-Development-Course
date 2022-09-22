var a = 5;
var b = 10;
console.log("Before Swap: a =", a, "b=",b);

var temp = a;
a = b;
b = temp;
console.log("After Swap: a =", a, "b=",b);


var x = 20;
var y = 40;
x = x + y;
y = x - y;
x = x - y;
console.log("Before Swap: x =", x, "y=",y);


var p = 5;
var q = 7;
[p,q] = [q,p];
console.log("Before Swap: p =", p, "q=",q);
