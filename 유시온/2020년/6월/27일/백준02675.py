how_many = int(input())
arr = []
for i in range(how_many):
    num, string = input().split(' ')
    arr.append([int(num), string])

for i in range(how_many):
    str_list = list(arr[i][1])
    for str in str_list:
        for j in range(arr[i][0]):
            print(str, end='')
    print()
