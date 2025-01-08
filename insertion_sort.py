# Definition for a pair.
class Pair:
    def __init__(self, key: int, value: str):
        self.key = key
        self.value = value


class Solution:
    def insertionSort(self, pairs: list[Pair]) -> list[list[Pair]]:

        length = len(pairs)
        out = []
        out.append(pairs.copy())

        # [2,9,5]
        for i in range(1, length + 1):
            curr_pair = pairs[i]
            count = i

            while (count > 0):
                prev_pair = pairs[i-1]
                curr_key = curr_pair.key
                prev_key = prev_pair.key

                if (curr_key < prev_key):
                    pairs[i] = prev_pair
                    pairs[i-1] = curr_pair
                else:
                    break

                count -= 1

            out.append(pairs.copy())

        return out
