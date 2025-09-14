function calculate(a, b, callback) {
    var sum = a + b;
    callback(sum);
}
function printResult(result) {
    console.log('kết quả phép cộng', result);
}
calculate(5, 7, printResult);
