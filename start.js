/*
console.log(2+2);
console.log(2 +'1'); //21
console.log('1' + 2); //12

// let, const, var
// scope


// var 지역 상관x
// let 지역 나눔
let x = 'global'; // 전역 스코프에 있는 변수

function foo(){
    x = 'function scope'; //지역 스코프에 있는 변수
    console.log(x);
}
foo();
console.log(x);

var x = 0;
{
  var x = 1;
  console.log(x); // 1
}
console.log(x);   // 1

let y = 0;
{
  let y = 1;
  console.log(y); // 1
}
console.log(y);   // 0
// 호이스팅

*/








