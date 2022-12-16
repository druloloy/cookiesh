import React, { useEffect, useState } from 'react'
import * as style from '@dicebear/pixel-art-neutral';
import { createAvatar } from '@dicebear/avatars';

const founders = [
    {
        id: 1,
        name: 'Andrew Loloy',
        sex: 'male'
    },
    {
        id: 2,
        name: 'Erika Navidad',
        sex: 'male'
    },
    {
        id: 3,
        name: 'Joanna Mae Pinto',
        sex: 'female'
    },
    {
        id: 4,
        name: 'Jomar Tuyor',
        sex: 'male'
    },
    {
        id: 5,
        name: 'Laila Golde',
        sex: 'female'
    },
    {
        id: 6,
        name: 'Ma. Ericka Dinglasa',
        sex: 'female',
    },
    {
        id: 7,
        name: 'Mark Bañaga',
        sex: 'male',
    },
    {
        id: 8,
        name: 'Sheila Mae Pagkalinawa',
        sex: 'female',
    }
];


function About() {
  return (
    <div id="about" className='w-full h-auto bg-primary-50' id='about'>
        <div className='w-full h-auto gap-8 flex flex-col justify-center items-center p-8 md:flex-row md:items-start'>
            <div className='w-full h-auto flex flex-col justify-center items-center gap-4 md:w-1/2'>
                <div className="w-full p-4 md:w-1/2 md:p-8">
                    <h1 className='text-4xl font-bold text-primary-500 text-center'>Our Founders</h1>
                    <p className='text-center text-primary-500'>The people who started it all.</p>
                </div>
                <div className='w-full h-auto flex flex-row flex-wrap justify-start items-start md:gap-2'>
                    {founders.map((content) => (
                        <CardView key={content.id} content={content} />
                    ))}
                </div>
            </div>
            <div className="w-full p-4 md:w-1/2 md:p-8">
                <h1 className='text-4xl font-bold text-primary-500 text-center'>About Us</h1>
                <p className='text-left text-primary-500 leading-relaxed mt-4'>Cookiesh is a company that was founded by 8 students in 2022. The company's niche is cookies, and it is known for its unique twist on the classic treat. The company's founders are dedicated to providing high-quality, delicious cookies to customers, and are always looking for new and creative ways to improve their product. Whether you're a cookie connoisseur or just looking for a sweet treat, Cookiesh has something for everyone.</p>
            </div>
        </div>
    </div>
  )
}

const availableMaleHair = ['short16', 'short15', 'short14', 'short13', 'short12', 'short11', 'short10', 'short09', 'short08', 'short07', 'short06', 'short05', 'short04', 'short03']
const availableFemaleHair = ['long20', 'short02', 'short01', 'long19', 'long18', 'long17', 'long16', 'long15', 'long14', 'long13', 'long12', 'long11', 'long10', 'long09', 'long08', 'long07', 'long06', 'long05', 'long04', 'long03', 'long02', 'long01']
const CardView = ({content}) => {
    
    const image = createAvatar(style, {
        seed: content.name,
        width: 100,
        height: 100,
        dataUri: true,
    });

    return (
        <div className='w-36 h-56 bg-primary-500 flex flex-col justify-between items-center p-8 rounded-2xl border-primary-300 border-4 transition-all ease-in-out duration-300 md:hover:scale-110'>
            <img src={image} alt={content.id} className='w-full h-auto' />
            <p className='text-center text-primary-50 font-bold mt-4'>{content.name}</p>
        </div>
    )
}


export default About