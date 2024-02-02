import Image from 'next/image';
import React from 'react'

const page =async ({params}) => {
    const id = params.id

    const url = `https://netflix54.p.rapidapi.com/title/details/?lang=en&ids=${id}`;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '0e9d470240msh5cee039316858bcp1147abjsn4907f2d82760',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
    const response = await fetch(url, options);
    const result = await response.json();
    const data = result[0].details;
    const {title,backgroundImage,type,synopsis} = data
    title


  return (
    <>
    <div className="max-w-6xl py-8 mx-auto">
        <h1 className='text-2xl font-semibold pb-5 '>Netflix \ <span className='text-red-600 text-2xl font-semibold'>{type.charAt(0).toUpperCase()+ type.slice(1)}</span></h1>
        <Image src={backgroundImage.url} width={450} height={300} />
        <h2 className='text-3xl md:text-4xl font-bold my-4'>{title}</h2>
        <p>{synopsis}</p>
    </div>
        
      
    </>
  )
}

export default page
