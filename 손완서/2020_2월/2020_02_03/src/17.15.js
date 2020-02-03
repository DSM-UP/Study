let html = '<a class="nope" href="/yep">Yep<a>';
html = html.replace(/<a .*?(href=".*?").*?/, "<a $1>");

let html = '<a calss="yep" href="/yep" id="nope">Yep</a>';
html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?/, "<a $2 $1>");

const input = "One two three";
input.replace(/two/, "($`)"); // "One (One ) three"
input.replace(/two/, "($&)"); // "One (two ) three"
input.replace(/two/, "($')"); // "One ( three) three"
input.replace(/two/, "($$)"); // "One ($ ) three"
