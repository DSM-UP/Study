function* interrogate() {
  const name = yield "What is your name?";
  const color = yield "What is you favorite color?";
  return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
it.next(); // { value: "What is your name?", done: false }
it.next("Ethan"); // { value: "What is your favorite color?", done: false }
it.next("orange"); // { value: "Ethan's favorite color is orange.", done: true }
