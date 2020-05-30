num = int(input())
isFind = False
for i in range(int(num/2), num):
    charNum = str(i)
    if sum(map(int, charNum)) + i == num:
        print(i)
        isFind = True
        break
if not isFind:
    print(0)
