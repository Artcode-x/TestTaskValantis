import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AppRoutes from '../AppRoutes/AppRoutes'
import { sessionStorageUpdate } from '../store/reducers/reducers'

function App() {
    const dispatch = useDispatch()

    // Цель: чтобы при обновлении страницы - этот useEffect сработал
    // action тут обновляет состояние(своеобразный хук), если что то есть в sessionStorage, оно перезапишет это в стейт
    useEffect(() => {
        dispatch(sessionStorageUpdate())
    }, [dispatch])

    return <AppRoutes />
}

export default App
