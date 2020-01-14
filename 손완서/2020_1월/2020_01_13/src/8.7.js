const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join(); // "1,,hello,,true,"
arr.join(""); // "1hellotrue"
arr.join(" -- "); // "1 -- -- hello -- --true --"

const attributes = ["Nimble", "Perceptive", "Generous"];
const html = "<ul><li>" + attributes.join("</li><li>") + "</li></ul>";
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";
