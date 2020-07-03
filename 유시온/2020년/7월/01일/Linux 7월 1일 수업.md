## Linux



* `cutyapple`이란 유저 추가

  ``` shell
  sudo adduser cutyapple
  
  cat /etc/passwd
  ```



* `cutyapple`이란 유저를 `tomcat`이라는 그룹에 추가

  ``` shell 
  sudo usermod -aG tomcat cutyapple
  ```



* `cutycarrot`이라는 유저로 계정 변경

  ``` shell
  su - cutycarrot
  ```



* `tomcat`이 실행 중인지 출력

  ```shell
  ps -ef | grep tomcat
  ```

  

* 톰캣 실행

  ``` shell
  /usr/local/tomcat/apache-tomcat-9.0.36/bin/startup.sh
  ```



* w3m으로 `http://localhost:8080` 실행

  ```shell
  w3m http://localhost:8080
  ```



* 환경변수 편집

  ```shell
  sudo nano /etc/environment
  
  source /etc/environment
  source ~/.profile
  ```



* 프로세스 백그라운드, 포그라운드 전환

  ```shell
  ctrl + z
  fg 1
  ```

  