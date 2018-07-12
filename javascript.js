//InstPause second version by Ningaro
var InstTurn = 0;
var targetNode = document.querySelector("div[class*='B20bj']");

function triggerMouseEvent(node, eventType) {
  var clickEvent = document.createEvent('MouseEvents');
  clickEvent.initEvent(eventType, true, true);
  node.dispatchEvent(clickEvent);
  if (InstTurn == 1)
    setTimeout("triggerMouseEvent(targetNode, 'mousedown')", 1);
}
document.addEventListener('keydown', (event) => {
  if (event.keyCode == 80) {
    if (InstTurn == 0) {
      console.log('[InstPause] Turn on!');
      InstTurn = 1;
      targetNode = document.querySelector("div[class*='B20bj']");
      triggerMouseEvent(targetNode, 'mousedown');
    } else {
      console.log('[InstPause] Turn off!');
      InstTurn = 0;
    }
  }
});
if (targetNode) {
  triggerMouseEvent(targetNode, 'mousedown');
} else
  console.log("[InstPause] Story window not found!");
