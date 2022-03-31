import React from 'react'

import Image from 'next/image'
import Input from '../components/Input'

const signin = () => {
  return (
    <div className='grid items-center w-screen h-screen grid-cols-2'>

      <div className='space-y-3 w-96 m-auto mt-3 col-span-2 md:col-span-1'>
        <div className='w-12 h-12 relative'>
          <Image layout='fill' objectFit='cover'src={'/assets/logo.png'}/>
        </div>

        <h2>SignIn</h2>
        <p className='text-lg tracking-wide text-indigo-800'>Daftar dan bergabung dengan kami</p>
        <div className='space-y-3 py-4'>
          <Input label={"Full Name"} placeholder={"Full Name"} type="text"/>
          <Input label={"Email Addres"} placeholder={"Email Address"} type="text"/>
          <Input label={"Password"} placeholder={"Password"} type={"password"}/>  
        </div>

        <a className='btn color-block'>Continue</a>
        <a className='btn color-no-outline bg-slate-200'>Sign up</a>
      </div>

      <div className='bg-indigo-900 space-y-4 w-full px-32 h-full hidden md:flex flex-col items-center justify-center text-center'>
        <div className='w-full h-64 relative'>
          <Image src={"/assets/story-cover.png"} layout={'fill'} objectFit={'contain'} />
        </div>

        <h2 className='text-white'>Win the Battle <br/> Be the Champion.</h2>
        <p className='text-white font-light tracking-wide'>Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati</p>
      </div>
    </div>
  )
}

export default signin