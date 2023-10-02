import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <header className='h-[12vh] flex items-center sticky top-0 bg-white z-40 justify-center shadow-2xl'>
        <nav>
            <ul className='flex w-80 sm:w-96 bg-slate-200 p-2 rounded-full mx-auto justify-between shadow-inner shadow-inherit drop-shadow-md'>
                <Link className='hover:text-red-700 text-xl font-semibold duration-300 hover:underline decoration-red-600 decoration-2 hover:underline-offset-4' href='/'>Home</Link>
                <Link className='hover:text-red-700 text-xl font-semibold duration-300 hover:underline decoration-red-600 decoration-2 hover:underline-offset-4' href='/about'>About</Link>
                <Link className='hover:text-red-700 text-xl font-semibold duration-300 hover:underline decoration-red-600 decoration-2 hover:underline-offset-4' href='/contact'>Contact</Link>
                <Link className='hover:text-red-700 text-xl font-semibold duration-300 hover:underline decoration-red-600 decoration-2 hover:underline-offset-4' href='/movie'>Movies</Link>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
