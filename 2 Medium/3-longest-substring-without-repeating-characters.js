/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const charIndex = {}; // Map to store the last seen index of characters
    let start = 0; // Left pointer of the window
    let maxLength = 0; // Maximum length of substring

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the map and its index is within the window
        if (
            charIndex[currentChar] !== undefined &&
            charIndex[currentChar] >= start
        ) {
            start = charIndex[currentChar] + 1; // Move start pointer
        }

        charIndex[currentChar] = end; // Update last seen index of the current character
        maxLength = Math.max(maxLength, end - start + 1); // Update max length
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")

console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")

console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")