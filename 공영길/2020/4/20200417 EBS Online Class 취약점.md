# EBS Online Class 취약점	

# 동기

ebs가 듣기 싫어서 방법을 찾다가



## ㄱㄱㄱ 

ebs강의를 들어가서 네트워크 탭을 보면 학습 종료를 누르니까 lctreLrnSave.do라는 놈이 있어서 뜯어봤는데

body 부분에 강이의 id, 강의 완료 시간, 강의 수강시간 등의 정보가 전달되는거 보니 이녀석이 틀림이 없다!!!![img](https://postfiles.pstatic.net/MjAyMDA0MDlfMTY4/MDAxNTg2NDQxMTE3NTk1.pl86oriCojsMAGU8yGbqPcyjMUFeRLQEMH5f72SoYH0g.hJ8xlF-qC_2ouPXvL032pSDbMDXYglCFQrB_IvMSvpwg.PNG.sorisem4106/SE-a56c11f6-fa48-477e-9f6e-e17d48b631ae.png?type=w966)

이 녀석을 조작해서 수강완료를 해보자

이 녀석을 만드는 자바스크립트 코드를 뒤지면

 ![img](https://postfiles.pstatic.net/MjAyMDA0MDlfMjMz/MDAxNTg2NDQxMzk1MDE0.Dj4wSvx93qnKyd5HrkKMPK2m5Dj6GUPKJUEo0KPQBj8g.I4i8HORmJWOQliyyKK86yw50sgwRpjTRwaCbHe-nHIwg.PNG.sorisem4106/image.png?type=w966)

이런 부분이 나온다. 

revivTime이 동영상의 총 재생시간이라면 lrnTime은 수강 시간이겠지?

그 전에 있던 Request의 body값을 그대로 복사하고 IrnTime의 값을 revivTime으로 바꿔 이후 JQuery 를 사용하여 Request를 보낸다.

![img](https://postfiles.pstatic.net/MjAyMDA0MDlfMTYy/MDAxNTg2NDQxNjQ0NzM1.nFnjKfj1ACyZ3_4OD_OmpZIZiBdgQMmcwOC21-bNd4og.bsjZYnllW5TF9hdCNkGGufx_I605T5t0uMTub3MMs_og.PNG.sorisem4106/image.png?type=w966)

Response로 SUCCESS.

이후 수강종료를 하고 나가보니 완료가 되어있다. ㅅ