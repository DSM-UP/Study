from selenium import webdriver
import re
from datetime import datetime


def need_files_open():
    f_webdriver_url_list_file = open("webdriver_url.txt", 'r', encoding='UTF8')
    webdriver_url_list = f_webdriver_url_list_file.readlines()
    f_webdriver_url_list_file.close()
    f_auto_checking_record_file = open("auto_checking_record.txt", 'a', encoding='UTF8')
    return webdriver_url_list, f_auto_checking_record_file

def wait_2_load():
    driver.implicitly_wait(3)


print('Auto Checking Service Start')

btns_id_list = ['rspns011', 'rspns02', 'rspns070', 'rspns080', 'rspns090', 'btnConfirm']
webdriver_url, auto_checking_record_file = need_files_open()
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

auto_checking_record_file.write(f'*------{datetime.today().strftime("%Y%m%d%H%M")}------*\n')
print('\n---All User List---')
auto_checking_record_file.write('---All User List---\n')
if users_name_list:
    for name in users_name_list:
        print(name, end=' ')
        auto_checking_record_file.write(name + ' ')
    print()
    auto_checking_record_file.write('\n')
else:
    auto_checking_record_file.write('No User\n')
    print('No User')

print('\n---Failed User List---')
auto_checking_record_file.write('\n---Failed User List---\n')
if failed_name_list:
    for name in failed_name_list:
        auto_checking_record_file.write(name + ' ')
        print(name, end=' ')
    print()
    auto_checking_record_file.write('\n')
else:
    print('There are NO Failed User')
    auto_checking_record_file.write('\nThere are NO Failed User\n')

print('\n---Succeed User List---')
auto_checking_record_file.write('\n---Succeed User List---\n')
if complete_name_list:
    for name in complete_name_list:
        print(name, end=' ')
        auto_checking_record_file.write(name + ' ')
    print()
    auto_checking_record_file.write('\n')
else:
    print('There are NO Succeed User')
    auto_checking_record_file.write('\nThere are NO Succeed User\n')

print('\nAuto Checking Service End')
auto_checking_record_file.write('\n*---Auto Checking Service End---*\n')
