/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  brand: "",
  product: "",
  isFlag: false,
  pageNumber: 1,
  totalPageCount: {},
  currentPageData: [],
  allData: [],
  isShowOrHide: false,
}

const reducers = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload
    },
    setProduct: (state, action) => {
      state.products = action.payload
    },
    isFlagUpdate: (state, action) => {
      state.isFlag = action.payload
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload
    },
    setTotalPageCount: (state, action) => {
      state.totalPageCount = action.payload
    },
    setCurrentPageData: (state) => {
      const currentItems = state.pageNumber > 1 ? state.pageNumber - 1 * 50 : state.pageNumber - 1
      state.currentPageData = state.allData.slice(currentItems, 50 * state.pageNumber)
    },
    setAllData: (state, action) => {
      state.allData = action.payload
    },
    setShowOrHide: (state, action) => {
      state.isShowOrHide = action.payload
    },
  },
})

export const {
  setBrand,
  setProduct,
  isFlagUpdate,
  setPageNumber,
  setTotalPageCount,
  setCurrentPageData,
  setAllData,
  setShowOrHide,
} = reducers.actions
export default reducers
