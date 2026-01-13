import React from 'react'
import { Outlet } from 'react-router-dom'

const mainLayout = () => {
  return (
    <>
        <nav className='p-4 bg-gray-600 text-white'></nav>

        <main className='p-6'>
            <Outlet/>
        </main>

        <footer className='p-4 bg-gray-200'>Footer</footer>
    </>
  )
}

export default mainLayout