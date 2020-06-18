## 블록체인 구현 - Python 3.8

### 파일

* `Block.py` : 블록체인의 요소 블록 클래스
* `Blockchain.py` : 블록 클래스를 잇는 블록체인 클래스



### Block.py

* `Block`은 말 그대로 블록체인의 요소 블록 하나를 의미한다.



* **`Block`의 요소들**
  * `timestamp` : 만들어진 시간
  * `hash` : 현재 블록의 해시값
  * `previous hash` : 이전 블록의 해시값
  * `nonce` : 찾아야 하는 특정 값
  * `transaction` : 실제 데이터 정보



* **`Block`의 코드 (1)**

  * ```python
    # 블록 클래스의 구성 요소들.
    class Block:
        def __init__(self, transactions, previous_hash, nonce = 0):
            self.timestamp = datetime.now()
            self.transactions = transactions
            self.previous_hash = previous_hash
            self.nonce = nonce
            self.hash = self.generate_hash()
    ```



* **`Block`의 코드 (2)**

  * ```python
    # 해시값 생성 함수
    def generate_hash(self):
        block_contents = str(self.timestamp) + str(self.transactions) + str(self.previous_hash) + str(self.nonce)
        block_hash = sha256(block_contents.encode())
        return block_hash.hexdigest()
    ```



* **`Block`의 코드 (3)**

  * ```python
    # 블록 요소 확인
    def print_block(self):
        print("timestamp:", self.timestamp)
        print("transactions:", self.transactions)
        print("current hash:", self.generate_hash())
    ```



### Blockchain.py

* `Blockchain`은 여러 블록들을 이용하여 블록체인을 구현하는 클래스이다.



* **`Blockchain`의 요소들**
  * 모든 블록들의 list
  * 모든 transaction들
  * `genesis_block`을 만드는 메서드
  * 블록을 추가하는 메서드
  * chain 확인



* **`Blockchain`의 코드 (1)**

  * ```python
    # 블록체인 구현 요소
    class Blockchain:
        # Blockchain의 요소들
        def __init__(self):
            self.chain = []
            self.all_transactions = []
            self.genesis_block()
        
        # 제네시스 블록 생성 함수
        def genesis_block(self):
            transaction = {}
            block = Block(transaction, 0)
            self.chain.append(block)
            return self.chain
     
       # 블록 추가 함수
        def add_block(self, transactions):
            previous_block_hash = self.chain[len(self.chain) - 1].hash
            new_block = Block(transactions, previous_block_hash)
            proof = self.proof_of_work(new_block)
            return proof, new_block
        
        # 체인 인증 함수
        def validate_chain(self, transactions):
            for i in range(1, len(self.chain)):
                current = self.chain[i]
                previous = self.chain[i-1]
                if current.hash != current.generate_hash():
                    print("The current hash of the block does not equal the generated hash of the block.")
                    return False
                if previous.hash != previous.generate_hash():
                    print("The Previous block's hash does not equal the previous hash value stored in the current block.")
                    return False
                if current.previous_hash != previous.hash:
                    return False
            return True    
        
        # 작업증명 함수 POW (proof of work)
        def proof_of_work(self, block, difficulty=2):
            proof = block.generate_hash()
    
            while proof[:difficulty] != '0'*difficulty:
                block.nonce += 1
                proof = block.generate_hash()
            return proof
    ```



### AppleCoin.py

* `AppleCoin.py`는 구현한 블록체인을 통하여 실제 블록체인을 만드는 파일이다.

