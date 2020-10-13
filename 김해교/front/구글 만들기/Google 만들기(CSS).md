# Google 만들기

> **CSS**

```css
.head{
    display: flex;
    justify-content: flex-end;
}

a{
    color: #707070;
    text-decoration: none;
    margin: 5px;
    font-size: 14px;
    font-family: "arial";
}

a:hover{
    text-decoration: underline;
}

.search_form{
    display: flex;
    align-self: start;
    justify-content: center;
    margin-bottom: 30px;
}

.search{
    border-radius:150px 140px;
    box-shadow: 3px 3px 5px #C3C3C3;
    border: 1px solid #EAEAEA;
    width: 550px;
    height: 22px;
    font-size: 15pt;
    padding: 15px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
}

.logo{
    height: 92px;
    width: 272px;
    margin-top: 108px;
    display: block;
    border: none;
    margin-left: auto;
    margin-right: auto;
    background: url(./logo.JPG) -56px -20px /140% 135% no-repeat;
}

.button{
    border-radius: 150px 140px;
    box-shadow: 3px 3px 5px #C3C3C3;
    border: 1px solid #EAEAEA;  
    min-width: 32px;
    padding: 4px;
    float: right;
    position:absolute; bottom:0px;
    right: 0px;
    margin: 20px;
}

.button_in{
    border:none;
    font-size: 400;
    background-color: white;
    color : blue;
}
.btn-wrap{  
    outline: none;
    align-items: center;
    display: flex;
    justify-self: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    margin: 5px;
}

div .btn-wrap:hover{
    background-color: grey;
}

.go_btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50px;
    background-color: #f1f3f4;  
}

span{
    display: flex;
    align-items: center;
    justify-content: center;
    color:#000000;
    font-size: 16.25px;
    width: 88px;
    margin-top: 7px;
    padding: 0 8px;
}
.tmp_img {
    background: rgb(246, 214, 214);
    width: 24px;
    height: 24px;
}
.btn-container {
   width: 461px;
   height: 259px;
   display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-wrap: wrap;
    align-content: space-around;
}
```

