import random

user_list = ['김선정', '이종은', '고도현', '김해교', '서현', '김도희', '서민준', '손완서', '손정우', '안영준', '유시온', '이진혁']
new_user_list = []
mafia_jobs = ['스파이', '마담', '도둑']
citizen_jobs = ['군인', '정치인', '건달', '기자', '도굴꾼', '테러리스트', '성직자']
npc = ''

print(f'--현재 참가중인 유저 목록--\n{user_list}')

while True:
    if npc not in user_list:
        print('--사회자를 골라 입력해주세요--')
        npc = input()
    else:
        user_list.remove(npc)
        new_user_list = user_list
        break

print(f'--참가 유저--\n{new_user_list}\n')

mafia_job = random.choice(mafia_jobs)
random.shuffle(citizen_jobs)
random.shuffle(new_user_list)
print(f'마피아들 : {new_user_list[0:3]}')
print(f'{mafia_job} : {new_user_list[3]}')
print(f'의사 : {new_user_list[4]}')
print(f'경찰 : {new_user_list[5]}')
citizen_list = new_user_list[6:]
i = 0
for citizen in citizen_list:
    print(f'{citizen_jobs[i]} : {citizen}')
    i += 1
