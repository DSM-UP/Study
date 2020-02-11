function refreshServerInfo() {
  const $serverInfo = $(".serverInfo");
  $.get("http://localhost:7070").then(
    // 성공한 경우
    function(data) {
      Object.keys(data).forEach(p => {
        $(`[data-replace="${p}"]`).text(data[p]);
      });
    },
    function(jqXHR, textStatus, err) {
      console.error(err);
      $serverInfo.addClass("error").html("Error connecting to server.");
    }
  );
}
