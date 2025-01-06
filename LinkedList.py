class LinkedList:

    def __init__(self, node):
        self.head = node

    def get(self, index: int) -> int:
        count = 0
        curr_node = self.head

        while (count != index):
            if currNode is None:
                return -1
            currNode = currNode.next

        return currNode.val

    def insert_head(self, val: int) -> None:
        new_node = Node(val)
        new_node.next = self.head
        self.head = new_node

        return None

    def insert_tail(self, val: int) -> None:
        curr_node
        return None

    def remove(self, index: int) -> bool:
        return None

    def get_values(self) -> List[int]:
        return None


class Node:

    def __init__(self, val):
        self.val = val
        self.next = None
