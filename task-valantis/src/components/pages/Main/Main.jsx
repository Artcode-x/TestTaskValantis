import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../../Pagination/Pagination'
import * as S from './Main.styled'
import Filter from '../../Filter/Filter'
import ProductList from '../../ProductList/ProductList'
import CircleLoader from '../../Loader/Loader'
import { flagSelector } from '../../store/selectors/selectors'

function Main() {
    const flagForLoader = useSelector(flagSelector)

    return (
        <S.GeneralBlock>
            {flagForLoader ? <CircleLoader /> : <Filter />}
            <Pagination />
            <ProductList />
        </S.GeneralBlock>
    )
}

export default Main
