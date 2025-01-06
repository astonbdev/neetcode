class LinkedList:

    def __init__(self, node):
        self.head = node

    def get(self, index: int) -> int:
        count = 0
        curr_node = self.head

        while (count != index):
            if curr_node is None:
                return -1
            curr_node = curr_node.next

        return curr_node.val

    def insert_head(self, val: int) -> None:
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node

        return None

    def insert_tail(self, val: int) -> None:
        new_node = Node(val)
        curr_node = self.head

        while (curr_node.next is not None):
            curr_node = curr_node.next

        curr_node.next = new_node
        return None

    def remove(self, index: int) -> bool:
        return None

    def get_values(self) -> List[int]:
        return None


class Node:

    def __init__(self, val):
        self.val = val
        self.next = None
