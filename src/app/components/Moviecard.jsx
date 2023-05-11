import Image from 'next/image';
import React from 'react'
import Link from 'next/link';

const Moviecard = (e) => {
    const {id,title,synopsis,type} = e.jawSummary;
  return (
    <>
        <div className="gap-8 h-fit pb-5 w-72 rounded-2xl shadow-xl hover:scale-105 duration-300 drop-shadow-xl overflow-hidden" key={id}>
          <Image src={e.jawSummary.backgroundImage.url} width={286.22} alt={title} height={150} />
          <h2 className='m-1 text-lg font-bold'>{title.substring(0,30)}</h2>
          <p className='my-2 mx-1' >{synopsis.substring(0,50)}...</p>
          <Link href={`/movie/${id}`} className="text-white font-medium rounded-xl text-sm px-5 py-2.5 m-1 text-center bg-black hover:text-black hover:bg-white hover:border-black border duration-300 ">Read More</Link>

        </div>

    </>
  )
}

export default Moviecard
