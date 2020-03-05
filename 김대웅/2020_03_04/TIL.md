# TIL

SSL (Secure Socket Layer) 적용

SSL은 클라이언트와 서버 간에 오가는 데이터를 암호화해준다. 

SSL을 적용하기 위해서는 인증서를 발급받아야 한다. 인증서는 몇몇 기관에서만 돈을 내고 발급 가능했지만 Let's Encrypt는 무료로 SSL 인증서를 발급해준다.

nodejs에 Let's Encrypt를 적용하기 위해서는 greenlock 모듈을 사용해야 한다.