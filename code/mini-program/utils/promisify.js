const promisify = fn => {
    return (options = {}) => {
        return new Promise((resolve, reject) => {
            options.success = function (...result) {
                resolve(...result);
            };
            options.fial = function (...errormsg) {
                reject(...errormsg);
            };
            fn(options);
        });
    };
};

export default promisify;