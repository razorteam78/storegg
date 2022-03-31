import React from 'react'

import Image from 'next/image'
import Input from '../components/Input'

const signup = () => {
  return (
    <div className='flex items-center w-screen h-screen justify-center'>
      <div className=' space-y-3'>
        <div className='w-12 h-12 relative'>
          <Image layout='fill' objectFit='cover'src={'/assets/logo.png'}/>
        </div>

        <h2>Sign Up</h2>
        <p className='text-lg tracking-wide text-indigo-800'>Daftar dan bergabung dengan kami</p>
        <div className='space-y-3 py-4'>
          <Input label={"Full Name"} placeholder={"Full Name"} type="text"/>
          <Input label={"Email Addres"} placeholder={"Email Address"} type="text"/>
          <Input label={"Password"} placeholder={"Password"} type={"password"}/>  
        </div>

        <a className='btn color-block'>Continue</a>
        <a className='btn color-outline'>Continue</a>
      </div>
    </div>
  )
}

export default signup