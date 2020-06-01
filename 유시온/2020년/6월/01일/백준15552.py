import sys

t = int(sys.stdin.readline().rstrip())

for i in range(t):
    a, b = map(int, sys.stdin.readline().rstrip().split(' '))
    print(a + b)
