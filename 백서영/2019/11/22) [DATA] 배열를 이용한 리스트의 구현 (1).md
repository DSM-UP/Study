## 배열을 이용한 리스트의 구현

### 리스트의 이해

리스트라는 자료구조는 구현방법에 따라 크게 두 가지로 나뉜다

- 순차 리스트		배열을 기반으로 구현한 리스트
- 연결 시스트		메모리의 동적 할당을 기반으로 구현한 리스트

리스트 자료구조는 데이터를 나란히 저장, 중복된 데이터의 저장을 막지 않음



### <u>**리스트의 ADT**</u>
- void ListInit(List *plist);
  - 초기화할 리스트의 주소 값을 인자로 전달
  - 리스트 생성 후 제일 먼저 호출되어야 하는 함수

- void LInsert(List *plist, LData data);

  - 리스트에 데이터 저장, 매개변수 data에 전달된 값 전달

- int LFirst(List *plist, LData *pdata);

  - 첫 번째 데이터가 pdata가 가리키는 메모리에 저장
  - 데이터의 참조를 위한 초기화 진행
  - 참조 성공 시 TRUE(1), 실패 시 FALSE(0) 반환

- int LNext(List *plist, LData *pdata);

  - 참조된 데이터의 다음 데이터가 pdata가 가리키는 메모리에 저장
  - 순차적인 참조 위해 반복 호출이 가능
  - 참조를 새로 시작하려면, 먼저 LFirst 함수를 호출해야 한다
  - 참소 성공 시 TRUE(1), 실패 시 FALSE(0) 반환

- LData LRemove(List *plist);

  - LFirst 또는 LNext 함수의 마지막 반환 데이터를 삭제한다

  - 삭제된 데이터는 반환된다

  - 마지막 반환 데이터를 삭제하므로 연이은 반복 호출을 허용하지 않는다

    (바로 LRemove 불가)

- int LCount(List *plist);

  - 리스트에 저장되어 있는 데이터의 수 반환