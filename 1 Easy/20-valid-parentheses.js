/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (const char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char); // Push opening brackets
        } else {
            // Check if the stack is not empty and the top matches the current closing bracket
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false; // Invalid string
            }
        }
    }

    // The string is valid if the stack is empty
    return stack.length === 0;
};

console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([])")); // Output: true
