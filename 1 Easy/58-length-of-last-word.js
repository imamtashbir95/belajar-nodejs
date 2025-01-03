/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // Trim any trailing and leading spaces
    s = s.trim();

    // Split the string into words
    const words = s.split(" ");

    // Return the length of the last word
    return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));