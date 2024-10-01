"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { Inter, Lobster } from '@next/font/google'
import facebook from '@/assets/facebookIcon.jpg'
import twitter from '@/assets/twitter.jpg'
import instagram from '@/assets/instagram.jpg'


const lobster = Lobster({ subsets: ['latin'], weight:'400' });
const links = [
    {href:'/HomePage' , label:"Home"},
    {href:'/About' , label:"About us"},
    {href:'/Contact' , label:"Contact"},
    {href:'/RecipePage' , label:"Recipes"},
    {href:'/BlogPage' , label:"Blog"},
]

const Navbar = () => {
    const[openTab, setOpenTab] = useState(false)
    
  return (
    <nav className='flex justify-between items-center px-2 sm:px-10 py-3'>
        <Link href={'/HomePage'} className={`${lobster.className} font-bold text-[24px]`}>Foodieland<span className='text-red-800'>.</span></Link>
        <div className='flex font-medium gap-x-5'>
            {links.map((link)=> {
                return (
                    <div key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </div>
                )
            })}
        </div>
        <div className='flex items-center gap-x-3'>
            <Image className='w-[8px]' src={facebook} alt="facebook" />
            <Image className='w-[16px]' src={twitter} alt="twitter" />
            <Image className='w-[16px]' src={instagram} alt="instagram"/>
        </div>
    </nav>
  )
}

export default Navbar