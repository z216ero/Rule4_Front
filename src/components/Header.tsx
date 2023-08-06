import React from 'react'
import NavBar from './NavBar'
import UserSection from './UserSection'

export default function Header() {
    return (
        <div className='bg-violet-800 h-[70px] w-full flex justify-between px-3'>
            <NavBar />
            <UserSection />
        </div>
    )
}
