function init() {
    debuggerOutput(A);
    debuggerOutput(A);
    testone();
    debuggerOutput(A);
    debuggerOutput(A);

}

function testone() {
    debuggerOutput(B);
    debuggerOutput(B);
    debuggerOutput(B);
    test2();
}

function test2(params) {
    debuggerOutput(C);
    debuggerOutput(C);
    debuggerOutput(C);
}

function debuggerOutput(text) {
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text;
}