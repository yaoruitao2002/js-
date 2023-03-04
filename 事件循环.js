// 一个进程里面至少会有一个线程，线程就相当于一个人运行进程的代码
Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve().then(() => {
    console.log(2);
  });
});

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  })
  .then(() => {
    console.log(7);
  });
