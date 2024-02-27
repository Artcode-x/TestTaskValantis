import axios from 'axios'
import MD5test from '../hooks/hooks'

const way = 'https://api.valantis.store:41000'

// export async function request() {
//     const authorizationToken = MD5test()
//     const response = await axios(`${way}`, {
//         method: 'GET',
//         data: JSON.stringify({
//             action: 'get_ids',
//             params: { offset: 10, limit: 3 },
//         }),
//         headers: {
//             'X-auth': authorizationToken,
//         },
//     })
//     return response.data
// }

export async function postReq({ price }) {
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
