# 위젯창 생성, 버튼추가
import sys
from PyQt5.QtWidgets import QApplication, QWidget, QPushButton

class Example(QWidget):
    def __init__(self):
        super().__init__()
        self.initUI()


    def initUI(self):
        btn = QPushButton('클릭하세요!', self)
        btn.resize(btn.sizeHint())
        btn.move(20, 30)
        btn.setToolTip('냐옹')

        btn2 = QPushButton('click!', self)
        btn2.resize(btn.sizeHint())
        btn2.move(60, 90)

        self.setGeometry(300, 300, 400, 500)
        self.setWindowTitle('개쩐당')
        self.show()




app = QApplication(sys.argv)
w = Example()
sys.exit(app.exec_())
