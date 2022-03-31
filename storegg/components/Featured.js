import React from 'react'
import Card from './Card'

const Featured = ({gameData}) => {
    
    return (
        <section className='my-5'>
            <h2>
                Our Featured Games This Year
            </h2>

            <div className='no-scrollbar flex mt-7 mb-16 w-full gap-4 overflow-x-scroll p-5'>
                {gameData.map((data,i)=>(
                    <Card key={i} data={data}/>
                ))}
            </div>

            <div className='grid gap-5 auto-cols-auto justify-center items-center md:grid-cols-4'>
                <div className='text-center'>
                    <h2>290K+</h2>
                    <p className='text-slate-700 font-medium mt-4'>Players Top Up this month</p>
                </div>
                <div className='text-center'>
                    <h2>12.500</h2>
                    <p className='text-slate-700 font-medium mt-4'>Games Available</p>
                </div>
                <div className='text-center'>
                    <h2>99.9%</h2>
                    <p className='text-slate-700 font-medium mt-4'>Happy Players</p>
                </div>
                <div className='text-center'>
                    <h2>4.7</h2>
                    <p className='text-slate-700 font-medium mt-4'>Rating Worldwide</p>
                </div>
            </div>
        </section>
    )
}

export default Featured