import datetime
import openpyxl

def excel_open() :
    excel_file = openpyxl.load_workbook('life_pattern.xlsx')
    active_sheet = excel_file.active

def start_print():
    print(datetime.datetime.now())
    print("무엇을 하셨나요 : ", end='')
    user_doing = input()

start_print()