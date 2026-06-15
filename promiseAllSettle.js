function customAllSettle (promiseArray) {
    return new Promise((resolve) => {
        const result = [];
        let counter = 0;

        promiseArray.foreach((item, index) => {
            Promise.resolve(item)
            .then((value) => {
               result[index] = { status: "fulfilled", value: value }
            })
            .catch((err) => {
                result[index] = { status: "rejected", value: err }
            })
            .finally(() => {
                counter++;

                if (counter === promiseArray.length) {
                    resolve(result)
                }
            });
        });
    });
}