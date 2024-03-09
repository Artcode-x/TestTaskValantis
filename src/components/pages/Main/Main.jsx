import React, { useEffect, useState } from "react"
import Pagination from "../../Pagination/Pagination"
import * as S from "./Main.styled"
import Filter from "../../Filter/Filter"
import ProductList from "../../ProductList/ProductList"
import { getAllItemsConvert } from "../../Api/Api"
import { GetUniqItems } from "../../hooks/hooks"

function Main() {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [curPage, setCurPage] = useState(1)
  const [allData, setAllData] = useState([])

  const renderStart = (page) => {
    setError("")
    setIsLoading(true)
    getAllItemsConvert(page)
      .then((response) => {
        const resp = GetUniqItems(response, "id")
        setAllData(resp)
        setIsLoading(false)
      })
      .catch((error) => {
        setError("Сервер не смог обработать запрос, попробуйте позднее")
      })
  }

  useEffect(() => {
    renderStart(1)
  }, [])

  return (
    <S.GeneralBlock>
      <Filter />
      <Pagination
        setCurPage={setCurPage}
        curPage={curPage}
        setAllData={setAllData}
        setIsLoading={setIsLoading}
        renderStart={renderStart}
      />
      {error && <S.ForErrors>{error}</S.ForErrors>}
      <ProductList allData={allData} isLoading={isLoading} />
    </S.GeneralBlock>
  )
}

export default Main
