import React from 'react'
import Logo from '../images/logo/playful-cookiesh-light.svg'
import {AiFillFacebook, AiOutlineMail, AiFillPhone} from 'react-icons/ai'
function Footer() {
  return (
    <div className='w-full h-screen flex flex-col justify-start items-center mt-32 bg-primary-500 p-8 gap-8 md:h-1/2 md:flex-row md:justify-center'>
        {/* logo and short desc */}
        <div className="flex flex-col justify-center items-center">
            <img loading='lazy' src={Logo} alt="logo" className='w-36'/>
            <p className='text-xl text-primary-50'>
                sweet. delish. cheap.
            </p>
            <details className='text-primary-50'>
                <summary className='underline'>contact us</summary>
                <div className="flex flex-row gap-2 items-center justify-start px-4"><AiOutlineMail /> <a href='mailto:project.cookiesh@gmail.com'>Cookiesh</a></div>
                <div className="flex flex-row gap-2 items-center justify-start px-4"><AiFillFacebook /> <a href='https://m.me/100086300445796' rel='noreferrer' target='_blank'>Cookiesh</a></div>
                <div className="flex flex-row gap-2 items-center justify-start px-4"><AiFillPhone /> <a href='tel:+639989016667'>+639989016667</a></div>
            </details>
        </div>
        {/* page quick links */}
        <div className="flex flex-col justify-center items-start">
            <h3 className='text-2xl text-primary-50'>Quick Links</h3>
            <div className="flex flex-col items-start justify-center md:flex-row md:gap-4">
                <a href="#home" className='text-primary-50 underline'>Home</a>
                <a href="#about" className='text-primary-50 underline'>About</a>
                <a href="#menu" className='text-primary-50 underline'>Menu</a>
                <a href="#featured" className='text-primary-50 underline'>Featured</a>
                <a href="#contact" className='text-primary-50 underline'>Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Footer