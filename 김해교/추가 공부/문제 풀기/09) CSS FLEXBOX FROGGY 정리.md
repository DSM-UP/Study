# CSS - FLENBOX FROGGY 

> css속성 중 flx를 조금 더 쉽게 알 수 있는 FLENBOX FROGGY  게임 답 + 풀이
>
> 총 24문제, 7속성이 들어있다. 

## justify-content

: 가로선 상에서 정렬

- `flex-start`: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
- `flex-end`: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
- `center`: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
- `space-between`: 여러 줄들 사이에 동일한 간격을 둡니다.
- `space-around`: 여러 줄들 주위에 동일한 간격을 둡니다.
- `stretch`: 여러 줄들을 컨테이너에 맞도록 늘립니다.



#### 1. justify-content: flex-end;

#### 2. justify-content: center;

#### 3. justify-content: space-around;

#### 4. justify-content: space-between;



## align-items

: 세로선 상에서 정렬

- `flex-start`: 요소들을 컨테이너의 꼭대기로 정렬합니다.
- `flex-end`: 요소들을 컨테이너의 바닥으로 정렬합니다.
- `center`: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
- `baseline`: 요소들을 컨테이너의 시작 위치에 정렬합니다.
- `stretch`: 요소들을 컨테이너에 맞도록 늘립니다.



#### 5. align-items: flex-end;

#### 6. justify-content: center; + align-items: center;

#### 7. justify-content: space-around; + align-items: flex-end;


## flex-direction

- `row`: 요소들을 텍스트의 방향과 동일하게 정렬합니다.
- `row-reverse`: 요소들을 텍스트의 반대 방향으로 정렬합니다.
- `column`: 요소들을 위에서 아래로 정렬합니다.
- `column-reverse`: 요소들을 아래에서 위로 정렬합니다.



#### 8. flex-direction: row-reverse;

#### 9. flex-direction: column;

#### 10. flex-direction: row-reverse; + justify-content: flex-end;

#### 11. justify-content: flex-end; + flex-direction: column;
#### 12. justify-content: space-between; + flex-direction: column-reverse;
#### 13. justify-content: center; + flex-direction: row-reverse; +align-items: flex-end;



## order

: 각 요소에 적용 가능(기본값은 0, 양수나 음수로 바꾸기 가능)



#### 14. order:3;

#### 15. order: -4;



## align-self

: 개별 요소에 적용할 수 있는 속성이다, 값들은 지정한 요소에만 적용이 된다.



#### 16. align-self:flex-end;

#### 17. order: 4; + align-self: flex-end;


## flex-wrap

- `nowrap`: 모든 요소들을 한 줄에 정렬합니다.
- `wrap`: 요소들을 여러 줄에 걸쳐 정렬합니다.
- `wrap-reverse`: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.



#### 18. flex-wrap: wrap;

#### 19. flex-direction: column; + flex-wrap: wrap;


## flex-flow

: 공백문자를 이용하여 **두 속성의 값들을 인자**로 받을 수 있는 속성이다



#### 20. flex-flow: column wrap;



## **align-content**

: 여러 줄 사이의 간격을 지정하는 속성이다(한 줄만 있는 경우 효과는 보이지 않음)

- `flex-start`: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
- `flex-end`: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
- `center`: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
- `space-between`: 여러 줄들 사이에 동일한 간격을 둡니다.
- `space-around`: 여러 줄들 주위에 동일한 간격을 둡니다.
- `stretch`: 여러 줄들을 컨테이너에 맞도록 늘립니다.



#### 21. align-content: flex-start;

#### 22. align-content: flex-end;

#### 23. flex-direction: column-reverse; + align-content: center;
#### 24. flex-direction: column-reverse; 

#### flex-wrap:wrap-reverse;
justify-content: center;
align-content: space-between;

