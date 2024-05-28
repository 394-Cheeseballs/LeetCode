class Solution:
    def isPalindrome(self, x: int) -> bool:
        stringX = str(x)
        reversedX = stringX[::-1]
        if stringX == reversedX:
            return True
        else:
            return False