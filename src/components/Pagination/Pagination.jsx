import React from "react"
import { useDispatch, useSelector } from "react-redux"
import * as S from "./Pagination.styled"
import { setCurrentPageData, setPageNumber } from "../store/reducers/reducers"
import {
  ShowOrHideSelector,
  currentPageNumberSelector,
  totalPagesCountSelector,
} from "../store/selectors/selectors"

export default function Pagination({ renderStart }) {
  const dispatch = useDispatch()
  const currentPage = useSelector(currentPageNumberSelector)
  const allPagesCount = useSelector(totalPagesCountSelector)
  const flag = useSelector(ShowOrHideSelector)

  const prev = () => {
    if (currentPage > 1) {
      const newCurrentPage = currentPage - 1
      dispatch(setPageNumber(newCurrentPage))
      dispatch(setCurrentPageData())
    }
    if (!flag) {
      if (currentPage > 1) {
        renderStart(currentPage - 1)
        dispatch(setPageNumber(currentPage - 1))
      }
    }
  }

  const next = () => {
    if (currentPage < allPagesCount) {
      const newCurrentPage = currentPage + 1
      dispatch(setPageNumber(newCurrentPage))
      dispatch(setCurrentPageData())
    }
    if (!flag) {
      renderStart(currentPage + 1)
      dispatch(setPageNumber(currentPage + 1))
    }
  }

  return (
    <>
      <S.PagesContainer>
        <S.BtnPrev type="button" onClick={prev}>
          Назад
        </S.BtnPrev>
        <S.CurrentNumberPageDiv>{currentPage}</S.CurrentNumberPageDiv>
        <S.BtnNext type="button" onClick={next}>
          Вперед
        </S.BtnNext>
      </S.PagesContainer>
    </>
  )
}
