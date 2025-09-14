function processArray(arr, callback) {
    arr.forEach(function (element) {
        setTimeout(function () {
            callback(element);
        }, 1000);
    });
}
function printElement(element) {
    console.log("Ph\u1EA7n t\u1EED th\u1EE9: ".concat(element));
}
var numbers = [1, 2, 3, 4, 5];
processArray(numbers, printElement);
