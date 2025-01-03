/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ""; // No strings in the array

    // Start with the first string as the prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Reduce the prefix until it matches the start of the current string
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Remove the last character
            if (prefix === "") return ""; // No common prefix
        }
    }

    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

const strs = ["flow", "flow", "flight"];
console.log(strs[1].indexOf("flow")) ;

prefix = "flower";
prefix = prefix.slice(0, -1);
console.log(prefix);