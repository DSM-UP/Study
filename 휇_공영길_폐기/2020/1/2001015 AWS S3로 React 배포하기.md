# AWS S3로 React 배포하기

* AWS에 로그인후 S3 서비스에 들어간다

* 버킷 만들기를 클릭한다

* 버킷 이름 설정후 다음을 계속눌러 버킷을 생성한다

* 버킷 이름클릭후 권한 클릭 -> 버킷 정책 클릭.

  {
      "Version": "2012-10-17",
      "Statement": [
          {
              "Sid": "AddPerm",
              "Effect": "Allow",
              "Principal": "*",
              "Action": "s3:GetObject",
              "Resource": "arn:aws:s3:::자신의 버킷이름/*"
          }
      ]
  }

* 입력후 저장.

* 개요 클릭후 npm run build / yarn build 한 내용을 그대로 복사해준다

  EX )

  ![image-20200105232047045](C:\Users\user\AppData\Roaming\Typora\typora-user-images\image-20200105232047045.png)