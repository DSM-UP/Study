def comp():
    numA, numB = map(int, input().split(' '))
    if numA > numB: print('>')
    elif numA < numB: print('<')
    else :print('==')

comp()
