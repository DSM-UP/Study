# driver_url = "C:\Users\user\Downloads\19년 11월\chromedriver_win32"

from selenium import webdriver
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.support.ui import WebDriverWait
import time

# setting driver
driver = webdriver.Chrome("C:/Users/user/Desktop/chromedriver.exe")
driver.implicitly_wait(10)
driver.get('https://www.dsm-dms.com')

# login_btn click
driver.find_element_by_class_name('header--button').click()

# user_id, user_pw send
user_id, user_pw = driver.find_elements_by_class_name('modal--input')
user_id.send_keys('qwe5618')
user_pw.send_keys('zz142512')

driver.find_element_by_class_name('modal--submit').click()
driver.implicitly_wait(2)
time.sleep(2)
Alert(driver).accept()


# dms_reservation
driver.find_element_by_class_name('main--apply--card--link').click()

dms_room_list = driver.find_elements_by_class_name('apply--content--menu--item')
time.sleep(2)
# driver.implicitly_wait(5)
dms_room_list[8].click()
WebDriverWait(driver, 3)
time.sleep(3)

# dms_11_reservation
dms_seat_list_11 = driver.find_elements_by_class_name('apply--content--extension--seat')
driver.implicitly_wait(2)
time.sleep(1)
dms_seat_list_11[19].click()
time.sleep(2)

driver.find_element_by_class_name('apply').click()
driver.implicitly_wait(2)
time.sleep(2)
Alert(driver).accept()

# dms_12_reservation
dms_time = driver.find_elements_by_class_name('apply--content--type--switch--item')
driver.implicitly_wait(2)
dms_time[1].click()
time.sleep(2)

dms_seat_list_12 = driver.find_elements_by_class_name('apply--content--extension--seat')
driver.implicitly_wait(2)
dms_seat_list_12[19].click()
time.sleep(2)

driver.find_element_by_class_name('apply').click()
driver.implicitly_wait(2)
time.sleep(2)
Alert(driver).accept()
