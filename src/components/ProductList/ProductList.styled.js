import { styled } from "styled-components"

export const Parent = styled.div`
  margin-top: 20px;
`

export const UserListBlock = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  :hover {
    transform: scale(1.2);
    transition: 1.2s;
  }
`
export const UserInfo = styled.div`
  border: 1px solid;
  background-color: seashell;
`

export const Product = styled.p`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: black;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`

export const UserText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 42px;
  color: black;
  margin-top: 30px;
  text-align: center;
`

export const TextUrl = styled.p`
  word-break: break-all;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`
export const Txt = styled.p`
  display: flex;
  justify-content: center;
`
export const TextBold = styled.p`
  word-break: break-all;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: x-large;
  text-decoration: underline;
`
