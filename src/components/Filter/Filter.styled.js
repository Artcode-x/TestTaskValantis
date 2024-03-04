import styled from 'styled-components'

export const Sort = styled.div`
    flex-direction: column;
    align-items: center;
`

export const TitleH3 = styled.h3`
    margin-bottom: 7px;
    text-align: center;
    margin-top: 15px;
`

export const ButtonContainer = styled.div`
    display: grid;
    //  grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
`

export const ButtonFilter = styled.button`
    min-width: fit-content;
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
    background-color: black;
    color: #fff;
    outline: none;
    transition: background-color 0.4s ease;
    cursor: pointer;
    &:hover {
        background-color: burlywood;
    }
`
export const PriceInput = styled.input`
    //  margin-right: 15px;
    padding: 8px;
    flex: 1;
    border: none;
    border-radius: 5px;
    outline: none;
    display: flex;
`

export const SearchButton = styled.button`
    min-width: fit-content;
    padding: 8px 16px;
    border: none;
    border-radius: 10px;
    background-color: black;
    color: #fff;
    outline: none;
    transition: background-color 0.4s ease;
    cursor: pointer;

    &:hover {
        background-color: burlywood;
    }
`
export const Parent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
`
