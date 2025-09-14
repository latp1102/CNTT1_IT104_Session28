function displayNumbers(callback: (num: number) => void, delay: number): void {
  let count: number = 1;

  setInterval(() => {
    callback(count);
    count++;
  }, delay);
}

const printNumber = (num: number): void => {
  console.log(`Số thứ tự: ${num}`);
};

displayNumbers(printNumber, 1000);
