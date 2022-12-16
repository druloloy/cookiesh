import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import { FacebookProvider, Page } from 'react-facebook';
const productNames = ['Dual Cookiesh', 'Octo Cookiesh', 'Cookiesh Puno', 'Cookiesh Grande'];

function Products() {

  return (
    <div id="order" className='w-full h-auto mt-8 flex flex-col justify-center items-center gap-4 overflow-x-hidden'>
        <div>
            <h1 className='text-4xl font-bold text-primary-500 lowercase text-center'>Our lovely products</h1>
            <p className='text-primary-500 text-center lowercase'>Our tasty and sweet cookiesh is available in various forms.</p>
        </div>
        {/* image carousel */}
        <div className='flex flex-col justify-center items-center p-4'>
            <Carousel 
                className='w-full md:w-4/12'
                autoPlay={true}
                interval={3000}
                infiniteLoop={true} 
                centerMode={false} 
                emulateTouch={true}
                dynamicHeight={true}>
                {
                    productNames.map((name, index) => {
                        return (
                            <div className='w-full' key={index}>
                                <img className='w-full' src={require(`../images/products/${name}.png`)} alt={name} />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>

        <div className='w-full h-auto bg-primary-500 p-4 flex flex-col justify-evenly items-center md:flex-row md:p-8'>
            <div className='w-full p-8 flex flex-col justify-center items-start text-primary-50 md:w-1/3'>
                <h2 className='text-2xl font-bold lowercase mb-2 md:mb-4'>Cookiefy your cravings!</h2>
                <p>We offer delicious, sweet cookies at affordable prices. You can find us on Facebook and place your orders there. We look forward to serving you!</p>
            </div>  
            <FacebookProvider lazy='true' appId='813517426416324'>
                <Page href="https://www.facebook.com/100086300445796" tabs="timeline" />
            </FacebookProvider>
        </div>
    </div>
  )
}

export default Products