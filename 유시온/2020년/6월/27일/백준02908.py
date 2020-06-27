a, b = input().split()
new_a = a[::-1]
new_b = b[::-1]
if int(new_a) > int(new_b): print(new_a)
else: print(new_b)