//reverse



function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'))


//polindrome

function palindrome(str) {
    let re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   palindrome("coroc");
   palindrome("question")
   console.log(palindrome("coroc"))
   console.log(palindrome("question"))

//вивести парні числа

let arr = [1,2,3,4,5,6,7,8,9]
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }
