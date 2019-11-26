# 웹툰 사이트를 바로 열어주는 앱

import webbrowser
import requests
from bs4 import BeautifulSoup


def auto_webtoon():
    webtoon_name_file, file = read_webtoon_list_file()
    saved_webtoon_list = split_webtoon_list(webtoon_name_file)
    bs = set_url()
    webtoon_name_list, webtoon_url_list = set_webtoon_url_name(bs, saved_webtoon_list)
    open_webtoon(webtoon_name_list, webtoon_url_list, file)


def read_webtoon_list_file():
    file = open("webtoon_list.txt", 'r', encoding='UTF8')
    saved_webtoon_name_file = file.read()
    return saved_webtoon_name_file, file


def split_webtoon_list(saved_webtoon_name_file):
    saved_webtoon_list = []
    for name in saved_webtoon_name_file.split('\n'):
        saved_webtoon_list.append(name)
        print(name)

    return saved_webtoon_list


def set_url():
    naver_webtoon_url = 'https://comic.naver.com/webtoon/weekdayList.nhn?week='
    res = requests.get(naver_webtoon_url)
    bs = BeautifulSoup(res.text, 'lxml')

    return bs


def set_webtoon_url_name(bs, saved_webtoon_list):
    content = bs.find('div', {'id': 'content'})
    list_area_daily_all = content.find('div', {'class': 'list_area daily_img'})
    name_list = list_area_daily_all.find_all('a')
    webtoon_name_list = []
    webtoon_url_list = []

    for name in name_list:
        webtoon_name = name.get('title')
        webtoon_url = name.get('href')

        if webtoon_name in saved_webtoon_list:
            if webtoon_name is None:
                continue

            if webtoon_name in webtoon_name_list:
                continue

            webtoon_name_list.append(webtoon_name)
            webtoon_url_list.append(webtoon_url)

    return webtoon_name_list, webtoon_url_list


def open_webtoon(webtoon_name_list, webtoon_url_list, file):
    for i in range(len(webtoon_url_list)):
        webtoon_page_url = 'https://comic.naver.com'
        webtoon_page_url = webtoon_page_url + webtoon_url_list[i]
        res = requests.get(webtoon_page_url)
        bs = BeautifulSoup(res.text, "lxml")

        content = bs.find('div', {'id': 'content'})
        viewList = content.find('table', {'class': 'viewList'})
        title = viewList.find('td', {'class': 'title'})
        webtoon = str(title.find('a'))
        webtoon = webtoon.split(' ')[1]
        webtoon_url = webtoon.split('"')[1]
        webtoon_url = 'https://comic.naver.com' + webtoon_url
        print(str(i+1) + '.' + webtoon_name_list[i] + '|' + webtoon_url)
        webbrowser.open_new_tab(webtoon_url)
    file.close()


auto_webtoon()
