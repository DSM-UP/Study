## PYQT5 



1. [위젯창 생성, 버튼 추가](#1-위젯창-생성-버튼-추가)



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

