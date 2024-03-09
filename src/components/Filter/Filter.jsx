import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as S from "./Filter.styled"
import {
  isFlagUpdate,
  setAllData,
  setBrand,
  setCurrentPageData,
  setPageNumber,
  setShowOrHide,
  setTotalPageCount,
} from "../store/reducers/reducers"
import { filterBrand, filterPrice, filterProduct, getFields, getItems } from "../Api/Api"
import { FilterTypes, ForPagination, GetUniqItems } from "../hooks/hooks"
import { currentPageNumberSelector } from "../store/selectors/selectors"

export default function Filter() {
  const [showError, setShowError] = useState()
  const dispatch = useDispatch()
  const [price, setPrice] = useState("")
  const [xbrand, setxBrand] = useState("")
  const [productName, setProductName] = useState("")
  const curPage = useSelector(currentPageNumberSelector)

  const [disabledValues, setDisabledValues] = useState({
    button1: false,
    button2: false,
    button3: false,
  })

  const getPrice = async () => {
    try {
      dispatch(setPageNumber(1))
      dispatch(setShowOrHide(true))
      dispatch(isFlagUpdate(true))
      setDisabledValues((prevState) => ({ ...prevState, button1: true }))
      const resp = await filterPrice({ price })
      const respPrice = await getItems(resp.result)
      const UpdRespPrice = respPrice.result
      const result = GetUniqItems(UpdRespPrice, "product")
      const pageForShow = 50
      const resultCountPages = Math.ceil(result.length / pageForShow)
      dispatch(setAllData(result))
      dispatch(setTotalPageCount(resultCountPages))
      dispatch(setCurrentPageData())
    } catch (error) {
      if (error.response.status === 500) {
        setShowError("Слишком много запросов к серверу, попробуйте позднее")
      }
    } finally {
      setDisabledValues((prevState) => ({ ...prevState, button1: false }))
    }
  }

  const getBrands = async () => {
    try {
      dispatch(setShowOrHide(true))
      dispatch(isFlagUpdate(true))
      setDisabledValues((prevState) => ({ ...prevState, button2: true }))
      const response = await filterBrand(xbrand)
      const getArrBrands = await getItems(response.result)
      const resultCountPages = ForPagination(getArrBrands)
      dispatch(setAllData(getArrBrands.result))
      dispatch(setTotalPageCount(resultCountPages))
      dispatch(setCurrentPageData())
    } catch (error) {
      if (error.response.status === 500) {
        setShowError("Слишком много запросов к серверу, попробуйте позднее")
      }
    } finally {
      setDisabledValues((prevState) => ({ ...prevState, button2: false }))
    }
  }

  const getProd = async () => {
    try {
      dispatch(setShowOrHide(true))
      dispatch(isFlagUpdate(true))
      setDisabledValues((prevState) => ({ ...prevState, button3: true }))
      const response = await filterProduct(productName)
      const getArrProd = await getItems(response.result)
      const resultCountPages = ForPagination(getArrProd)
      dispatch(setAllData(getArrProd.result))
      dispatch(setTotalPageCount(resultCountPages))
      dispatch(setCurrentPageData())
    } catch (error) {
      if (error.response.status === 500) {
        setShowError("Слишком много запросов к серверу, попробуйте позднее")
      }
    } finally {
      setDisabledValues((prevState) => ({ ...prevState, button3: false }))
    }
  }

  const checkEnter = (e) => {
    if (e.key === "Enter") {
      getPrice()
    }
  }

  const checkEnterBrand = async (e) => {
    if (e.key === "Enter") {
      getBrands()
    }
  }

  const checkEnterProd = (e) => {
    if (e.key === "Enter") {
      getProd()
    }
  }

  const getAllBrands = async () => {
    dispatch(isFlagUpdate(false))
    dispatch(setShowOrHide(true))
    const response = await getFields("brand", curPage)
    const uniq = FilterTypes(response.result)
    console.log(uniq)
    dispatch(setBrand(uniq))
  }

  return (
    <>
      <S.Parent>
        <S.Sort>
          <S.TitleH3>Сортировать по цене:</S.TitleH3>
          <S.ButtonContainer>
            <S.PriceInput
              type="input"
              placeholder="Введите цену"
              onKeyDown={(e) => checkEnter(e)}
              onChange={(e) => setPrice(e.target.value)}
            />
            <S.SearchButton onClick={getPrice} disabled={disabledValues.button1}>
              {disabledValues.button1 ? "идет поиск..." : "Отфильтровать по цене"}
            </S.SearchButton>
          </S.ButtonContainer>
        </S.Sort>
        <S.Sort>
          <S.TitleH3>Сортировать по бренду</S.TitleH3>
          <S.ButtonContainer>
            <S.PriceInput
              type="input"
              placeholder="Введите Бренд"
              onChange={(e) => setxBrand(e.target.value)}
              onKeyDown={checkEnterBrand}
            />
            <S.SearchButton onClick={getBrands} disabled={disabledValues.button2}>
              {disabledValues.button2 ? "идет поиск..." : "Отфильтровать по бренду"}
            </S.SearchButton>
          </S.ButtonContainer>
        </S.Sort>
        <S.Sort>
          <S.TitleH3>Сортировать по названию продукта</S.TitleH3>
          <S.ButtonContainer>
            <S.PriceInput
              type="input"
              placeholder="Введите название"
              onKeyDown={checkEnterProd}
              onChange={(e) => setProductName(e.target.value)}
            />
            <S.SearchButton onClick={getProd} disabled={disabledValues.button3}>
              {disabledValues.button3 ? "идет поиск..." : "Отфильтровать по названию"}
            </S.SearchButton>
          </S.ButtonContainer>
        </S.Sort>
      </S.Parent>
      <S.Sort>
        <S.TitleH3>Показать все доступные бренды</S.TitleH3>
        <S.ButtonContainer>
          <S.Button onClick={getAllBrands}>Показать</S.Button>
        </S.ButtonContainer>
      </S.Sort>
      {showError && <S.ForErrors>{showError}</S.ForErrors>}
    </>
  )
}
