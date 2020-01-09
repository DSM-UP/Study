const f1 = function() {
  return "hello!";
};
// 또는
const f1 = () => "hello!";

const f2 = function(name) {
  return `Hello, ${name}!`;
};
// 또는
const f2 = name => `Hello, ${name}!`;

const f3 = function(a, b) {
  return a + b;
};
// 또는
const f3 = (a, b) => a + b;

const o = {
  name: "Julie",
  greetBackwards: function() {
    const getReverseName = () => {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  }
};
o.greetBackwards();
