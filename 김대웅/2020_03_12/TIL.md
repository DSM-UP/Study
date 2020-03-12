# TIL

ES6 모듈 시스템 (import, export)

ES6부터 import로 모듈을 불러오고, export로 모듈을 내보낼 수 있다.

~~~javascript
export const number = 10;

export function add(a, b) => a + b;

export class Player {
    constructor(name, ability) {
        this.name = name;
        this.ability = ability;
    }
}
~~~

위의 예를 아래의 예로 고칠 수 있다.

~~~javascript
const number = 10;

function add(a, b) => a + b;

class Player {
    constructor(name, ability) {
        this.name = name;
        this.ability = ability;
    }
}
export { number, add, Player };
~~~

모듈을 가져오는 방법

~~~~javascript
import { number, add, Player } from './export.js';
number; // 10
add(1, 10); //11
new Player('Park', 100); // Person { name: 'Park', ability: 100 }
~~~~

as를 이용한 import

~~~javascript
import * as exported from './export.js';
exported.number; // 10
exported.add(1, 10); // 11
new exported.Player('Park', 100); // Person { name: 'Park', ability: 100 }
~~~

