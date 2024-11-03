function isPalindrome(str) {
     reversed = str.split('').reverse().join(''); 
    if (reversed === str) {
        return 'palindrome';
    } else {
        return 'not a palindrome';
    }
}

check = 'level';
console.log(isPalindrome(check));
