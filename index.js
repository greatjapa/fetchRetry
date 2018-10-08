const fetch = require('node-fetch');

module.exports = async (url, opts) => {
    let retry = opts && opts.retry || 3
    while (retry > 0) {
        try {
            return await fetch(url, opts)
        } catch(e) {
            retry = retry - 1
            if (retry == 0) {
                throw e
            }
        }
    }
};