import os

def cls():
    os.system('cls' if os.name=='nt' else 'clear')


name = ''

while(True):
    print('네이버 웹툰 중 보고 있는 웹툰의 이름을 정확히 입력 해 주세요')
    print('웹툰상황을 보시려면, \'웹툰상황\'을 입력 해 주세요')
    name = input('웹툰명 : ')

    if name == '웹툰상황':
        with open("webtoon_list.txt", 'r', encoding='UTF8') as file:
            print(file.read())

    else:
        with open("webtoon_list.txt", 'a', encoding='UTF8') as file:
            file.write(name + '\n')

        cls()
