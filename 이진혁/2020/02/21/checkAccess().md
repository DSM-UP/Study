## checkAccess()

- checkAccess() 메소드는 현재 스레드가 스레드 그룹을 변경할 권한이 있는지 체크하는 메소드이다.
  만약 스레드 그룹을 변경할 권한이 존재하지 않는다면 SecurityException이 발생하게 된다.
  이 예외의 발생 여부로 권한 체크를 할 수 있다.

- 예제 코드를 만드려고 했으나 SecurityException이 뜨는 경우를 발견하지 못해서 넘기도록 하겠다.