strs = list(input())
dial = [['A', 'B', 'C'], ['D', 'E', 'F'], ['G', 'H', 'I'], ['J', 'K', 'L'], ['M', 'N', 'O'], ['P', 'Q', 'R', 'S'], ['T', 'U', 'V'], ['W', 'X', 'Y', 'Z']]
nums = 0

for string in strs:
    check = False
    i = 0
    for dials in dial:
        if check: break
        if string in dials:
            check = True
            nums = nums + i + 3
        i += 1
print(nums)