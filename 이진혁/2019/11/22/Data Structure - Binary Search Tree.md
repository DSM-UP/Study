## Data Structure - Binary Search Tree

- 이번에는 Binary Search Tree의 삭제를 담당하는 함수인 BSTRemove() 함수를 정의하였다.
- 저번에도 BSTRemove() 함수를 정의한 적이 있었는데 그 때는 루트 노드의 자료형을 BTreeNode*로 받아서 free를 하고 return 하는 형식으로 함수를 만들었었는데 이번에는 BSTRemove() 함수의 매개변수인 루트 노드의 자료형을 BTreeNode* * 형식으로 정의하였다.
- 이렇게 이중 포인터로 자료형을 정의한 이유는 일중 포인터로 루트 노드를 받으면 main 함수의 루트노드도 일중 포인터로 되어 있기 때문에 포인터로 받아도 루트 노드의 값을 변경했을 때 루트 노드의 진짜 값이 바뀌는 것이 아닌 그 루트 노드의 주솟값이 변경되는 것이기 때문에 완전히 없앨 수 없었다. 그리고 함수 안에서 삭제하고자 하는 target을 free하게 되면 heap 영역에서 메모리를 해제하는 것이기 때문에 오류가 발생할 수 밖에 없었다.
- 따라서 이중포인터로 루트 노드를 매개변수로 받았다.
- 일단 BSTRemove() 함수의 원형은 아래와 같다.


BTreeNode * BSTRemove( BTreeNode * * bt, BTData data );


- 이렇게 루트 노드를 이중 포인터로 받은 것을 알 수 있다.
- BSTRemove() 함수는 총 3가지 단락으로 구별할 수 있다.
- target은 삭제하고자 하는 노드이다.

##### 첫 번째 : target의 자식이 존재하지 않을 때
- 첫 번째처럼 삭제하고자 하는 target의 자식이 존재하지 않으면 target의 부모와 target의 자식을 이어주는 코드가 존재하지 않아도 되기 때문에 쉽게 구현이 가능하다.
- 먼저 target의 부모의 left에 target이 있는지 right에 target이 있는지 확인하고 left에 있다면 (target의 부모를 before 라고 한다.)


before->left = NULL;
- 만약 target이 부모의 right에 달려 있다면


before->right = NULL;
- 과 같이 코드를 작성한다.
- 그리고 target을 리턴하는 방식으로 구현한다.

- 하지만 이 때 target이 루트 노드인지 아닌지도 잘 생각해야 한다.
- 만약 루트 노드라면 before이 NULL이기 때문에 오류가 발생할 수 있다.
- 따라서 만약 before 이 NULL이라면 루트노드를 NULL로 하여 리턴한다.

##### 두 번째 : target의 자식이 하나만 존재할 때
- 두 번째 방식은 첫 번째와는 다르게 target의 자식을 생각해야하므로 첫 번째 보다는 복잡한 코드를 가지고 있다. 하지만 이 Binary Search Tree 자체가 어려운 편은 아니기 때문에 그리 복잡하지는 않다.
- 먼저 target의 자식이 왼쪽에 존재하는지 오른쪽에 존재하는지 확인하고 그 값을 next에 담는다. (여기서 next는 target의 다음 즉, child를 말한다.)
- 그리고 첫 번째에서 했던 것처럼 target이 before의 left인지 right인지 확인하고 before의 target쪽에 next를 연결하고 target을 리턴한다.

- 이도 첫 번째와 마찬가지로 루트노드인지 아닌지를 고려해야 한다.
- 위의 방식은 루트노드가 아닐 때의 이야기 이다.
- 만약 삭제해야하는 대상인 target이 루트노드일 경우에 before이 NULL이다.
- 따라서 before이 NULL일 경우에 before과 next를 이어주는 문장을 실행하지 않고 그냥 자식이 left인지 right인지만 확인하고 루트 노드에 target->left 혹은 target->right를 대입하고 그 루트 노드를 리턴하는 방식으로 규현한다.

##### 세 번째 : target의 자식이 둘 다 존재할 때

- 사실 이 부분이 BSTRemove()의 본체라고 생각해도 될 정도이다.
- 일단 이 target을 그냥 없애버리면 자식인 left와 right가 루트 노드와 완전히 떨어져버려서 미아가 되어버린다.
- 그렇기 때문에 그 노드를 대신할 후계자를 왼쪽 혹은 오른쪽에서 찾아야 한다.
- 책과 선생님께서는 오른쪽 서브트리에서 후계자를 찾았기 때문에 우리는 왼쪽 서브트리에서 후계자를 찾는 형식으로 진행하기로 했다.
- 후계자를 찾는 방법은 아래와 같다.
- target의 left를 next로 둔다. 그리고 target을 nextBefore로 둔다.
- nextBefore를 next로 next를 next->right로 바꾸면서 진행한다.
- 그럭다가 next->right가 NULL이 되는 곳에 도착하게 되면 그 next가 target을 대신할 후계자가 된다.
- 왜냐하면 그 노드가 target노드와 가장 근사한 값이기 때문이다. (설명하자면 길다.)
- 따라서 target의 데이터를 임시 변수에 저장해놓고 target의 데이터에 next의 데이터를 대입한다.
- 그리고 nextBefore의 오른쪽에 존재하는 next와의 연결을 끊고 next->data에 아까 임시 저장해두었던 rData를 대입하고 next를 리턴한다.
- 하지만 이 부분도 target이 루트 노드일 때를 고려해야 한다.
- 만약 target이 루트 노드라면 nextBefore->right 가 next가 아닌 nextBefore->left가 next이다.
- 따라서 이 것을 이용해서 루트 노드인지 아닌지를 구별하고 루트 노드라면 루트 노드의 왼쪽편에 있는 nextBefore를 후계자로 삼고 next->right 가 루트노드->right를 가리키게 하여 루트 노드를 리턴하는 방식으로 구현한다.