import React, { 
   // useState
 } from 'react'
import * as S from './Pagination.styled'

export default function Pagination() {
    // const [disabled, setDisabled] = useState(false)
    // const [showError, setShowError] = useState()

    // const requestToApi = async () => {
    //     try {
    //         setDisabled(true)
    //     } catch (error) {
    //         console.log(error.message)
    //         setShowError(error.response.status)
    //     } finally {
    //         setDisabled(false)
    //     }
    // }

    const prev = () => {}
    const next = () => {}
    return (
        <>
            <S.PagesContainer>
                <S.BtnPrev
                    //  disabled={disabled}
                    type="button"
                    onClick={prev}
                >
                    Назад
                </S.BtnPrev>

                <S.CurrentNumberPageDiv>
                    1{/* {currentPage} */}
                </S.CurrentNumberPageDiv>
                <S.BtnNext
                    // disabled={disabled}
                    type="button"
                    onClick={next}
                >
                    Вперед
                </S.BtnNext>
            </S.PagesContainer>
            {/* {showError && <S.ForErrors>{showError}</S.ForErrors>} */}
        </>
    )
}
