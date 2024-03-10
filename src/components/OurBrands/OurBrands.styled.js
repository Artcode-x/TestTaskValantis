import styled from "styled-components"

export const UserListBlock = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 20px;
  padding-bottom: 20px;

  :hover {
    transform: scale(1.2);
    transition: 1.2s;
  }
`
export const UserInfo = styled.div`
  border: 1px solid;
  background-color: seashell;
`

export const TextBold = styled.p`
  word-break: break-all;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: x-large;
  text-decoration: underline;
`
