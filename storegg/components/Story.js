import React from 'react'

const Story = () => {
  return (
    <section className='grid gap-10 sm:grid-cols-2 items-center mt-12'>
      <img className='hidden sm:block' src='assets/story-cover.png'/>
      <div>
        <h2>
          Win the battle.<br/>
          Be the Champion.
        </h2>

        <p className='text-slate-700 my-12'>Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati</p>

        <a className='btn btn-gray'>Read Story</a>
      </div>
    </section>
  )
}

export default Story