// ==UserScript==
// @name         InstPause
// @namespace    https://github.com/Ningaro/InstPause
// @version      3.0
// @description  InstPause by Ningaro, press P button when you watch stories.
// @author       Ningaro & Programant
// @include      https://www.instagram.com/*
// @license      MIT
// @icon         https://raw.githubusercontent.com/Ningaro/InstPause/master/bin/icon32.png
// @icon64       https://raw.githubusercontent.com/Ningaro/InstPause/master/bin/icon64.png
// ==/UserScript==

//"use strict";

console.log('InstPause ready for work :)');
var nIntervId;
var InstTurn = 0;
var nextErrorWillBeFirst = 1;

function triggerMouseEvent() {
  var event = document.createEvent('MouseEvents');
  event.initEvent('mousedown', true, true);
  var targetNode = document.querySelector("div[class*='B20bj']");
  if (targetNode) {
      targetNode.dispatchEvent(event);
      nextErrorWillBeFirst = 1;
  } else {
      if (nextErrorWillBeFirst == 1) {
          // для повторяющихся событий выводим в лог только один раз
          console.log("[InstPause] Story window not found!");
          // и выключаем обработку
          switchOff();
      }
      nextErrorWillBeFirst = 0;
  }
}

function switchOn(){
   console.log('[InstPause] Turn on!');
   InstTurn = 1;
   nextErrorWillBeFirst = 1;
   nIntervId = setInterval(triggerMouseEvent, 1);
}

function switchOff(){
   console.log('[InstPause] Turn off!');
   InstTurn = 0;
   clearInterval(nIntervId);
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 80) {
    if (InstTurn == 0) {
      switchOn();
    } else {
      switchOff();
    }
  }
});
