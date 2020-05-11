def find_name(name):
    samename = []
    name = sorted(name)
    for i in range(len(name) -1):
        if name[i] == name[i + 1]:
            samename.append(name[i])
    samename = list(set(samename))
    print('동명이인의 이름은: {0}'.format(samename))


name = list(map(str, input('학생의 이름을 입력하세요: ').split(',')))
find_name(name)