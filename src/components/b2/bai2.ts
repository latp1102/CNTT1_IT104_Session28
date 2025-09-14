function delayedCallback(callback: () => void, delay: number): void {
  setTimeout(() => {
    callback();
  }, delay);
}

function asynchrouns(): void {
  console.log("Nguyễn Văn A");
}

console.log("1");
delayedCallback(asynchrouns, 2000);
