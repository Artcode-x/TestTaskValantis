import axios from 'axios'
import MD5test from '../hooks/hooks'

const way = 'https://api.valantis.store:41000'

export async function getAllItems() {
    const authorizationToken = MD5test()
    const response = await axios(`${way}`, {
        method: 'GET',
        data: {
            action: 'get_ids',
            params: { offset: 10, limit: 3 },
        },
        headers: {
            'X-auth': authorizationToken,
        },
    })
    return response.data
}

export async function filterPrice({ price }) {
    const fromFilterInput = Number(price)
    console.log(fromFilterInput)
    const authorizationToken = MD5test()
    const response = await axios(`${way}`, {
        method: 'POST',
        data: {
            action: 'filter',
            params: { price: fromFilterInput },
        },
        headers: {
            'X-auth': authorizationToken,
        },
    })
    return response.data
}

export async function getItems(data) {
    const authorizationToken = MD5test()
    const response = await axios(`${way}`, {
        method: 'POST',
        data: {
            action: 'get_items',
            params: { ids: data },
        },
        headers: {
            'X-auth': authorizationToken,
        },
    })
    return response.data
}

export async function filterBrand(brand) {
    const brandFromInput = brand
    const authorizationToken = MD5test()
    const response = await axios(`${way}`, {
        method: 'POST',
        data: {
            action: 'filter',
            params: { brand: brandFromInput },
        },
        headers: {
            'X-auth': authorizationToken,
        },
    })
    return response.data
}

export async function filterProduct(product) {
    const prodFromInput = product
    const authorizationToken = MD5test()
    const response = await axios(`${way}`, {
        method: 'POST',
        data: {
            action: 'filter',
            params: { product: prodFromInput },
        },
        headers: {
            'X-auth': authorizationToken,
        },
    })
    return response.data
}
