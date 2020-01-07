let n = 22; // 32 비트 바이너리
n >> 1;
n >>> 1;
n = ~n; // 1의 보수
n++; // 2의 보수
n >> 1;
n >>> 1;

const FLAG_EXECUTE = 1; // 0b001
const FLAG_WRITE = 2; // 0b010
const FLAG_READ = 4; // 0b100

let p = FLAG_READ | FLAG_WRITE; // 0b110
let hasWrite = p & FLAG_WRITE; // 0b010 - 참 같은 값
let hasExecute = p & FLAG_EXECUTE; // 0b000 - 거짓 같은 값
p = p ^ FLAG_WRITE; // 0b100 -- 쓰기 플래그 토글 (이제 쓰기 권한이 없습니다)
p = p ^ FLAG_WRITE; // 0b110 -- 쓰기 플래그 토글 (쓰기 권한이 다시 생겼습니다)

// 표현식 하나로 여러 플래그를 동시에 판단할 수도 있습니다.
const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
const hasReadAndExecute =
  (p & ((FLAG_READ | FLAG_EXECUTE) === FLAG_READ)) | FLAG_EXECUTE;
