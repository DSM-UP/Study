def mul():
    numA = int(input())
    numB = int(input())
    print(numA * (numB%10))
    print(numA * (int(numB/10)%10))
    print(numA * int(numB/100))
    print(numA * numB)

mul()
