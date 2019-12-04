## DDaMamIn - Join

- email check를 할 때 이메일을 정상적으로 체크하게 되면 session에 "email_value" 라는 key에 입력해서 getParameter() 를 통해 받아온 email을 value에 넣어서 저장하게 된다.
- 그 다음 index 페이지에 다시 돌아오게 되면 session.getAttribute("email_value"); 를 통해 이메일을 정상적으로 처리했다면 어떠한 값이 들어있을 것이고 만약에 이메일이 정상적으로 처리되지 않았다면 null 값이 들어있을 것이므로 email_value 의 값이 null 이거나 "" 이라면 이라는 if문을 이용해서 index 페이지의 배경을 바꿔주도록 하였다.
- 여기서 이메일을 정확하게 입력했다면 그 이메일을 가져와서 원래 이메일 칸이 비어있을 것이므로 기본적으로 placeholder를 통해 기본값을 넣어주고 만약 form 을 통해 데이터가 전달되지 않을 것을 대비하여 javascript를 통해 value 값을 직접적으로 넣어주는 식으로 처리하였다.
- 그렇게 기본 값을 준 뒤 , readonly 키워드를 통해 고치지 못하도록한다.
- 그리고 아까 if문으로 index페이지를 처리하였으므로 check 버튼도 삭제하였다.