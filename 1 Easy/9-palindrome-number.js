/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Negative numbers and numbers ending in 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10); // Add the last digit of x to reversedHalf
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // Check if the first half is equal to the reversed second half
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false

console.log(isPalindrome(4224));