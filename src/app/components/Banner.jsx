import React from 'react'
import '../Styling/MainBanner.css'
import Heading from './Heading'
import Paragraph from './Paragraph'

const Banner = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-cover bg-center h-[80vh] MainBanner ">
        <Heading headingName={`Unlimited movies, TV shows, and more`} />
        <Paragraph paragraphName={`Watch anywhere. Cancel anytime.`} />
    </div>
  )
}

export default Banner