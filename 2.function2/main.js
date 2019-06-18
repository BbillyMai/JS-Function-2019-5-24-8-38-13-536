function palindrome(message){
    // wirte your code here
    var i = 0;
    var j = message.length-1;
    if(message.length<=0){
      return false;
    }
    while(i<=j){
      if(message[i]!=message[j]){
        return false;
      }
      return true;
    }
  
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true