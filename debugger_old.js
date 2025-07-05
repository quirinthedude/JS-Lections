let count = 0;

function init() {
  debuggerOutput("A");
  debuggerOutput("A");
  testone();
  debuggerOutput("A");
  debuggerOutput("A");
}

function testone() {
  debuggerOutput("B");
  debuggerOutput("B");
  test2();
  debuggerOutput("B");
  debuggerOutput("B");
}

function test2() {
  debuggerOutput("C");
  debuggerOutput("C");
  debuggerOutput("C");
}

function debuggerOutput(text) {
  count++;
  let debuggerLogRef = document.getElementById("debugger_log");
  debuggerLogRef.innerHTML += " " + text + count;
}
