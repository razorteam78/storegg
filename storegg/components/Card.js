import React from 'react'

const Card = ({data}) => {
    return (
        <div className='card group'>
            <img className='group-hover:scale-110 w-[500px] h-[300px] transition-all duration-200' src={data.thumbnail}/>

            <div className='card-overlay'>
                <div className='z-10 h-full flex justify-center items-center flex-col'>
                    <img className='hidden group-hover:block transition-all ease-in-out duration-75 h-8' src='assets/ic_play.png'/>
                    <p className='group-hover:mt-4 -mt-3'>{data.title}</p>
                    <p className='absolute bottom-2 left-4 font-thin text-sm'>Mobile</p>
                </div>
            </div>
        </div>
    )
}

export default Card