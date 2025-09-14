const myForEach = (arr, callback) => {
    for (let index = 0; index < arr.length; index++) {
        callback(arr[index], index, arr);
    }
}
const handleItem = (currentValue, index, arr) => {
    console.log(`Vị trí: ${index} | Gía trị: ${currentValue} | Mảng: ${arr}`);
}
myForEach([1,2,3,4], handleItem);