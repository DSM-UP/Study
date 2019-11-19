## Data Structure

##### Binary Search Tree의 Delete 부분에서 Node를 표현하는 BTreeNode를 이중 포인터로 받아야 하는 이유가 BTreeNode가 포인터 형식으로 정의되어 있다면 포인터의 값을 바꾸기 위해서는 일중 포인터가 아닌 이중 포인터로 접근해야 BTreeNode의 값을 바꿀 수 있다는 것이라는 것을 알게 되었습니다.

##### Binary Search Tree에서 저번에 구현한 Insert 부분에서 return 값을 만들었을 때와 만들지 않았을 때의 차이점을 확실히 알았다.
- return 값을 정의해주지 않는다면 이중포인터를 통해 직접 값을 바꾸어야 한다.
- return 값을 정의해준다면 내가 구현한 것처럼 이중 포인터가 아닌 일중 포인터를 이용해서 값을 대입해줄 수 있기 때문에 좀 더 코드를 보기가 쉽게 코드를 짤 수 있다.