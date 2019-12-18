### 	2019/12/09

> ### pyinstaller

pyinstaller와 python을 모두 최신버전을 설치해야 한다. 

`pyinstaller --onefile pyfilename`을 입력하면, pyfilename의 .py 파일을 .exe 파일로 변환시켜준다.



>  ### selenium

* #### xlrd  : 파이썬에서 엑셀 파일 관리하기

  * ```python
    xlrd.open_workbook('excel.xlsx')
    ```

    

* #### selenium-secret_tab :  셀레니움으로 시크릿 탭 열기

  * ```
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--incognito")
    driver = webdriver.Chrome(r"chromedriver.exe", chrome_options=chrome_options)
    ```