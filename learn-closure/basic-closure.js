// 定义了一个相加函数
function basicAdd(x) {
  console.log('At inner function num is: ', x);
  return function(y) {return x + y;};
 }
  
 let num = 8;
 // 将num作为参数传进去，add8的功能变被定为了add 8的操作;
 // 保留了num = 8时的状态
 const add8 = basicAdd(num);
 num ++;
  // 将num再次传入，add9的功能被定为了add 9的操作
 // 保留了num = 9时的状态
 const add9 = basicAdd(num);
  num ++;
 console.log(`result is: ${add8(10)}`);
 console.log(`result is: ${add9(10)}`);
 console.log(`the finnal num is: ${num}`);