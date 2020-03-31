# 메뉴바, 상태표시줄
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QAction, QMenu
from PyQt5.QtCore import QCoreApplication


class Example(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.statusBar()
        self.statusBar().showMessage("안녕!")

        menu = self.menuBar()               # 메뉴 생성
        menu_file = menu.addMenu('File')    # 그룹 생성
        menu_edit = menu.addMenu('Edit')    # 그룹 생성

        file_exit = QAction('Exit', self)   # 메뉴 객체 생성
        file_exit.setShortcut('Ctrl+Q')
        file_exit.setStatusTip("잘가")
        new_txt = QAction("텍스트 파일", self)   # 서브 그룹 객체 생성
        new_py = QAction("파이썬 파일", self)    # 서브 그룹 객체 생성

        file_exit.triggered.connect(QCoreApplication.instance().quit)

        file_new = QMenu('New', self)       # 서브 그룹 생성

        file_new.addAction(new_txt)         # 서브 그룹 추가
        file_new.addAction(new_py)          # 서브 그룹 추가

        menu_file.addMenu(file_new)
        menu_file.addAction(file_exit)      # 메뉴 등록

        self.resize(500, 500)
        self.setWindowTitle('개쩐당')
        self.show()


app = QApplication(sys.argv)
w = Example()
sys.exit(app.exec_())
