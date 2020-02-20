const USER_EMAIL = Symbol();
class User {
  setEmail(value) {
    if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
    this[USER_EMAIL] = value;
  }
  getEmail() {
    return this[USER_EMAIL];
  }
}

const u = new User();
u.setEmail("john@doe.com");
console.log(`User email: ${u.getEmail()}`);

const u = new User();
u.email = "john@doe.com";
console.log(`User email: ${u.email}`);

const USER_EMAIL = Symbol();
class User {
  set email(value) {
    if (!/@/.test(value)) throw new Error(`invalid email: ${value}`);
  }
  get email() {
    return this[USER_EMAIL];
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get perimeter() {
    return this.width * 2 + this.height * 2;
  }
}
