let l1 = Number(prompt('Введите числа'))
let l2 = Number(prompt('Введите числа'))

function mergeTwoList(l1, l2) {

    if (l1 == null)
        return l2;
    if (l2 == null)
        return l1;

    if (l1.data < l2.data) {
        l1.next = mergeTwoList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoList(l1, l2.next);
        return l2;
    }

}
let l1 = [1, 2, 4],
    l2 = [1, 3, 4];
document.write(mergeTwoList(l1, l2));


function mergeTwoSortedList(node1, node2) {
    if (null == node1) {
        return node2;
    }
    if (null == node2) {
        return node1;
    }
    if (node1.val <= node2.val) {
        node1.next = mergeTwoSortedList(node1.next, node2);
        return node1;
    } else {
        node2.next = mergeTwoSortedList(node1, node2.next);
        return node2;
    }
}
let node1 = [1, 2, 4],
    node2 = [1, 3, 4];
document.write(mergeTwoSortedList(node1, node2));