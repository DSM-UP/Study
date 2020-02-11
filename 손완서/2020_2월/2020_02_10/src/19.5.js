$("p").text("ALL PARAGRAPHS REPLACED");

$("p").html("<i>ALL</i> PARAGRAPHS REPLACED");

$("p") // 모든 문단에 일치합니다.
  .eq(2) // 세 번째 문단(인덱스는 0으로 시작합니다)
  .html("<i>THIRD</i> PARAGRAPH REPLACED");

$("p").remove();

$("p").append("<sup>*</sup>");

$("p")
  .after("<hr>")
  .before("<hr>");

$("<sup>*</sup>").appendTo("p"); // $('p').append('<sup>*</sup>')와 같습니다.
$("<hr>").insertBefore("p"); // $('p').before('<hr>')와 같습니다.
$("<hr>").insertAfter("p"); // $('p').after('<hr>')와 같습니다.

$("p:odd").css("color", "red");

$("p")
  .after("<hr>")
  .append("<sup>*</sup>")
  .filter(":odd")
  .css("color", "red");

$("p")
  .after("<hr>")
  .not(".highlight")
  .css("margin-left", "20px");

$("p")
  .before("<hr>")
  .find(".code")
  .css("font-size", "30px");
