burgers = []
drinks = []
for i in range(3):
    burgers.append(int(input()))
for i in range(2):
    drinks.append(int(input()))
burgers.sort()
drinks.sort()
print(burgers[0] + drinks[0] - 50)