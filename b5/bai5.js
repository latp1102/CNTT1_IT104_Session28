const checkCondition = (condition, callback) => {
    setTimeout(() => {
        callback(condition);
    }, 1000);
}
const display = (result) => {
    console.log("Điều kiện trả về: ", result);
}
checkCondition(true, display);
checkCondition(false, display);