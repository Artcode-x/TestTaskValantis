import React, {
    useEffect,
    //  useState
} from 'react'
// import { useDispatch } from 'react-redux'
import {} from // request,
// postReq,
// getItems,
'../../Api/Api'
// import MD5test from '../../hooks/hooks'
import Pagination from '../../Pagination/Pagination'
import * as S from './Main.styled'
// import { productsUpdate } from '../../store/reducers/reducers'
import Filter from '../../Filter/Filter'
import ProductList from '../../ProductList/ProductList'

function Main() {
    //  const dispatch = useDispatch()
    // const [loading, setLoading] = useState(false)
    // const [data, setData] = useState()
    //  const [products, setProducts] = useState([])

    const testApi = async () => {
        try {
            // MD5test()
            // // const response = await request()
            // // console.log(response)
            // const resp2 = await postReq()
            // // массив с товарами
            // console.log(resp2.result)
            // // тут значения будут повторяться, нужно очистить массив от одинаковых эл-ов
            // const respProducts = await getItems(resp2.result)
            // dispatch(productsUpdate(respProducts.result))
        } catch (error) {
            console.log(error.message)
        } finally {
            // console.log(data)
            // const uniqProducts = [...new Set(products.sort())]
            // console.log(uniqProducts)
        }
    }

    useEffect(() => {
        testApi()
    }, [])

    return (
        <S.GeneralBlock>
            <ProductList />
            <Filter />
            <Pagination />
        </S.GeneralBlock>
    )
}

export default Main
