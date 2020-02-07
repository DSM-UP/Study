addEventLogger(body, "capture");
addEventLogger(body, "bubble");
addEvnetLogger(div, "capture", "cancel");
addEventLogger(div, "bubble");
addEvnetLogger(button, "capture");
addEventLogger(button, "bubble");

/*
capture: BODY
captrue: DIV (canceled)
capture: BUTTON (canceled)
bubble: BUTTON (canceled)
bubble: DIV (canceled)
bubble: BODY (canceled)
*/

addEventLogger(body, "capture");
addEventLogger(body, "bubble");
addEvnetLogger(div, "capture", "cancel");
addEventLogger(div, "bubble");
addEvnetLogger(button, "capture", "stop");
addEventLogger(button, "bubble");

/*
capture: BODY
captrue: DIV (canceled)
capture: BUTTON (canceled)
bubble: BUTTON (canceled)
*/

addEventLogger(body, "capture");
addEventLogger(body, "bubble");
addEvnetLogger(div, "capture", "cancel");
addEventLogger(div, "bubble");
addEvnetLogger(button, "capture", "stop!");
addEventLogger(button, "bubble");

/*
capture: BODY
capture: DIV (canceled)
capture: BUTTON (canceled)
*/
