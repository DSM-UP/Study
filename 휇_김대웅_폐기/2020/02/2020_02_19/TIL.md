# TIL

자바스크립트 반복자 패턴

~~~javascript
var Works = (function() {
    function Works(workList) {
        this.workList = workList;
        this.index = 0;
    }
    Works.prototype.next = function() {
        console.log(`${this.workList[this.index++]} 끝`);
    }
    Works.prototype.done = function() {
        return this.workList.length === this.index;
    }
    return Works;
})();
~~~

해야할 일이 순서대로만 나열되는 경우에 반복자 패턴이 유용하다.

next로 다음 요소를 불러오고 done으로 배열이 끝났는지 아닌지 알 수 있다.

~~~javascript
while(!works.done()) {
    works.next();
}
~~~

