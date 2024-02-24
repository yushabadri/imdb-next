import React from 'react'
import MenuItems from './MenuItems'
import {AiFillHome} from 'react-icons/ai'

export default function Header() {
  return (
    <div>
        <div className="">
           <MenuItems title="home" address="/" Icon={AiFillHome}/>
           <MenuItems title="about" address="/about" Icon={AiFillHome}/>
        </div>
        <div className=""></div>
    </div>
  )
}
