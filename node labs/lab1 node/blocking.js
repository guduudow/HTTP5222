let a = 3;
let b = 4;
let sum = a + b;
console.log(sum);
//the above code is an example of blocking code because it must perform in order.

let btn = setTimeout(pleaseWait, 3000);

function pleaseWait() {
  console.log("You pressed me!");
}
console.log("Another one!!");

//this is an example of non-blocking code.
//As you can see the second console log
//is independent of the first one
//which has a time delay
