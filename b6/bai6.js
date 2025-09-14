const task1 = (callback) => {
    setTimeout(() => {
        console.log("Task1 hoàn thành sau 1 giây");
        callback();
    }, 1000);
}
const task2 = (callback) => {
    setTimeout(() => {
        console.log("Task2 hoàn thành sau 1 giây");
        callback();
    }, 1500);
}
const task3 = (callback) => {
    setTimeout(() => {
        console.log("Task3 hoàn thành sau 1 giây");
        callback();
    }, 2000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Tất cả hoàn thành");
            
        })
    })
})