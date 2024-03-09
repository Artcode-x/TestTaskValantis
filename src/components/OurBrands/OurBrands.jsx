import * as S from "./OurBrands.styled"
import { useSelector } from "react-redux"
import { brandSelector } from "../store/selectors/selectors"

function OurBrands() {
  const brand = useSelector(brandSelector)

  return (
    <>
      {brand ? (
        <S.UserListBlock>
          {brand.map((el, index) => (
            <S.UserInfo key={index}>
              <S.TextBold>{el}</S.TextBold>
            </S.UserInfo>
          ))}
        </S.UserListBlock>
      ) : null}
    </>
  )
}
export default OurBrands
