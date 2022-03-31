import React from 'react'

import { BiMenu } from 'react-icons/bi'

import { menus } from '../data/data'
import { useState } from 'react';

const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <div className='grid grid-cols-3 md:flex justify-between fixed z-20 top-0 left-0 right-0 bg-white md:h-20 py-4 px-10 items-center shadow-md'>
            <img src='assets/logo.png' className='bg-cover w-12 h-12'/>
            <h3 className='m-auto md:hidden italic font-bold text-2xl'>Store<span className='text-indigo-900'>GG</span></h3>

            <div className='relative hidden'>

                <BiMenu onClick={toggleMenu} className='md:hidden h-12 w-12 ml-auto'/>

                <div className={`${isMenuOpen?"scale-100":"scale-0"} origin-top absolute bg-white shadow-md top-20 md:hidden transition-all ease-in-out duration-150`}>
                    <ul>
                        {menus.map(menu => (
                            <li key={menu} className='block p-3 mx-6 text-slate-300 hover:text-black text-lg'><a className={menu=="Home"?'active':''} href="/">{menu}</a></li>
                        ))}
                    </ul>
                </div>

            </div>
            <div className='hidden md:flex items-center'>
                <ul>
                    {menus.map(menu => (
                        <li key={menu} className='inline-block mx-6 text-slate-300 hover:text-black text-lg'><a className={menu=="Home"?'active':''} href="/">{menu}</a></li>
                    ))}
                </ul>

            <a className='btn btn-gray flex h-10 items-center'>Sign In</a>
            </div>
        </div>
    )
}

export default Navbar