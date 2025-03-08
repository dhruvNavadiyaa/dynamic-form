import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            <div className='h-14 flex justify-end items-center text-xl shadow-xl'>
                <span className='ms-5 text-md'>
                    <Link to='/Home'>Home</Link>
                </span>
                <span className='ms-5 text-md'>
                    <Link to='/SignUp'>Sign Up</Link>
                </span>
                <span className='ms-5 me-14 text-md'>
                    <Link to='/SignIn'>Sign In</Link>
                </span>
            </div>
            <Outlet />
        </>
    )
}
