// eslint-disable-next-line global-require
const CryptoJS = require("crypto-js")

export default function MD5test() {
  // Авто ген пароля авторизации и его шифр в md5
  const formatDate = () => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    let month = currentDate.getMonth() + 1
    let day = currentDate.getDate()
    if (month < 10) month = `0${month}`
    if (day < 10) day = `0${day}`
    return [year, month, day].join("")
  }
  const password = `Valantis_${formatDate()}`
  return CryptoJS.MD5(password).toString()
}

export function GetUniqItems(data, filterKey) {
  const uniqProd = []
  const uniqProducts = data.filter((el) => {
    if (!uniqProd.includes(el[filterKey])) {
      uniqProd.push(el[filterKey])
      return true
    }
    return false
  })
  return uniqProducts
}

export function filter(arr, value) {
  return arr.filter((price) => price === value)
}

export function FilterTypes(arr) {
  const UniqArr = arr.filter((item) => item !== null)
  const alphabetSort = UniqArr.sort()
  const result = alphabetSort.filter((el, index) => alphabetSort.indexOf(el) === index)

  return result
}

export function Uniqs(arr) {
  const result = arr.filter((el, index) => arr.indexOf(el) === index)
  return result
}

export function notShowEmptyBrands(arr) {
  console.log(arr)
  const UniqArr = arr.filter((item) => item.brand !== null)
  return UniqArr
}

export function ForPagination(arrData) {
  const pageForShow = 50
  const resultCountPages = Math.ceil(arrData.result.length / pageForShow)
  return resultCountPages
}

export function ForP(arr) {
  const pageForShow = 50
  const result = Math.ceil(arr.length / pageForShow)
  return result
}
export function removeDuplicateIds(arr) {
  console.log(arr)
  const result = arr.filter((item, index) => arr.findIndex((i) => i.id === item.id) === index)
  console.log(result)
  return result
}
