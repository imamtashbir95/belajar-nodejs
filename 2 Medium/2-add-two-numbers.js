
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify edge cases
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        const x = l1 ? l1.val : 0; // Get value from l1 or 0 if null
        const y = l2 ? l2.val : 0; // Get value from l2 or 0 if null
        const sum = x + y + carry; // Sum of digits and carry

        carry = Math.floor(sum / 10); // Update carry
        current.next = new ListNode(sum % 10); // Create new node with the remainder
        current = current.next; // Move to the next node

        // Move to the next nodes in l1 and l2
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // If there's a carry left, add a new node
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // Return the result list (excluding dummy head)
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // Represents 342
const l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // Represents 465
console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8] (Represents 807)

const l3 = new ListNode(0);
const l4 = new ListNode(0);
console.log(addTwoNumbers(l3, l4)); // Output: [0]

const l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
console.log(addTwoNumbers(l5, l6)); // Output: [8, 9, 9, 9, 0, 0, 0, 1]
