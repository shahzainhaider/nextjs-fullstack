import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Image from 'next/image'

const HomeSection = ({flexRow , imageUrl , headingName , paragraphName}) => {
  return (
    <div className={`flex ${flexRow}   justify-between items-center bg-black container py-6 px-20 border-y-4 border-[#333]`}>
        <Image
        src={imageUrl}
        width={600}
        />
        <div className='w-[50%] gap-3 flex flex-col'>
            <Heading headingName={headingName} />
            <Paragraph paragraphName={paragraphName} />
        </div>
    </div>
  )
}

export default HomeSection