const myFilter = (array, searchValue, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], searchValue)) {
      result.push(array[i]);
    }
  }
  return result;
};

const callback = (element, searchValue) => {
  return element === searchValue;
};

const numbers = [1, 2, 2, 3, 4, 5, 6];

console.log(myFilter(numbers, 2, callback));   
console.log(myFilter(numbers, 10, callback)); 
