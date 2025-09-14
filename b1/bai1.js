const calculate = (a, b, callback) => {
    const sum = a + b;
    callback(sum);
}
const handleSum = (result) => {
    console.log(result);;
}
calculate(1,2,handleSum);