function delayedCallback(callback, delay) {
    setTimeout(function () {
        callback();
    }, delay);
}
function asynchrouns() {
    console.log("Nguyễn Văn A");
}
console.log("1");
delayedCallback(asynchrouns, 2000);
