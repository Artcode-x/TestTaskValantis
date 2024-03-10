import React from "react"
import * as S from "./ProductList.styled"
import CircleLoader from "../Loader/Loader"
import { useSelector } from "react-redux"
import { ShowOrHideSelector, flagSelector } from "../store/selectors/selectors"
import OurBrands from "../OurBrands/OurBrands"

function ProductList({ isLoading, allData }) {
  const DataFromFilters = useSelector((store) => store.store.currentPageData)
  const showArray = useSelector(ShowOrHideSelector)
  const test = useSelector(flagSelector)

  return (
    <S.Parent>
      {!test && <OurBrands />}
      {isLoading ? (
        <CircleLoader />
      ) : !showArray ? (
        <S.UserListBlock>
          {allData.map((el) => (
            <S.UserInfo key={el.id}>
              <S.TextBold>{el.brand}</S.TextBold>
              <S.Product>{el.product}</S.Product>
              <S.TextUrl>{el.id}</S.TextUrl>
              <S.TextUrl>{el.price}</S.TextUrl>
            </S.UserInfo>
          ))}
        </S.UserListBlock>
      ) : (
        <S.UserListBlock>
          {DataFromFilters.map((el) => (
            <S.UserInfo key={el.id}>
              <S.TextBold>{el.brand}</S.TextBold>
              <S.Product>{el.product}</S.Product>
              <S.TextUrl>{el.id}</S.TextUrl>
              <S.TextUrl>{el.price}</S.TextUrl>
            </S.UserInfo>
          ))}
        </S.UserListBlock>
      )}
    </S.Parent>
  )
}
export default ProductList
