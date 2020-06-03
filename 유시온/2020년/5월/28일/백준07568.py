count = int(input())
infoList = []
for i in range(count):
    infoList.append(list(map(int, input().split(' '))))
    infoList[i].append(1)

for i in range(0, count):
    for j in range(0, count):
        if infoList[i][0] > infoList[j][0] and infoList[i][1] > infoList[j][1]:
            infoList[j][2] += 1

for i in range(count):
    print(infoList[i][2], end=' ')