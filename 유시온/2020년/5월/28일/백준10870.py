num = int(input())

def pib(n):
    if n == 0:
        return 0
    elif n == 2 or n == 1:
        return 1
    return pib(n-2) + pib(n-1)

print(pib(num))