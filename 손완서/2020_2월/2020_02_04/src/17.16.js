const html =
  `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
  `<A href="/bar" Class="bar">Bar</a>\n` +
  `<a href="/baz">Baz</a>\n` +
  `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`;

function sanitizeATag(aTag) {
  // 태그에서 원하는 부분을 뽑아냅니다.
  const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
  // parts[1]은 여는 <a> 태그에 들어있는 속성입니다.
  // parts[2]는 <a>와 </a> 사이에 있는 텍스트입니다.
  const attributes = parts[1]
    // 속성을 분해합니다.
    .split(/\s+/);
  return (
    "<a " +
    attributes
      // class, id, href 속성만 필요합니다.
      .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
      // 스페이스 한 칸으로 구분해서 합칩니다.
      .join(" ") +
    // 여는 <a> 태그를 완성합니다.
    ">" +
    // 텍스트를 추가합니다.
    parts[2] +
    // 마지막으로 태그를 닫습니다.
    "</a>"
  );
}

html.match(/<a .*?>(.*?)<\/a>/gi);

html.replace(/<a .*?>(.*?)<\/a>/gi, function(m, g1, offset) {
  console.log(`<a> tag found at ${offset}. contents: ${g1}`);
});

html.replace(/<a .*?<\/a>/gi, function(m) {
  return sanitizeATag(m);
});

html.replace(/<a .*?<\/a>/gi, sanitizeATag);
