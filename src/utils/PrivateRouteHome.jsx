import { Outlet } from 'react-router-dom'


const PrivateRouteHome = () => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]

    return (
        token? <Outlet /> : window.location.href = '/login'
    )
}

export default PrivateRouteHome