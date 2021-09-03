let shouldReject = false;
function basicPromise() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(!shouldReject);
      } else {
        resolve(!shouldReject);
      }
    }, 2000);
  });
  promise
    .then((value) => {
      console.log("promise,then :>> ", value);
      shouldReject = !shouldReject;
      return "resolved";
    })
    .catch((value) => {
      console.log("promise,catch :>> ", value);
      shouldReject = !shouldReject;
    })
    .then((value) => {
      console.log("promise, again then :>> ", value);
      shouldReject = !shouldReject;
      return "resolved";
    })
    .finally(() => {
      console.log("promise,finally settled:>> ");
    });
}
function advancePromise() {
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false);
    }, 400);
  });
  const promiseArray = [promise1, promise2];
  //   Promise.all    -> all promises which are resolved/rejected           => arrray
  //   Promise.allSettled -> any promise which is resolved/rejected         => arrray
  //   Promise.any    -> first promise which is either resolved/rejected    => object
  //   Promise.race   -> first promise which is either resolved/rejected    => object
  Promise.any(promiseArray)
    .then((value) => {
      console.log("promise,then :>> ", value);
      shouldReject = !shouldReject;
      return "resolved";
    })
    .catch((value) => {
      console.log("promise,catch :>> ", value);
      shouldReject = !shouldReject;
    });
}

async function asyncPromise() {
  const promise = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(!shouldReject);
      } else {
        resolve(!shouldReject);
      }
    }, 2000);
  });
  console.log("promise :>> ", promise);
}

function comparePromiseAsyncAwait() {
  const promise1 = Promise.resolve(1);
  const promise2 = Promise.reject(2);
  const promise3 = Promise.resolve(3);
  const promiseArray = [promise1, promise2, promise3];
}
function asyncCall() {
  //   basicPromise();
  advancePromise();
  //   asyncPromise();
//   comparePromiseAsyncAwait();
}
