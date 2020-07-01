# TIL

플라이급 패턴 (Flyweight Pattern)

미국 사람 생성자가 있다. 미국 사람 객체마다 각각 이름과 나이가 다르다. 하지만 미국 사람이기 때문에 출신지와 소개하는 언어는 다 같다.

~~~javascript
var American = (function() {
    function American(name, age) {
        this.name = name;
        this.age = age;
        this.from = 'America';
        this.introduction = function() {
            console.log(`Hi, I'm ${this.name}(${this.age}).`);
        }
    }
    return American;
})();
~~~

하지만 객체를 생성할 때마다 this.introduction 메소드가 메모리를 잡아먹는다.

~~~javascript
var American = (function() {
    function American(name, age) {
        this.name = name;
        this.age = age;
        this.from = 'America';
    }
    American.prototype.introduction = function() {
        console.log(`Hi, I'm ${this.name}(${this.age}).`);
    }
    return American;
})();
~~~

그래서 위와 같이 메소드를 prototype으로 빼주었다. 모든 객체가 하나의 프로토타입을 공유하기 때문에 introduction 메소드는 한 번만 만들어진다.

~~~javascript
var American = (function() {
    function American(name, age) {
        this.name = name;
        this.age = age;
    }
    American.prototype.introduction = function() {
        console.log(`Hi, I'm ${this.name}(${this.age}).`);
    }
    American.prototype.from = 'American';
    return American;
})();
~~~

메소드를 prototype으로 빼는 것에서 더 나아가 모두 같은 속성이었던 from도 prototype으로 공유해서 메모리를 아껴줄 수 있다.