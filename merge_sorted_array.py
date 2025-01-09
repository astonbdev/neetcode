class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        # start a counter for both arrays
        # start a while loop that ends when one count is reaches the length of sorted array
        # save the values from nums1 since we are mutating in place
        # compare both values at each count.
        # insert lower value
        # increment counter for array we plucked val from
        # iterate over the rest of the remaining array and append to list
        sorted = []
        count1 = 0
        count2 = 0

        while (count1 < m and count2 < n):
            if (nums1[count1] < nums2[count2]):
                sorted.append(nums1[count1])
                count1 += 1
            else:
                sorted.append(nums2[count2])
                count2 += 1

        if (count1 < m):
            while (count1 < m):
                sorted.append(nums1[count1])
                count1 += 1

        if (count2 < n):
            while (count2 < n):
                sorted.append(nums2[count2])
                count2 += 1

        for i in range(m+n):
            nums1[i] = sorted[i]

        return


s = Solution()
nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3

s.merge(nums1, m, nums2, n)

print(nums1)
