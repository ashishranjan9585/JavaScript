const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 Sucess"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Sucess"), 5000);
});

const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("P2 Sucess"), 2000);
  setTimeout(() => reject("P3 Fail"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("Promise.all: " + res); // 1. Promise.all: P3 Fail
  })
  .catch((err) => {
    console.error("Promise.all: " + err);
  });

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log("Promise.allSettled:" + res); 
  })
  .catch((err) => {
    console.error("Promise.allSettled:" + err); // 4. Promise.allSettled:[object Object],[object Object],[object Object]
  });

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("Promise.any: " + res); // 3. Promise.any: P1 Sucess
  })
  .catch((err) => {
    console.error("Promise.any: " + err);
  });

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("Promise.race: " + res); // 2. Promise.race: P3 Fail
  })
  .catch((err) => {
    console.error("Promise.race: " + err);
  });
