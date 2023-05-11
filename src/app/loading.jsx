import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
         <Image src={'/12.gif'} width={100} height={100} alt='hello' />
      </div>
    </>
  )
}

export default Loading
