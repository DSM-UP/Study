function validPassword(p) {
  return (
    /[A-Z]/.test(p) && // 대문자가 최소한 하나
    /[a-z]/.test(p) && // 소문자가 최소한 하나
    /[0-9]/.test(p) && // 숫자가 최소한 하나
    !/[^a-zA-Z0-9]/.test(p)
  ); // 영문자와 숫자만 허용
}

function validPassword(p) {
  return /[A-Z].*[0-9][a-z]/.test(p);
}

function validPassword(p) {
  return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}
