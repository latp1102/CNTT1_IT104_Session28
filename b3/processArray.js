const processArray = (arr, callback) => {
  arr.forEach((element) => {
    setTimeout(() => {
      callback(element);
    }, 1000);
  });
};

const printElement = (element) => {
  console.log(`Phần tử thứ: ${element}`);
};

const numbers = [1, 2, 3, 4, 5];
processArray(numbers, printElement);
