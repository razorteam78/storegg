import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <section id='hero-banner' className='flex items-center'>
            <div>
                <p className='text-slate-700 text-xl font-normal'>Halo Gamers,</p>
                <h1 className='text-indigo-900 my-5'>Topup & Get a New Experience in Gaming</h1>
                <p className='text-lg tracking-wide'>Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati</p>

                <div className='flex flex-col md:flex-row items-center w-full space-y-5 md:space-y-0 md:space-x-3 mt-6'>
                    <a className='btn color-block'>Get Started</a>
                    <a className='btn color-no-outline'>Learn More</a>
                </div>

            </div>

            <div className='relative sm:block w-full h-96 bg-cover drop-shadow-md m-auto'>
                <Image layout='fill' objectFit='contain' src={'/assets/banner_image.png'}/>
            </div>

        </section>
    )
}

export default Banner