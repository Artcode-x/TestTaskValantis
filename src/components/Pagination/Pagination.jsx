import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './Pagination.styled'
import {
    CurrentPageNumberSlector,
    totalPagesCountSelector,
} from '../store/selectors/selectors'
import { setCurrentPageData, setPageNumber } from '../store/reducers/reducers'

export default function Pagination() {
    const dispatch = useDispatch()
    const AllPagesCount = useSelector(totalPagesCountSelector)
    const currentPage = useSelector(CurrentPageNumberSlector)

    const prev = () => {
        if (currentPage > 1) {
            const newCurrentPage = currentPage - 1
            dispatch(setPageNumber(newCurrentPage))
            dispatch(setCurrentPageData())
        }
    }
    const next = () => {
        if (currentPage < AllPagesCount) {
            const newCurrentPage = currentPage + 1
            dispatch(setPageNumber(newCurrentPage))
            dispatch(setCurrentPageData())
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
