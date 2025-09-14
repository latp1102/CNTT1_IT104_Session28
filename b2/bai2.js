const delayedCallback = (callback) => {
    setTimeout(() => {
        callback();
    }, 2000);
}
const asynchrouns = () => {
    console.log("Nguyễn Văn A");
    
}
console.log("1");
delayedCallback(asynchrouns)
