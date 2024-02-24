import React from 'react'
import MenuItems from './MenuItems'
import {AiFillHome, AiFillPhone, AiFillProject, AiFillRedEnvelope} from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className="flex gap-4">
           <MenuItems title="home" address="/" Icon={AiFillHome}/>
           <MenuItems title="about" address="/about" Icon={AiFillProject}/>
           <MenuItems title="contact" address="/contact" Icon={AiFillPhone}/>
        </div>
        <div className='flex items-center gap-4'>
            <DarkModeSwitch />
        </div>
        <Link href={'/'} className="flex gap-1 items-center">
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg max'>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
    </div>
  )
}
