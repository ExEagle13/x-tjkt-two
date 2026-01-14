import React from 'react'
import { Outlet, useLocation, useMatch } from 'react-router-dom'
import { Navbar, Footer } from '../components/layout/index.js'

const mainLayout = () => {
    const { pathname } = useLocation();
    const hideLayout = pathname === '/404';

    return (
    <>
        <nav>{!hideLayout && <Navbar/>}</nav>

        <main className='p-6'>
            <Outlet/>
        </main>

        {!hideLayout && <Footer/>}
    </>
  )
}

export default mainLayout