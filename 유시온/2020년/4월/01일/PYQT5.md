## PYQT5 



1. **[위젯창 생성, 버튼 추가](#1-위젯창-생성-버튼-추가)**
2. **[이벤트처리, 메세지박스](#2-이벤트처리-메세지박스)**
3. **[메뉴바, 상태표시줄](#3-메뉴바-상태표시줄)**
4. **[체크메뉴, 컨텍스트메뉴](#4-체크메뉴-컨텍스트메뉴)**
5. **[레이아웃](#5-레이아웃)**



### 1 위젯창 생성, 버튼 추가

```python
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton  
# 기본적으로 사용되는 외부 모듈이다.

# class를 사용하여 애플리케이션을 생성한다.
class Example(QWidget):       # 사용하는 모듈을 넣어준다.
    def __init__(self):	      # 생성자함수.
        super().__init__()    # 상위 클래스를 받아온다.
        
        self.initUI()         # UI를 만들 함수.


    def initUI(self):		  # UI를 만들 함수.
        btn = QPushButton('클릭하세요!', self)    
			# QPushButton('버튼에 들어갈 텍스트', self)  self값은 기본으로 넣어 주어야 한다.
        btn.resize(btn.sizeHint())
        	# resize : 크기를 조정함.
			# sizeHint : 텍스트가 들어있는 기본 사이즈.
        btn.move(20, 30)
        	# 버튼의 위치를 조정함. 기준은 좌상단.
        btn.setToolTip('냐옹')
        	# 버튼에 hover시 나오는 텍스트

        self.setGeometry(300, 300, 400, 500)
        	# setGeometry(x좌표, y좌표, 가로 길이, 세로 길이)  기준은 좌상단.
        self.setWindowTitle('개쩐당')
    		# 애플리케이션의 타이틀
        self.show()
        	# 최종적으로 보여지게 하는 함수.



if __name__ == '__main__' :
    		# 메인 모듈인 경우
    app = QApplication(sys.argv)
    w = Example()
    sys.exit(app.exec_())
    		# 애플리케이션 종료까지 실행

```



### 2 이벤트처리, 메세지박스

```python
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton, QMessageBox
from PyQt5.QtCore import QCoreApplication


class Example(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        btn = QPushButton('클릭하세요!', self)
        btn.resize(btn.sizeHint())
        btn.move(20, 30)
        btn.setToolTip('냐옹')
        btn.clicked.connect(QCoreApplication.instance().quit)
        	# 애플리케이션 종료 함수.

        self.resize(500, 500)
        	# resize(가로 길이, 세로 길이) 화면 중앙에 배치된다.
        self.setWindowTitle('개쩐당')
        self.show()

    def closeEvent(self, QCloseEvent):
	        # 우상단 X키로 종료시 발동되는 함수.
        answer = QMessageBox.question(self, "종료 확인", "종료하시겠습니까?",
                             QMessageBox.Yes | QMessageBox.No, QMessageBox.No)
        	# 메세지 박스를 생성함.
            # question(self, "박스 제목", "질문", Yes | No, 기본값) 기본값에는 Yes나 No가 
            # 	들어간다.
        if answer == QMessageBox.Yes:
            # 메세지 박스의 질문을 Yes로 할 시.
            QCloseEvent.accept()
            # 종료 함수를 실행한다.
        else:
            QCloseEvent.ignore()
            # 종료 함수를 거절한다.

            
if __name__ == '__main__' :
    		# 메인 모듈인 경우
    app = QApplication(sys.argv)
    w = Example()
    sys.exit(app.exec_())
    		# 애플리케이션 종료까지 실행

```



### 3 메뉴바, 상태표시줄

```python
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QAction, QMenu
from PyQt5.QtCore import QCoreApplication


class Example(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.statusBar()
        	# 상태창 생성
        self.statusBar().showMessage("안녕!")
			# 상태창에 메세지 보여주기
        
        menu = self.menuBar()               # 메뉴 생성
        	# 메뉴바 생성
        menu_file = menu.addMenu('File')    # 그룹 생성
        	# 메뉴바에 들어갈 메뉴 그룹 생성 및 추가 addMenu('그룹 이름')
        menu_edit = menu.addMenu('Edit')    # 그룹 생성
	        # 메뉴바에 들어갈 메뉴 그룹 생성 및 추가 addMenu('그룹 이름')

        file_exit = QAction('Exit', self)   # 메뉴 객체 생성
        	# 메뉴 그룹에 들어갈 메뉴 객체 생성 QAction('객체 이름', self)
        file_exit.setShortcut('Ctrl+Q')
        	# 메뉴 객체의 단축키 지정
        file_exit.setStatusTip("잘가")
        	# 메뉴 객체 hover시 상태창에 메세지 보여주기
        new_txt = QAction("텍스트 파일", self)   # 서브 그룹 객체 생성
        	# 메뉴 그룹에 들어갈 메뉴 객체 생성 및 추가 (실제로는 객체 속에 들어감)
        new_py = QAction("파이썬 파일", self)    # 서브 그룹 객체 생성
	        # 메뉴 그룹에 들어갈 메뉴 객체 생성 및 추가 (실제로는 객체 속에 들어감)

        file_exit.triggered.connect(QCoreApplication.instance().quit)
        	# 메뉴 실행 시, 애플리케이션 종료 

        file_new = QMenu('New', self)       # 서브 그룹 객체 생성
			# 메뉴바에 들어갈 메뉴 그룹 생성 및 추가  (위의 서브 그룹 객체가 들어올 곳)
            
        file_new.addAction(new_txt)         # 서브 그룹 객체 추가
        	# 메뉴 그룹에 서브 그룹 객체 추가
        file_new.addAction(new_py)          # 서브 그룹 객체 추가
        	# 메뉴 그룹에 서브 그룹 객체 추가 (메뉴바 -> File -> new -> py, txt)
            # 메뉴바에 들어갈 File 메뉴 그룹에 들어갈 new 메뉴 객체 속에 들어갈 py와 txt 메뉴 객체
        menu_file.addMenu(file_new)
        menu_file.addAction(file_exit)      # 메뉴 등록

        self.resize(500, 500)
        self.setWindowTitle('개쩐당')
        self.show()


if __name__ == '__main__' :
    		# 메인 모듈인 경우
    app = QApplication(sys.argv)
    w = Example()
    sys.exit(app.exec_())
    		# 애플리케이션 종료까지 실행
```



### 4 체크메뉴, 컨텍스트메뉴

```python
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QAction, QMenu, qApp


class Example(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.statusBar()
        self.statusBar().showMessage("안녕!")

        menu = self.menuBar()               
        menu_file = menu.addMenu('File')    
        menu_edit = menu.addMenu('Edit')    
        menu_view = menu.addMenu('View')    

        file_exit = QAction('Exit', self)   
        file_exit.setShortcut('Ctrl+Q')
        file_exit.setStatusTip("잘가")
        new_txt = QAction("텍스트 파일", self) 
        new_py = QAction("파이썬 파일", self)
        
        view_stat = QAction("상태표시줄", self, checkable=True)  # 서브 그룹 객체 생성
        	# checkable 이라는 속성을 통해, 체크기능을 생성함.
        view_stat.setChecked(True)
        	# 체크기능의 초기값을 True로 잡음

        file_exit.triggered.connect(qApp.quit)
        view_stat.triggered.connect(self.tglStat)
        	# 이 기능이 True면 tglStat을 실행시킴  (직접 만든 함수임.)

        file_new = QMenu('New', self)       # 서브 그룹 생성

        file_new.addAction(new_txt)         # 서브 그룹 추가
        file_new.addAction(new_py)          # 서브 그룹 추가

        menu_file.addMenu(file_new)
        menu_file.addAction(file_exit)      # 메뉴 등록
        menu_view.addAction(view_stat)

        self.resize(500, 500)
        self.setWindowTitle('개쩐당')
        self.show()

    def tglStat(self, state):
        	# self와 state를 받음. state는 check값임.
        if state:
            self.statusBar().show()
        else:
            self.statusBar().hide()


    def contextMenuEvent(self, QContextMenuEvent):
        	# 기존에 있던 함수를 재정의함. 마우스 우클릭시 실행함.
        cm = QMenu(self)
        	# 메뉴 생성

        quit = cm.addAction("Quit")
			# 메뉴에 들어갈 "Quit"이란 이름의 메뉴 객체 생성 
            
        action = cm.exec_(self.mapToGlobal(QContextMenuEvent.pos()))
			# 메뉴 클릭에 대한 정보를 담음.
        
        if action == quit:
            # 메뉴 클릭을 했다면,
            qApp.quit()
	            # 애플리케이션 종료
                # file_exit.triggered.connect(QCoreApplication.instance().quit)와 같음.


if __name__ == '__main__' :
    		# 메인 모듈인 경우
    app = QApplication(sys.argv)
    w = Example()
    sys.exit(app.exec_())
    		# 애플리케이션 종료까지 실행
```



### 5 레이아웃

```python

```

