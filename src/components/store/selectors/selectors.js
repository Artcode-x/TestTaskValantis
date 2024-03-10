const mainSelector = (store) => store.store

export default mainSelector

export const userSelector = (store) => mainSelector(store).user
export const productsSelector = (store) => mainSelector(store).products
export const priceSelector = (store) => mainSelector(store).price

export const brandSelector = (store) => mainSelector(store).brand
export const prodSelector = (store) => mainSelector(store).product
export const flagSelector = (store) => mainSelector(store).isFlag

export const totalPagesCountSelector = (store) => mainSelector(store).totalPageCount

export const currentPageNumberSelector = (store) => mainSelector(store).pageNumber

export const allDataSelector = (store) => mainSelector(store).allData

export const ShowOrHideSelector = (store) => mainSelector(store).isShowOrHide
