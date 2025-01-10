

class DynamicArray:

    def __repr__(self):
        return f"<DynamicArray capacity: {self.capacity} size: {self.size}>"

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.arr = [None] * capacity

    def get(self, i: int) -> int:
        return self.arr[i]

    def set(self, i: int, n: int) -> None:
        self.arr[i] = n

    def pushback(self, n: int) -> None:
        if (self.size >= self.capacity):
            self.resize()

        self.arr[self.size] = n
        self.size += 1

    def popback(self) -> int:
        self.size -= 1
        return self.arr[self.size]

    def resize(self) -> None:
        self.capacity = self.capacity * 2

        new_arr = [0] * self.capacity

        for i in range(self.size):
            new_arr[i] = self.arr[i]
        self.arr = new_arr

    def get_size(self) -> int:
        return self.size

    def get_capacity(self) -> int:
        return self.capacity
