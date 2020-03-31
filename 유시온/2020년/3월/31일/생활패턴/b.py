# 이벤트처리, 메세지박스
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

        self.resize(500, 500)
        self.setWindowTitle('개쩐당')
        self.show()

    def closeEvent(self, QCloseEvent):
        answer = QMessageBox.question(self, "종료 확인", "종료하시겠습니까?",
                             QMessageBox.Yes | QMessageBox.No, QMessageBox.No)
        if answer == QMessageBox.Yes:
            QCloseEvent.accept()
        else:
            QCloseEvent.ignore()

app = QApplication(sys.argv)
w = Example()
sys.exit(app.exec_())
