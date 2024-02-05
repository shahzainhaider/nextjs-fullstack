import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <>
      <header className='container mx-auto p-3 flex justify-between items-center sticky top-0 bg-white z-40 shadow-2xl'>
          <Link href='/'>
            <Image
              src={logo}
              width={150}
              alt="logo"
            />
          </Link>
        <nav>
          <ul className='flex w-80 sm:w-96 p-2 rounded-full mx-auto justify-between shadow-inner shadow-inherit drop-shadow-md'>
          <NavLink link={'/'} Name={'Home'} />
          <NavLink link={'/about'} Name={'About'} />
          <NavLink link={'/contact'} Name={'Contact'} />
          <NavLink link={'/movie'} Name={'Movies'} />
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
 