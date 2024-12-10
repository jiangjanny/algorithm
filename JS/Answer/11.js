// 反轉字符串 寫一個函數，接受一個字符串，返回該字符串的反轉版本。

function reverseString(str) {
    // 你的代碼
   return str.split('').reverse().join('')
}
  
console.log(reverseString('hello')); // 'olleh'
  