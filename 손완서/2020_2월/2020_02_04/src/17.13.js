const input =
  "Regex pros know the difference between\n" +
  "<i>greedy<i> and <i>lazy<i> matching.";
input.replace(/<i>(.*)<\i>/gi, "<strong>$1<strong>");

input.replace(/<i>(.*?)<\i>/gi, "<strong>$1<strong>");
