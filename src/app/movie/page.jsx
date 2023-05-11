import React from 'react'
import Moviecard from '../components/Moviecard';

const Movie =async () => {
  // await new Promise(resolve => setTimeout(resolve,500));

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=100&limit_suggestions=20&lang=en';
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
    const main_data = result.titles;


  return (
    <>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold py-6'>SERIES & MOVIES</h1>
      <div className="flex flex-wrap justify-center max-w-7xl gap-9 mx-auto">
        {
        main_data.map((e)=>{
          return <Moviecard key={e.id} {...e} />
        })
      }
        </div>
      
      
      
    </>
  )
}

export default Movie
