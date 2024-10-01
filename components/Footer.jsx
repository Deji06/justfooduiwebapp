import React from 'react'
import Image from 'next/image'
import { Inter, Lobster } from '@next/font/google'
import facebook from '@/assets/facebookIcon.jpg'
import twitter from '@/assets/twitter.jpg'
import instagram from '@/assets/instagram.jpg'
import Link  from 'next/link'

const lobster = Lobster({ subsets: ['latin'], weight:'400' });
const links = [
    {href:'/RecipePage' , label:"Recipes"},
    {href:'/BlogPage' , label:"Blog"},
    {href:'/Contact' , label:"Contact"},
    {href:'/HomePage' , label:"Home"},
    {href:'/About' , label:"About us."},
]

const Footer = () => {
  return (
    <div className="pb-10">
        <div className='flex justify-between  px-10 py-3'>
            <div className='flex flex-col gap-y-2'>
             <Link href={'/HomePage'} className={`${lobster.className} font-bold text-[24px]`}>Foodieland<span className='text-red-800'>.</span></Link>
             <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
            <div className='flex font-medium gap-x-5'>
                {links.map((link)=> {
                    return (
                        <div key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="border border-[#f3f3f3] mt-1 w-[1280px] ml-10"></div>
        <div className='flex justify-center items-center gap-x-32 mt-5'>
            <p className=''>© 2020 Flowbase. Powered by Webflow</p>
            <div className='flex items-center gap-x-4  '>
                <Image className='w-[8px]' src={facebook} alt="facebook" />
                <Image className='w-[16px]' src={twitter} alt="twitter" />
                <Image className='w-[16px]' src={instagram} alt="instagram"/>
            </div>
        </div>

    </div>
  )
}

export default Footer