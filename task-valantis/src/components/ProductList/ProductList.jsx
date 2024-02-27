import React from 'react'
import { useSelector } from 'react-redux'
import { productsSelector } from '../store/selectors/selectors'
import * as S from './ProductList.styled'

function ProductList() {
    const prod = useSelector(productsSelector)
    console.log(prod)
    return (
        <S.Parent>
            {prod.length > 0 ? (
                <S.UserListBlock>
                    {prod.map((el) => (
                        // <S.Table key={el.id}>
                        //     <S.TableRow>
                        //         <S.TableColumnHeading>
                        //             {el.brand}
                        //         </S.TableColumnHeading>
                        //         <S.TableColumnHeading>
                        //             {el.product}
                        //         </S.TableColumnHeading>
                        //         <S.TableColumnHeading>
                        //             {el.price}
                        //         </S.TableColumnHeading>
                        //     </S.TableRow>
                        // </S.Table>

                        <S.UserInfo key={el.id}>
                            {/* <S.UserDivForImg>
                                <S.UserAva />
                            </S.UserDivForImg> */}
                            <S.TextBold>{el.brand}</S.TextBold>
                            <S.UserLogin>{el.product}</S.UserLogin>
                            <S.TextUrl>{el.price}</S.TextUrl>
                        </S.UserInfo>
                    ))}
                </S.UserListBlock>
            ) : (
                <S.UserText>Введите цену для отображения списка!</S.UserText>
            )}
        </S.Parent>
    )
}
export default ProductList
