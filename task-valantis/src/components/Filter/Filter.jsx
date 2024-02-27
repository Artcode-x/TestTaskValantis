import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './Filter.styled'
import { productsUpdate } from '../store/reducers/reducers'
import { getItems, postReq } from '../Api/Api'

export default function Filter() {
    const dispatch = useDispatch()
    const [price, setPrice] = useState('')

    const activateFilter = async () => {
        try {
            const resp = await postReq({ price })

            // тут значения будут повторяться, нужно очистить массив от одинаковых эл-ов
            const respProducts = await getItems(resp.result)

            const UpdRespProducts = respProducts.result
            console.log(UpdRespProducts)

            const uniqProd = []
            const uniqProducts = UpdRespProducts.filter((el) => {
                if (!uniqProd.includes(el.product)) {
                    uniqProd.push(el.product)
                    return true
                }
                return false
            })
            console.log(uniqProducts)

            const filterBrand = UpdRespProducts.filter((el) => {
                if (!uniqProd.includes(el.brand)) {
                    uniqProd.push(el.brand)
                    return true
                }
                return false
            })
            console.log(filterBrand)

            dispatch(productsUpdate(uniqProducts))
        } catch (error) {
            console.log(error.message)
        }
    }

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            activateFilter()
        }
    }

    return (
        <S.Sort>
            <S.TitleH3>Сортировать по цене:</S.TitleH3>
            <S.ButtonContainer>
                <S.PriceInput
                    type="input"
                    placeholder="Введите цену"
                    onKeyDown={(e) => checkEnter(e)}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {/* <S.ButtonFilter>Сортировать</S.ButtonFilter> */}
            </S.ButtonContainer>
        </S.Sort>
    )
}
