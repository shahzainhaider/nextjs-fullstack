"use client"

import React, { useState } from 'react'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  const [user,setUser] = useState({username:'',email:'',phone:'',message:''});
  const [loader , setLoader] = useState(false)
  const [status,setStatus] = useState(null);

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})

    
  }
  const handleSubmit =async (e)=>{
    e.preventDefault()
    try {
      setLoader(true)
      const response = await fetch('/api/contact',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username:user.username,
          email:user.email,
          phone:user.phone,
          message:user.message
        })
      });

      if(response.status ===200){
        setUser({
          username:'',
          email:'',
          phone:'',
          message:''
        })
        setLoader(false)
        setStatus('Success')
        setTimeout(() => {
          setStatus(false)
          
        }, 1000);
      }
      else{
        setUser({
          username:'',
          email:'',
          phone:'',
          message:''
        })
        setLoader(false)
        setStatus('Error')
      }
    } catch (error) {
      setLoader(false)
      console.log(error)
    }

  }
  return (
    <>
    <h1 className='text-4xl text-center font-bold mt-4'>Contact Us</h1>
   <div className="max-w-7xl grid grid-cols-3 mx-auto gap-4 mt-10 ">
    <div className=" shadow-lg p-4">
      <MdEmail className='text-red-600 mx-auto text-5xl'/>
      <p className='text-lg font-semibold text-center'>Email</p>
      <p className='text-center max-w-xs mx-auto text-black/60'>Lorem ipsum dolor sit amet concing elit. Offici veritatis quia voluparum.</p>
      <p className='text-center mt-2'>Send Email -&gt;</p>

    </div>
    <div className=" shadow-lg p-4">
      <MdEmail className='text-red-600 mx-auto text-5xl'/>
      <p className='text-lg font-semibold text-center'>Email</p>
      <p className='text-center max-w-xs mx-auto text-black/60'>Lorem ipsum dolor sit amet concing elit. Offici veritatis quia voluparum.</p>
      <p className='text-center mt-2'>Send Email -&gt;</p>

    </div>
    <div className=" shadow-lg p-4">
      <MdEmail className='text-red-600 mx-auto text-5xl'/>
      <p className='text-lg font-semibold text-center'>Email</p>
      <p className='text-center max-w-xs mx-auto text-black/60'>Lorem ipsum dolor sit amet concing elit. Offici veritatis quia voluparum.</p>
      <p className='text-center mt-2'>Send Email -&gt;</p>

    </div>
   </div>
   <h2 className='text-2xl text-center font-bold mt-6'>We'd Love To Hear<span className='text-red-600'> From You</span></h2>
   <div className="main mt-4">
    <div className="w-96 mx-auto shadow-lg p-4 my-4">
      <form onSubmit={handleSubmit}>
      <div className=" flex mb-3 flex-col">
        <label htmlFor="username">Enter your name</label>
        <input onChange={handleChange} value={user.username} id='username' name='username' required type="text" className='w-full bg-gray-100/50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-100 focus:border-red-600 outline-none text-gray-700 py-1 px-3 duration-200'/>
      </div>
      <div className=" flex mb-3 flex-col">
        <label htmlFor="email">Email</label>
        <input onChange={handleChange} value={user.email} id='email' name='email' type="text" required className='w-full bg-gray-100/50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-100 focus:border-red-600 outline-none text-gray-700 py-1 px-3 duration-200'  />
      </div>
      <div className=" flex mb-3 flex-col">
        <label htmlFor="phone">Phone Number</label>
        <input onChange={handleChange} value={user.phone} id='phone' name='phone' type="number" required className='w-full bg-gray-100/50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-100 focus:border-red-600 outline-none text-gray-700 py-1 px-3 duration-200'  />
      </div>
      <div className=" flex flex-col">
        <label htmlFor="message">Message</label>
        <textarea onChange={handleChange} value={user.message} id='message' name='message' required rows={5} className='w-full bg-gray-100/50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-red-100 focus:border-red-600 outline-none text-gray-700 py-1 px-3 duration-200' />
      </div>
      {status === 'Success' && <p className='text-green-600 text-center'>Thank you for your message!</p>}
                {status === 'Error' && <p className='text-red-600 text-center'>There was an error submitting your message. Please try again.</p>}
      <button type='submit' className='mt-4 border border-gray-300 active:bg-slate-300 text-center py-3 px-2 rounded-xl bg-red-600 text-white hover:bg-transparent hover:text-black focus:ring-2 focus:ring-red-200 focus:border-red-600'>{loader?'Loading...':'send message'}</button>
      </form>
    </div>
   </div>
    </>
  )
}

export default Contact