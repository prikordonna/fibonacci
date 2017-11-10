

const n = Number(prompt('Type number of Fibonacci'));   
function fib(n) {
 if( n <= 2){
   return 1;
 }
  let a = 1;
  let b = 1;
  let c= 0;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
document.write( fib(n) ); 



/*
function fib(n) {
  return n > 2 ? fib(n-1) + fib(n-2) : 1;
}
document.write( fib(n) ); */