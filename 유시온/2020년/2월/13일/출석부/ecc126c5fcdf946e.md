# 달력

달력을 생성하기 위해서는 다음과 같은 코드가 필요합니다.

```
makeCalendar(Element);
```

인자는 다음과 같습니다.

| Element          |
| ---------------- |
| 달력을 넣을 요소 |

아래는 예제 입니다.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
	<style>
   		 .calendar{
            width: 400px;
            height: 500px;
        }   
    </style>
</head>

<body>
    <div class = "calendar"></div>
    
</body>
<script src="./calendar.js"></script>
<script>
makeCalendar(document.querySelector(".calendar"));
    
</script>

</html>
```