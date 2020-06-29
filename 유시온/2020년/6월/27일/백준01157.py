strss = list(input())
str_arr = []
num_arr = []
strs = []
for i in strss:
    strs.append(i.upper())

for str in strs:
    if str not in str_arr:
        str_arr.append(str)
        num_arr.append(1)
    else:
        num_arr[str_arr.index(str)] += 1

check = False
max = max(num_arr)
if num_arr.count(max) > 1:
    check = True

if check:
    print('?')
else :
    print(str_arr[num_arr.index(max)])