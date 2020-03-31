from datetime import datetime
import openpyxl

def excel_open() :
    excel_file = openpyxl.load_workbook('life_pattern.xlsx')
    active_sheet = excel_file.active

def print_now_date():
    print(f'현재 시간 : {get_now()}')

def get_now():
    now_time = datetime.now()
    year = str(now_time.year) + '년 '
    month = str(now_time.month) + '월 '
    day = str(now_time.day) + '일 '
    hour = str(now_time.hour) + '시 '
    minute = str(now_time.minute) + '분 '
    now = str(year) + str(month) + str(day) + str(hour) + str(minute)
    return now

print_now_date()