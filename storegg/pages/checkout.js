import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import Image from 'next/image'
import Input from '../components/Input'

import { purchaseDetail } from '../data/data'
import { paymentInformation } from '../data/data'

const purchaseDetailLabels = ["Game ID","Order ID","Item","Type","Price","Tax (10%)","Total"]
const paymentInformationLabels = ["Account Name","Type","Bank Name","Bank Account Name","Bank Number"]


const checkout = () => {
  return (
    <div>

    <Navbar/>
      <main>
        <h1>Checkout</h1>
        <p className='text-lg tracking-wide text-indigo-800 mt-4'>Cek kembali data pembelian yang sudah dilakukan</p>

        <div className='grid grid-cols-2 md:grid-cols-5 mt-10 max-w-5xl'>
          
          <div className='h-64 relative overflow-hidden w-48 md:col-span-2 mx-auto bg-cover rounded-3xl'>
            <Image layout='fill' src={"/assets/sven.png"}/>
          </div>

          <div className='ml-2 md:-ml-4'>
            <h2 className='text-2xl'>Dota 2</h2>
            <br/>
            <div className='text-slate-600'>
              <p>Category:</p>
              <ul className='flex'>
                <li className='badge'><label>Moba</label></li>
                <li className='badge'><label>Real Time Strategy</label></li>
              </ul>
            </div>
          </div>

          <div className='divider md:hidden my-10 col-span-2 '></div>

          <div className='flex-col col-span-2'>

            <h3>Purchase Detail</h3>

            {purchaseDetail.map((item,i)=>(
              <div key={i} className='flex justify-between items-center my-4'>
                <label>{purchaseDetailLabels[i]}</label>
                <label>{item}</label>
              </div>
            ))}

            <h3 className='mt-8'>Payment Information</h3>

            {paymentInformation.map((item,i)=>(
              <div key={i} className='flex justify-between items-center my-4'>
                <label>{paymentInformationLabels[i]}</label>
                <label>{item}</label>
              </div>
            ))}
            
          </div>
          
          <div className='col-span-2 mt-6 flex items-center'>
            <input type={'checkbox'} className="mr-2 w-4 h-4"/> <label>I have transfered my money </label>
          </div>

          <a className='btn color-block block mt-8 col-span-2'>Continue</a>
          
        </div>

      </main>

      <Footer/>
    </div>

  )
}

export default checkout