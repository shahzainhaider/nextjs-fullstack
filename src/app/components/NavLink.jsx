import React from 'react'
import Link from 'next/link'

const NavLink = ({link,Name}) => {
  return (
    <Link className='hover:text-red-700 text-xl font-semibold duration-300 hover:underline decoration-red-600 decoration-2 hover:underline-offset-4' href={link}>{Name}</Link>
  )
}

export default NavLink