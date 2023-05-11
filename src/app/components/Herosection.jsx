import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Herosection = ({title,imgUrl,width}) => {
    return (
        <>
            <section className="text-gray-600 body-font my-10">
                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                        <Link href='/movie'><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Explore movies</button></Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded mx-auto " alt="hero" src={imgUrl} width={width} height={590} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Herosection
