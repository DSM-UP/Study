# linux 링크 파일

## link 파일

link 파일이라는 말을 처음 들어보는 경우도 굉장히 많지만 운영체제로 Windows를 사용하고 있다면 항상 사용하고 있는 것이 바로 이 link 파일이다.

![icon](https://user-images.githubusercontent.com/51042546/86851847-a028cf80-c0ee-11ea-8c88-3c30367052c9.png)

다음 이미지를 보면 확실히 화살표 모양을 달고 있다. 이는 해당 실행 프로그램 자체를 의미하는 것이 아니라 해당 실행 프로그램을 가리키고 있다는 것으로 해석할 수 있다.

![it is link file](https://user-images.githubusercontent.com/51042546/86852081-10cfec00-c0ef-11ea-84c4-8073b3657915.png)

실제 해당 아이콘의 파일 위치로 가보면 파일 형식이 바로 가기라는 것을 알 수 있다.

이 바로 가기 아이콘은 상당히 중요하다. 실행 파일의 위치는 고정되어 있고 바로 가기 아이콘의 위치는 어디에 가도 상관없이 해당 프로그램을 실행시킬 수 있는 링크를 가지고 다니기 때문이다.

linux도 Windows랑 비슷하다. linux에서도 link 파일이 있고, 실행 파일 대신 link 파일을 실행시키는 경우가 많이 있다는 것이다.

## 종류

### Symbolic Link

`ln -s filename1 filename2`

일단 기본적으로 링크 파일을 생성하기 위해서는 `ln` 명령어를 사용해야 한다.

이때, Symbolic Link 파일을 만들고 싶다면 옵션으로 s 옵션을 주게 된다.

![symbolic link](https://user-images.githubusercontent.com/51042546/86852555-f6e2d900-c0ef-11ea-9643-4d7458016453.png)

원본 파일이 있고 symbolic link는 해당 파일의 위치를 가리키고 있는 역할을 담당한다.

### Hard Link

`ln filename1 filename2`

Hard Link 파일을 만들때는 옵션을 주지 않으면 된다.

![image-20200708075346070](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200708075346070.png)

원본 파일에 대한 별칭을 붙여주는 개념이라고 생각하면 된다.

별도의 파일이 만들어지는 것이 아니다. 실제로 원본과 똑같은 크기와 생성일 등 파일 정보를 완전히 동일하게 가진다. 즉, 파일 이름만 따로 만든 것임을 알 수 있다.