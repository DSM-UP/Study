n = int(input())

if n == 1:
    print('*')
    exit()

for i in range(2*n):
    if i % 2 == 0:
        for j in range(n):
            if j % 2 == 0:
                print(end='*')
            else:
                print(end=' ')
    else:
        for j in range(n):
            if j % 2 == 1:
                print(end='*')
            else:
                print(end=' ')
    print()
