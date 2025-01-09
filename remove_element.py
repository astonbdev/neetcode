class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        new = []

        for i in range(len(nums)):
            if (nums[i] != val):
                new.append(nums[i])

        for i in range(len(new)):
            nums[i] = new[i]

        return len(new)
