const http = require("http");

const server = http.createServer(function(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(
    JSON.stringify({
      platform: process.platform,
      nodeVersion: process.version,
      uptime: Math.round(process.uptime())
    })
  );
});

const port = 7070;
server.listen(port, function() {
  console.log(`Ajax server started on port ${port}`);
});

req.addEventListener("load", function() {
  // this.responseText는 JSON이 들어있는 문자열입니다.
  // JSON.parse를 써서 문자열을 객체로 바꿉니다.
  const data = JSON.parse(this.responseText);

  // 이 예제에서는 클래스가 serverInfo인 <div>의 텍스트만 교체합니다.
  const serverInfo = document.querySelector(".serverInfo");

  // 서버에서 반환한 객체를 키 기준으로 순회합니다.
  Object.keys(data).forEach(p => {
    // 텍스트를 교체할 요소를 찾습니다.
    const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
    // 서버에서 받은 값으로 텍스트를 교체합니다.
    for (let r of replacements) {
      r.textContent = data[p];
    }
  });
});

setInterval(refreshServerInfo, 200);
