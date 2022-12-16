import React from 'react'
import drip from '../images/misc/drip.svg'
import {useSpring, animated, config} from 'react-spring'
import {AiFillCaretDown} from 'react-icons/ai'
import Logo from '../images/logo/playful-cookiesh-light.svg'

function Header() {
    const dripping = useSpring({
        from: {transform: 'translateY(-100%)'},
        to: {transform: 'translateY(0%)'},
        config: config.molasses,
        delay: 500
    })
    const fallingTitle = useSpring({
        from: {transform: 'translateY(-200%)'},
        to: {transform: 'translateY(0%)'},
        config: config.gentle,
        delay: 2000
    })

    const fadeIn = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: config.molasses,
        delay: 2500
    })

    const fallingButton1 = useSpring({
        from: {opacity: 0,transform: 'translateY(-800%)'},
        to: {opacity: 1, transform: 'translateY(0%)'},
        config: config.wobbly,
        delay: 3000
    })

    const fallingButton2 = useSpring({
        from: {opacity: 0,transform: 'translateY(-800%)'},
        to: {opacity: 1, transform: 'translateY(0%)'},
        config: config.wobbly,
        delay: 3500
    })
  return (
    <animated.div style={dripping} className='w-full h-screen flex flex-col'>
        <div id="home" className='flex-1 flex flex-col justify-center items-start bg-primary-500 px-10 gap-10 lg:justify-end lg:px-36'>
            <animated.div style={fallingTitle} className='flex flex-col'>
                {/* <h1 className='text-6xl font-bold text-primary-50 tracking-tighter'>cookiesh</h1> */}
                <img loading='lazy' src={Logo} alt="logo" className='w-36'/>  
                <p className='text-xl text-primary-50'>
                    sweet. delish. cheap.
                </p>
            </animated.div>

            <div className='flex flex-col justify-start items-start gap-3'>
                <animated.p style={fadeIn} className='text-xl font-bold text-primary-50'>
                    we sell cookies.
                </animated.p>
                <div className='flex flex-row gap-2 flex-wrap'>
                    <animated.a style={fallingButton1} href='https://m.me/100086300445796' rel='noreferrer' target='_blank' className='text-2xl drop-shadow-md bg-primary-800 text-primary-50 font-bold px-5 py-2 rounded-lg lowercase ease-in-out transition-colors duration-500 hover:bg-primary-400'>
                        Order Now 🍪
                    </animated.a>
                    <animated.a style={fallingButton2} href="#featured" className='text-2xl drop-shadow-md bg-primary-800 text-primary-50 font-bold px-5 py-2 rounded-lg lowercase ease-in-out transition-colors duration-500 hover:bg-primary-400'>
                        Featured patrons ❤️
                    </animated.a>
                </div>
            </div>

            <animated.div style={fadeIn} className='flex flex-row rounded-lg text-primary-50 items-center justify-center gap-2 underline underline-offset-4 ease-in-out transition-colors duration-500 animate-bounce  hover:text-primary-200'>
                <a href='#order' className='text-xl'>
                    our lovely products         
                </a>
                <AiFillCaretDown className='text-xl '/>
            </animated.div>

        </div>
        <img src={drip} alt="drip" className="-mt-1 drop-shadow-lg" loading='lazy'/>
    </animated.div>
    
  )
}

export default Header