/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap the characters at left and right pointers
        [s[left], s[right]] = [s[right], s[left]];

        // Move the pointers
        left++;
        right--;
    }
};


const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2);