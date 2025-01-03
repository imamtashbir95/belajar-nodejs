// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // Create a dummy node to act as the starting point of the merged list
    let dummy = new ListNode(-1);
    let current = dummy;

    // Traverse both lists and merge them
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // If there are remaining nodes in list1 or list2, append them
    current.next = list1 !== null ? list1 : list2;

    // Return the merged list starting from the next node of the dummy
    return dummy.next;
};

console.log(
    mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4))))
);

console.log(mergeTwoLists(new ListNode(null), new ListNode(null)));

console.log(mergeTwoLists(new ListNode(null), new ListNode(0)));