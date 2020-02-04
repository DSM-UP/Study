const text = "Visit oreilly.com today!";
const match = test.match(/[a-z]+(?:\.com|\.org|\.edu)/i);

const html =
  '<link rel="stylesheet" href="http://insecure.com/stuff.css"> \n' +
  '<link rel="stylesheet" href="https://secure.com/securestuff.css"> \n' +
  '<link rel="stylesheet" href="//anything.com\flexible.css">';

const matches = html.match(/(?:https:?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/gi);
