alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]
is_there = []
strs = input()
strss = list(strs)
for i in range(26):
    is_there.append(-1)

ii = 0
for i in strss:
    if i in alphabet and is_there[alphabet.index(i)] == -1:
        index = alphabet.index(i)
        is_there[index] = ii
    ii += 1

for i in is_there:
    print(i, end=' ')