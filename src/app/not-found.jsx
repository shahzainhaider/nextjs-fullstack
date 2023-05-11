import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <>
    <div className="flex flex-col h-[88vh] justify-center items-center">
        <h1>NOT FOUND</h1>
        <Link href={'/'} className='bg-red-600 text-white'>GO TO HOME PAGE</Link>
    </div>
      
    </>
  )
}

export default notFound
