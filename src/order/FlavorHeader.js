import React from 'react'
import logo from '../images/logo/playful-cookiesh-light.svg'
function FlavorHeader() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">

        <div className='flex-1 self-stretch flex justify-center items-center bg-primary-500'>
            <h1 className="text-primary-50 text-5xl text-center font-black uppercase">Milk Choco</h1>
        </div>
        <div className='flex-1 self-stretch flex justify-center items-center bg-primary-50'>
        <h1 className="text-primary-500 text-5xl text-center font-black uppercase">White Choco</h1>
        </div>

        <div className='w-60 h-60 absolute flex justify-center items-center rounded-full animate-spin-slow' id="cookie">
            <img src={logo} alt="logo" className='w-40 h-40' loading='lazy'/>
        </div>
    </div>
  )
}

export default FlavorHeader