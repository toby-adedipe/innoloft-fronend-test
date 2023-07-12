import React, { ComponentProps } from 'react';
import logo from '../../logo.svg'

interface Props extends ComponentProps<"div"> {
  logo?: string,
  mainColor?: string,
}

export default function Header({ logo, mainColor }: Props) {
  return (
    <div  style={{
      backgroundColor: mainColor
    }} className='w-full flex items-center px-5 h-12'>
      <img src={logo} className="App-logo h-8" alt="logo" />
      <input className='hidden h-8 mx-12 sm:block w-1/2 px-3 py-2 text-gray-800 bg-white rounded' type='text' placeholder='Enter interests, keyword, company name, etc.' />
    </div>
  )
}
