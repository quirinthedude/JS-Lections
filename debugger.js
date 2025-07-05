let count = 0;

function init() {
    testone();
    debuggerOutput('init');
    testone();
    test2('test2');
    testone();
}

function testone(){
    debuggerOutput('testone');
}

function test2(text) {
    debuggerOutput(text);
    testone();
}

function debuggerOutput(text) {
    count++;
    let debuggerLogRef = document.getElementById('debugger_log');
    debuggerLogRef.innerHTML = text + count;
}