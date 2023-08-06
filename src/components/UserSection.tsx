import React from 'react'
import NavLink from './NavLink'

export default function UserSection() {
    return (
        <div className='flex justify-center items-center gap-2'>
            <NavLink text='Login' to='/login'></NavLink>
            <NavLink text='Register' to='/register'></NavLink>
        </div>
    )
}
