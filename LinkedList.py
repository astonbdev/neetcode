class LinkedList:

    def __init__(self):
        return None

    def get(self, index: int) -> int:
        count = 0
        curr_node = self.head

        while (count != index):
            if curr_node is None:
                return -1
            curr_node = curr_node.next

        return curr_node.val

    def insert_head(self, val: int) -> None:
        if self.head is None:
            self.head = Node(val)
            return

        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node

        return None

    # [1,2,3,4] -> 5
    def insert_tail(self, val: int) -> None:
        if self.head is None:
            self.head = Node(val)
            return

        new_node = Node(val)
        curr_node = self.head

        while (curr_node.next is not None):
            curr_node = curr_node.next

        curr_node.next = new_node
        return None

    def remove(self, index: int) -> bool:
        # case of None list
        if (self.head is None):
            return False

        # case of list with exactly one element
        if (index == 0):
            if (self.head.next is None):
                self.head = None
                return True
        else:
            self.head = self.head.next
            return True

        count = 0
        curr_node = self.head

        while (count < index - 1 and curr_node.next is not None):
            curr_node = curr_node.next
            count += 1

        if (curr_node.next is None):
            return False
        curr_node.next = curr_node.next.next

        return True

    def get_values(self) -> List[int]:
        vals = []
        curr_node = self.head
        vals.append(self.head.val)

        while (curr_node is not None):
            curr_node = curr_node.next
            vals.append(curr_node.val)

        return vals


class Node:

    def __init__(self, val):
        self.val = val
        self.next = None
