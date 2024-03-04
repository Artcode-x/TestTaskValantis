import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './ProductList.styled'

function ProductList() {
    const prod = useSelector((store) => store.store.currentPageData)

    return (
        <S.Parent>
            {prod.length > 0 ? (
                <S.UserListBlock>
                    {prod.map((el) => (
                        <S.UserInfo key={el.id}>
                            <S.TextBold>{el.brand}</S.TextBold>
                            <S.UserLogin>{el.product}</S.UserLogin>
                            <S.TextUrl>{el.id}</S.TextUrl>
                            <S.TextUrl>{el.price}</S.TextUrl>
                        </S.UserInfo>
                    ))}
                </S.UserListBlock>
            ) : (
                <S.UserText>
                    Для отображения списка товаров, реализуйте сортировку по
                    любому из фильтров
                </S.UserText>
            )}
        </S.Parent>
    )
}
export default ProductList
