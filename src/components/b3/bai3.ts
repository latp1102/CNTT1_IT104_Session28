function processArray(arr: number[], callback: (element: number) => void): void {
    arr.forEach((element) => {
        setTimeout(() => {
            callback(element);
        },1000)
    });
}
function printElement(element: number): void {
  console.log(`Phần tử thứ: ${element}`);
}

const numbers: number[] = [1, 2, 3, 4, 5];
processArray(numbers, printElement);