function customPromise (promiseArray) {
  let result = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    promiseArray.forEach((item, index) => {
      result[index] = resolve(item);
      counter++;

      if (counter === promiseArray.length) {
        resolve(result);
      }
    })
    .catch((err) => {
      reject(err);
    });
  });
}