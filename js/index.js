

const n = Number(prompt('Type number of Fibonacci'));   
function fib(n) {
 if( n <= 2){
   return 1;
 }
  let a = 1;
  let b = 1;
  let c= 0;
  for (var i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

document.write( fib(n) ); 
