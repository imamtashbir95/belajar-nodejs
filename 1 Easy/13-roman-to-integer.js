/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // Mapping of Roman numerals to integer values
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        // Get the value of the current and next Roman numeral
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If the current value is less than the next value, subtract it
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994