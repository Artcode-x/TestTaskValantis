// eslint-disable-next-line global-require
const CryptoJS = require('crypto-js')

export default function MD5test() {
    const password = 'Valantis_20240227'
    return CryptoJS.MD5(password).toString()
}
