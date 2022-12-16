import React, { useState } from 'react'
import {useSpring, useTrail, animated, config} from 'react-spring'
import {AiOutlineMenu} from 'react-icons/ai'


function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
        <div className='fixed top-4 right-4 z-50 text-4xl text-primary-300 md:hidden'>
            <AiOutlineMenu onClick={() => setOpen(!open)}/>
        </div>
        <ItemsContainerMobile open={open} setOpen={setOpen}/>
        <ItemsContainerDesktop />
    </>
  )
}

const items = [
    {id: 1, name: 'Home', link: '#home'},
    {id: 2, name: 'Order', link: '#order'},
    {id: 3, name: 'Featured', link: '#featured'},
    {id: 4, name: 'About', link: '#about'},
]

const ItemsContainerMobile = ({open, setOpen}) => {
    // useSpring along with the open state to animate the menu
    const openMenu = useSpring({
        from: {transform: 'translateY(-100%)'},
        to: {transform: open ? 'translateY(0%)' : 'translateY(-100%)'},
        config: config.wobbly,
    })
    return open ? (
        <div className='w-full h-screen bg-primary-700 fixed flex flex-col justify-center items-center z-10'>
            <animated.div style={openMenu} className='h-full flex flex-col justify-center items-start gap-5 bg-primary-700 lowercase'>
                {items.map(item => (
                    <a key={item.id} href={item.link} className='text-2xl font-bold text-primary-50' onClick={()=>setOpen(false)}><span className='text-primary-300'>{item.name.charAt(0)}</span>{item.name.substring(1)}</a>
                ))}
            </animated.div>
        </div>
    ) : null
}

const ItemsContainerDesktop = () => {
    // add animation to each item using useTrail

    const trail = useTrail(items.length, {
        from: {transform: 'translateY(-300%)'},
        to: {transform: 'translateY(0%)'},
        config: config.wobbly,
        delay: 3000,
    })

    const fadeIn = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: config.wobbly,
        delay: 2500,
    })

    return (
        <>  
            <animated.div style={fadeIn} className='w-auto fixed top-0 right-0 z-50 hidden md:block'>
                <div id="navbar" className='px-8 py-4 rounded-b-2xl bg-primary-500 bg-opacity-30 lowercase flex flex-row justify-end items-center gap-5'>
                    {trail.map((props, index) => (
                        <animated.div style={props} key={items[index].id}>
                            <a href={items[index].link} className='text-xl font-bold text-primary-50 transition-colors ease-in-out duration-300 hover:text-primary-800'>{items[index].name}</a>
                        </animated.div>
                    ))}
                </div>
            </animated.div>
        </>
    )
}

export default Navbar