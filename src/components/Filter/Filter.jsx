import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './Filter.styled'
import {
    isFlagUpdate,
    setAllData,
    setCurrentPageData,
    setTotalPageCount,
} from '../store/reducers/reducers'
import { filterBrand, filterPrice, filterProduct, getItems } from '../Api/Api'
import { ForPagination, GetUniqItems } from '../hooks/hooks'

export default function Filter() {
    const dispatch = useDispatch()
    const [price, setPrice] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [xbrand, setxBrand] = useState('')
    const [productName, setProductName] = useState('')

    const getPrice = async () => {
        try {
            dispatch(isFlagUpdate(true))
            setDisabled(true)
            const resp = await filterPrice({ price })
            const respProducts = await getItems(resp.result)
            const UpdRespProducts = respProducts.result
            const result = GetUniqItems(UpdRespProducts, 'product')
            const pageForShow = 50
            const resultCountPages = Math.ceil(result.length / pageForShow)
            dispatch(setAllData(result))
            dispatch(setTotalPageCount(resultCountPages))
            dispatch(setCurrentPageData())
        } catch (error) {
            console.log(error.message)
        } finally {
            setDisabled(false)
            dispatch(isFlagUpdate(false))
        }
    }

    const getBrands = async () => {
        try {
            dispatch(isFlagUpdate(true))
            const response = await filterBrand(xbrand)
            const getArrBrands = await getItems(response.result)
            const resultCountPages = ForPagination(getArrBrands)
            dispatch(setAllData(getArrBrands.result))
            dispatch(setTotalPageCount(resultCountPages))
            dispatch(setCurrentPageData())
        } catch (error) {
            console.log(error.message)
        } finally {
            dispatch(isFlagUpdate(false))
        }
    }

    const getProd = async () => {
        try {
            dispatch(isFlagUpdate(true))
            const response = await filterProduct(productName)
            const getArrProd = await getItems(response.result)
            const resultCountPages = ForPagination(getArrProd)
            dispatch(setAllData(getArrProd.result))
            dispatch(setTotalPageCount(resultCountPages))
            dispatch(setCurrentPageData())
        } catch (error) {
            console.log(error.message)
        } finally {
            dispatch(isFlagUpdate(false))
        }
    }

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            getPrice()
        }
    }

    const checkEnterBrand = async (e) => {
        if (e.key === 'Enter') {
            getBrands()
        }
    }

    const checkEnterProd = (e) => {
        if (e.key === 'Enter') {
            getProd()
        }
    }

    return (
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
                    <S.SearchButton onClick={getPrice} disabled={disabled}>
                        {disabled ? 'идет поиск...' : 'Отфильтровать по цене'}
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
                    <S.SearchButton onClick={getBrands} disabled={disabled}>
                        {disabled ? 'идет поиск...' : 'Отфильтровать по бренду'}
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
                    <S.SearchButton onClick={getProd} disabled={disabled}>
                        {disabled
                            ? 'идет поиск...'
                            : 'Отфильтровать по названию'}
                    </S.SearchButton>
                </S.ButtonContainer>
            </S.Sort>
        </S.Parent>
    )
}
