import React from 'react'

const items = [
    {
        id: 1,
        message: 'Masarap! Baso nalang ang iniwan sa akin ng kapatid ko.',
    },
    {
        id: 2,
        message: 'Sweet at masarap!',
    },
    {
        id: 3,
        message: 'Dapat pala dalawa binili ko!',
    },
    {
        id: 4,
        message: 'Ang tamis...ng sandali, ng kahapong \'di magbabalik.',
    }
]

function Featured() {
  return (
    <div id="featured" className='w-full h-auto flex flex-col p-8 justify-center items-center gap-4 lowercase md:h-screen'>
        <div>
            <h1 className='text-4xl font-bold text-primary-500 text-center'>Featured Customers</h1>
            <p className='text-center text-primary-500'>What our customers are saying about our cookiesh.</p>
        </div>
        <div className='w-full h-auto flex flex-col gap-4 md:flex-row'>
            {
                items.map(item => (
                    <CardView key={item.id} content={item} />
                ))
            }
        </div>
    </div>
  )
}

const CardView = ({content}) => {
    return (
        <div className='w-full h-auto bg-primary-500 flex flex-col justify-center items-center p-8 rounded-2xl border-primary-300 border-4 transition-all ease-in-out duration-300 md:hover:scale-110'>
            <img src={require(`../images/customers/featured/${content.id}.png`)} alt={content.id} className='w-full h-auto' />
            <p className='text-center text-primary-50 font-bold mt-4'>"{content.message}"</p>
        </div>
    )
}

export default Featured