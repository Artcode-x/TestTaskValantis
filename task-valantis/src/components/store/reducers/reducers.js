/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {},
    products: [],
    price: null,
}

const reducers = createSlice({
    name: 'reducers',
    initialState,
    reducers: {
        userUpdate: (state, actions) => {
            state.user = actions.payload
            // данные которые будут отпр-ны в sessionStorage - будут хранится только в течении сессии, как только вкладка будет закрыта или браузер - все данные стираются.

            // если исп-ть localStorage - при закрытии браузера, данные останутся там, не сотрутся. Удалить можно вручную в браузере либо с пом-ю js

            // реализация чтобы при обновлении стр-цы не ломалась картинка / не терялись данные о юзере в данном случае
            sessionStorage.setItem('user', JSON.stringify(actions.payload))
        },
        // предполагается этот хук запускать всегда при запуске
        // используем в главной компоненте App
        // хук достает user из sessionStorage и сразу записывает в стейт?
        sessionStorageUpdate: (state) => {
            const user = sessionStorage.getItem('user')
            if (user) state.user = JSON.parse(user)
        },
        productsUpdate: (state, actions) => {
            state.products = actions.payload
        },
        priceUpdate: (state, actions) => {
            state.price = actions.payload
        },
    },
})

export const { userUpdate, sessionStorageUpdate, productsUpdate, priceUpdate } =
    reducers.actions
export default reducers
