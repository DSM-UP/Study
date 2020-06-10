from selenium import webdriver
import re

def need_files_open():
    f = open("webdriver_url.txt", 'r', encoding='UTF8')
    webdriver_url_list = f.readlines()
    return webdriver_url_list

def wait_2_load():
    driver.implicitly_wait(3)


print('auto checking start')

btns_id_list = ['rspns011', 'rspns02', 'rspns070', 'rspns080', 'rspns090', 'btnConfirm']
webdriver_url = need_files_open()
complete_name_list = []
users_name_list = []
failed_name_list = []
regular_expression_2_find_name = r"[가-힣]{2,4}"

driver = webdriver.Chrome('chromedriver/chromedriver83.exe')
wait_2_load()

for url in webdriver_url:
    find_name_2_url_pattern = regular_expression_2_find_name
    user_name = re.match(find_name_2_url_pattern, url).group()
    users_name_list.append(user_name)

    driver_url = url.strip(user_name)
    driver.get(driver_url)

    for btn_id in btns_id_list:
        driver.find_element_by_id(btn_id).click()

    find_name_2_text_pattern = regular_expression_2_find_name
    text = driver.find_element_by_class_name('txt_area').find_elements_by_class_name('content_box')[0].find_element_by_tag_name('p').text
    complete_name_list.append(re.match(find_name_2_text_pattern, text).group())


for user_name in users_name_list:
    check = True
    for complete_name in complete_name_list:
        if complete_name == user_name:
            check = False
    if check:
        failed_name_list.append(user_name)

print('\n---All User List---')
if users_name_list:
    for name in users_name_list:
        print(name, end=' ')
    print()
else:
    print('No User')

print('\n---Failed User List---')
if failed_name_list:
    for name in failed_name_list:
        print(name, end=' ')
    print()
else:
    print('There are NO Failed User')

print('\n---Succeed User List---')
if complete_name_list:
    for name in complete_name_list:
        print(name, end=' ')
    print()
else:
    print('There are NO Succeed User')

print('\nend')
