a = []

a.append(['bPawnA', [1, 2, 3]])
a.append(['bPawnB', [4, 5, 6]])
a.append(['bPawnC', [7, 8, 9]])
a.append(['bPawnD', [1, 2, 3]])
a.append(['bPawnE', [4, 5, 6]])
a.append(['bPawnF', [7, 8, 9]])

for i, lists in a:
    for j in lists:
        print(i, j)