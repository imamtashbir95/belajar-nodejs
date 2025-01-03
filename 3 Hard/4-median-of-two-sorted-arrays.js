/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0,
        right = m;

    // Binary search
    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2); // 1, 2
        const partition2 = Math.floor((m + n + 1) / 2) - partition1; // 1, 0

        const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1]; // 1, 2
        const minRight1 = partition1 === m ? Infinity : nums1[partition1]; // 2, Infinity

        const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1]; // 3, -Infinity
        const minRight2 = partition2 === n ? Infinity : nums2[partition2]; // 4, 3

        // Check if partitions are correct
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // Median found
            if ((m + n) % 2 === 0) {
                return (
                    (Math.max(maxLeft1, maxLeft2) +
                        Math.min(minRight1, minRight2)) /
                    2
                );
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // Move partition1 left
            right = partition1 - 1;
        } else {
            // Move partition1 right
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
};

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.00000
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.50000

// [2], [1, 3]
// [-Infinity, 2], [3, Infinity]
// -Infinity <= Infinity | true
// 3 <= 2 | false

// [2, Infinity], [1, 3]
// 2 <= 3 | true
// 1 <= Infinity | true