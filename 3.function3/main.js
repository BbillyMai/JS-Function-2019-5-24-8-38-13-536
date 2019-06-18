function alphabetSort(message){
  // wirte your code here
 
  var arr = message.split("");
  arr.sort();
  return arr.join("");
}
console.log(alphabetSort('hello')); // should return 'ehllo'