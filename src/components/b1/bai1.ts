function calculate (
    a: number, 
    b: number, 
    callback: (result: number) => void ): void {
    const sum: number = a+ b;
    callback(sum);
}
function printResult(result: number): void {
    console.log('kết quả phép cộng', result);
    
}
calculate(5,7,printResult);