function displayNumbers(callback, delay) {
    var count = 1;
    setInterval(function () {
        callback(count);
        count++;
    }, delay);
}
var printNumber = function (num) {
    console.log("S\u1ED1 th\u1EE9 t\u1EF1: ".concat(num));
};
displayNumbers(printNumber, 1000);
